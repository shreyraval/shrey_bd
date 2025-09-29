import React, { useState } from 'react'
import { Copy, Check, MessageCircle, Link2, Mail } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { copyToClipboard, generateWhatsAppLink } from '@/lib/utils'

interface ShareModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ShareModal({ open, onOpenChange }: ShareModalProps) {
  const [copied, setCopied] = useState(false)
  const currentUrl = window.location.href

  const handleCopyLink = async () => {
    try {
      await copyToClipboard(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const handleWhatsAppShare = () => {
    const message = `Hi! I'd like to share Shrey Raval's profile with you. Please take a look: ${currentUrl}`
    const whatsappUrl = generateWhatsAppLink('', message)
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailShare = () => {
    const subject = encodeURIComponent("Shrey Raval's Profile")
    const body = encodeURIComponent(`Hi,

I'd like to share Shrey Raval's profile with you. Please take a look at: ${currentUrl}

Best regards`)

    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Profile</DialogTitle>
          <DialogDescription>
            Share this profile with family and friends
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Copy Link */}
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground">
                    {currentUrl}
                  </div>
                </div>
                <Button size="sm" onClick={handleCopyLink}>
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Share Options */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              onClick={handleWhatsAppShare}
              className="flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>

            <Button
              variant="outline"
              onClick={handleEmailShare}
              className="flex items-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </Button>
          </div>

          <div className="text-xs text-muted-foreground text-center">
            This link will open the public profile page
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}