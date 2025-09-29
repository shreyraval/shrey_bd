import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Heart, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/Container'
import { useProfile } from '@/hooks/useProfile'

export function AboutPage() {
  const { profile, loading } = useProfile()

  if (loading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="py-20 bg-stone-50 dark:bg-stone-900">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">About {profile.name.split(' ')[0]}</h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
            Learn more about my background, education, career journey, and what I'm looking for in life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <Card variant="glass" rounded="lg">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-stone-600 dark:text-stone-400 mb-4">
                    Sections
                  </h3>
                  <div className="space-y-1">
                    {[
                      { id: 'overview', label: 'Overview' },
                      { id: 'education', label: 'Education' },
                      { id: 'career', label: 'Career' },
                      { id: 'lifestyle', label: 'Lifestyle' }
                    ].map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block px-3 py-2 text-sm rounded-lg text-stone-600 dark:text-stone-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors duration-200"
                      >
                        {section.label}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3 space-y-12">
            {/* Overview Section */}
            <motion.section
              id="overview"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" rounded="lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/20 rounded-xl flex items-center justify-center">
                      <Heart className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
                    I'm a passionate technology professional with a strong foundation in software development
                    and artificial intelligence. I believe in continuous learning, maintaining strong family values,
                    and building meaningful relationships.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
                    I value honesty, kindness, and mutual respect in all relationships. I'm looking for a life
                    partner who shares similar values and is interested in growing together both personally and
                    professionally.
                  </p>

                  <div className="pt-2">
                    <h4 className="font-semibold mb-4 text-lg">Personal Values</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Family-oriented', 'Honest', 'Ambitious', 'Respectful', 'Adventurous'].map((value) => (
                        <Badge key={value} className="bg-violet-100 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300 px-3 py-1">{value}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Education Section */}
            <motion.section
              id="education"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" rounded="lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/20 rounded-xl flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {profile.education.map((edu, index) => (
                      <div key={index} className="relative">
                        {index !== profile.education.length - 1 && (
                          <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-violet-200 to-transparent dark:from-violet-800"></div>
                        )}
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div className="flex-1 min-w-0 bg-stone-50 dark:bg-stone-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                            <p className="text-violet-600 dark:text-violet-400 font-medium">{edu.school}</p>
                            <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">Class of {edu.year}</p>
                            {edu.highlights && (
                              <ul className="text-sm text-stone-600 dark:text-stone-300 space-y-2">
                                {edu.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="mr-3 text-violet-500 font-bold">•</span>
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Career Section */}
            <motion.section
              id="career"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" rounded="lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/20 rounded-xl flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    Career Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {profile.career.map((job, index) => (
                      <div key={index} className="relative">
                        {index !== profile.career.length - 1 && (
                          <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-violet-200 to-transparent dark:from-violet-800"></div>
                        )}
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <div className="flex-1 min-w-0 bg-stone-50 dark:bg-stone-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-lg mb-1">{job.title}</h4>
                            <p className="text-violet-600 dark:text-violet-400 font-medium">{job.org}</p>
                            <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">
                              {job.from} - {job.to}
                            </p>
                            {job.bullets && (
                              <ul className="text-sm text-stone-600 dark:text-stone-300 space-y-2">
                                {job.bullets.map((bullet, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="mr-3 text-violet-500 font-bold">•</span>
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Lifestyle Section */}
            <motion.section
              id="lifestyle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" rounded="lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/20 rounded-xl flex items-center justify-center">
                      <Target className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    Lifestyle & Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-stone-50 dark:bg-stone-800/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-4 text-lg">Lifestyle</h4>
                      <div className="space-y-3">
                        {profile.lifestyle.diet && (
                          <div className="flex justify-between items-center py-2 border-b border-stone-200 dark:border-stone-700 last:border-0">
                            <span className="text-stone-600 dark:text-stone-400">Diet:</span>
                            <span className="font-medium text-stone-900 dark:text-stone-100">{profile.lifestyle.diet}</span>
                          </div>
                        )}
                        {profile.lifestyle.alcohol && (
                          <div className="flex justify-between items-center py-2 border-b border-stone-200 dark:border-stone-700 last:border-0">
                            <span className="text-stone-600 dark:text-stone-400">Alcohol:</span>
                            <span className="font-medium text-stone-900 dark:text-stone-100">{profile.lifestyle.alcohol}</span>
                          </div>
                        )}
                        {profile.lifestyle.smoke && (
                          <div className="flex justify-between items-center py-2 border-b border-stone-200 dark:border-stone-700 last:border-0">
                            <span className="text-stone-600 dark:text-stone-400">Smoking:</span>
                            <span className="font-medium text-stone-900 dark:text-stone-100">{profile.lifestyle.smoke}</span>
                          </div>
                        )}
                        {profile.lifestyle.work_life && (
                          <div className="flex justify-between items-center py-2 border-b border-stone-200 dark:border-stone-700 last:border-0">
                            <span className="text-stone-600 dark:text-stone-400">Work-Life:</span>
                            <span className="font-medium text-stone-900 dark:text-stone-100">{profile.lifestyle.work_life}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-stone-50 dark:bg-stone-800/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-4 text-lg">Preferences</h4>
                      <div className="space-y-3">
                        {typeof profile.preferences.relocation === 'boolean' && (
                          <div className="flex justify-between items-center py-2 border-b border-stone-200 dark:border-stone-700 last:border-0">
                            <span className="text-stone-600 dark:text-stone-400">Relocation:</span>
                            <span className="font-medium text-stone-900 dark:text-stone-100">{profile.preferences.relocation ? 'Open to' : 'Prefer not to'}</span>
                          </div>
                        )}
                        {typeof profile.preferences.abroad === 'boolean' && (
                          <div className="flex justify-between items-center py-2 border-b border-stone-200 dark:border-stone-700 last:border-0">
                            <span className="text-stone-600 dark:text-stone-400">International:</span>
                            <span className="font-medium text-stone-900 dark:text-stone-100">{profile.preferences.abroad ? 'Open to' : 'Prefer domestic'}</span>
                          </div>
                        )}
                        {profile.preferences.family_values && (
                          <div className="flex justify-between items-center py-2 border-b border-stone-200 dark:border-stone-700 last:border-0">
                            <span className="text-stone-600 dark:text-stone-400">Family Values:</span>
                            <span className="font-medium text-stone-900 dark:text-stone-100">{profile.preferences.family_values}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-stone-50 dark:bg-stone-800/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-4 text-lg">Interests & Hobbies</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest) => (
                        <Badge key={interest} className="bg-violet-100 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300 px-3 py-1">{interest}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </main>
        </div>
      </Container>
    </div>
  )
}