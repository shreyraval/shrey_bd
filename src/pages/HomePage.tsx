import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Users,
  Globe,
  Download,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/Container'
import { useProfile } from '@/hooks/useProfile'
import { calculateAge, maskEmail, maskPhone } from '@/lib/utils'
import { assetPath } from '@/lib/assetPath'

export function HomePage() {
  const { profile, loading, error } = useProfile()
  const showSensitive = true
  const heroUrl = assetPath('images/hero-bg.jpg')

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Failed to load profile</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  const handlePrintPDF = () => {
    window.print()
  }

  const quickFacts = [
    {
      icon: Calendar,
      label: 'Age',
      value: `${calculateAge(profile.dob)} years`,
      sensitive: false
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      sensitive: false
    },
    {
      icon: Briefcase,
      label: 'Profession',
      value: profile.profession,
      sensitive: false
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: profile.education_highest,
      sensitive: false
    },
    {
      icon: Users,
      label: 'Family',
      value: `${profile.family.siblings?.length || 0} sibling${(profile.family.siblings?.length || 0) !== 1 ? 's' : ''}`,
      sensitive: false
    },
    {
      icon: Globe,
      label: 'Languages',
      value: profile.languages.join(', '),
      sensitive: false
    }
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)] md:bg-[rgba(0,0,0,0.45)]" />
        <div className="relative z-10 w-full">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-balance mb-6">
                {profile.name}
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8">
                {profile.tagline}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {/* PRIMARY — gradient */}
                <Link
                  to="/about"
                  className={[
                    // layout
                    'inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium',
                    'transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    // enforce exact colors (no tokens)
                    'text-white',
                    'bg-gradient-to-r from-[#6D28D9] to-[#9333EA]',
                    'hover:from-[#7E22CE] hover:to-[#A21CAF]',
                    'shadow-[0_10px_30px_rgba(124,58,237,0.45)] hover:shadow-[0_14px_34px_rgba(162,28,175,0.55)]',
                    'hover:scale-[1.02]',
                    // REMOVE any disabled look:
                    '!opacity-100',
                  ].join(' ')}
                >
                  More about me
                </Link>

                {/* SECONDARY — glass */}
                <Link
                  to="/family"
                  className={[
                    'inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium',
                    'transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    'text-[#F1F5F9]',
                    'bg-[rgba(255,255,255,0.16)] backdrop-blur',
                    'border border-[rgba(255,255,255,0.28)]',
                    'hover:bg-[rgba(255,255,255,0.26)] hover:text-[#FFFFFF]',
                    '!opacity-100',
                  ].join(' ')}
                >
                  Family
                </Link>

                {/* GHOST — link style */}
                <Link
                  to="/photos"
                  className={[
                    'inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium',
                    'transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    'bg-transparent',
                    'text-[#C4B5FD]',
                    'hover:text-[#FFFFFF] hover:underline',
                    '!opacity-100',
                  ].join(' ')}
                >
                  Photo Gallery
                </Link>
              </div>
              <div className="mt-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePrintPDF}
                  className="no-print text-white/80 hover:text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Bio PDF
                </Button>
              </div>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 bg-stone-50 dark:bg-stone-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Quick Facts</h2>
              <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-8">
                Get to know the essential details about my background, interests, and aspirations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="elevated" rounded="lg" className="h-full group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                        <fact.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{fact.label}</h3>
                      <p className="text-stone-600 dark:text-stone-400">{fact.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <Card variant="glass" rounded="lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {profile.contacts.email && (
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600 dark:text-stone-400">Email:</span>
                        <span className="font-mono text-sm bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded">
                          {showSensitive ? profile.contacts.email : maskEmail(profile.contacts.email)}
                        </span>
                      </div>
                    )}
                    {profile.contacts.phone && (
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600 dark:text-stone-400">Phone:</span>
                        <span className="font-mono text-sm bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded">
                          {showSensitive ? profile.contacts.phone : maskPhone(profile.contacts.phone)}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card variant="glass" rounded="lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-6">Interests & Hobbies</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest) => (
                      <Badge key={interest} className="bg-violet-100 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}