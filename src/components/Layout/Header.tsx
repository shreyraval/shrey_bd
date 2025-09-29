import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Family', href: '/family' },
  { name: 'Photos', href: '/photos' },
]

interface HeaderProps {
  onShareClick: () => void
}

export function Header({ onShareClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll for header background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if we're on homepage for transparent header
  const isHomePage = location.pathname === '/'

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 no-print",
      isHomePage && !isScrolled
        ? "bg-transparent border-transparent"
        : "bg-white/70 dark:bg-stone-900/60 backdrop-blur-md border-b border-stone-200/50 dark:border-stone-700/50 shadow-sm"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className={cn(
                "font-bold text-xl font-display transition-colors duration-300",
                isHomePage && !isScrolled
                  ? "text-white"
                  : "text-stone-900 dark:text-stone-100"
              )}>Shrey Raval</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 relative",
                  location.pathname === item.href
                    ? isHomePage && !isScrolled
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white"
                      : "text-violet-600 dark:text-violet-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-violet-600 dark:after:bg-violet-400"
                    : isHomePage && !isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-stone-600 dark:text-stone-300 hover:text-violet-600 dark:hover:text-violet-400"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onShareClick}
              className={cn(
                "hidden sm:flex transition-colors duration-300",
                isHomePage && !isScrolled
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-stone-600 dark:text-stone-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-stone-100 dark:hover:bg-stone-800"
              )}
            >
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={cn(
                "transition-colors duration-300",
                isHomePage && !isScrolled
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-stone-600 dark:text-stone-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-stone-100 dark:hover:bg-stone-800"
              )}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden transition-colors duration-300",
                isHomePage && !isScrolled
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-stone-600 dark:text-stone-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-stone-100 dark:hover:bg-stone-800"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className={cn(
              "px-2 pt-2 pb-3 space-y-1 border-t transition-colors duration-300",
              isHomePage && !isScrolled
                ? "border-white/20 bg-black/20 backdrop-blur-md"
                : "border-stone-200 dark:border-stone-700 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md"
            )}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300",
                    location.pathname === item.href
                      ? isHomePage && !isScrolled
                        ? "text-white bg-white/20"
                        : "text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-900/20"
                      : isHomePage && !isScrolled
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-stone-600 dark:text-stone-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="ghost"
                onClick={onShareClick}
                className={cn(
                  "w-full justify-start px-3 py-2 text-base font-medium sm:hidden transition-colors duration-300",
                  isHomePage && !isScrolled
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-stone-600 dark:text-stone-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                )}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}