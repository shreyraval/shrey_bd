import React from 'react'
import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background no-print">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for family and future</span>
          </div>

          <div className="text-xs text-muted-foreground max-w-md">
            <p className="mb-2">
              This website contains personal information shared for matrimonial purposes.
              All data is stored locally and not transmitted to external servers.
            </p>
            <p>
              For any questions or to request additional information, please use the contact options provided.
            </p>
          </div>

          <div className="text-xs text-muted-foreground">
            © 2024 Shrey Raval. Built with React & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  )
}