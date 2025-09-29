import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { ShareModal } from '@/components/Modals/ShareModal'

export function Layout() {
  const [shareModalOpen, setShareModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onShareClick={() => setShareModalOpen(true)} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <ShareModal
        open={shareModalOpen}
        onOpenChange={setShareModalOpen}
      />
    </div>
  )
}