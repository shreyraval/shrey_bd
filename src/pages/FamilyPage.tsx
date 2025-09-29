import React from 'react'
import { motion } from 'framer-motion'
import { Users, User, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/Container'
import { useProfile } from '@/hooks/useProfile'

export function FamilyPage() {
  const { profile, loading } = useProfile()

  if (loading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Family</h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
            Family is the foundation of our values and traditions. Get to know the people who have shaped who I am today.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Parents Section */}
          <motion.section variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display mb-4 flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/20 rounded-xl flex items-center justify-center">
                  <Heart className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                </div>
                Parents
              </h2>
              <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
                The pillars of our family who have guided and supported us throughout our journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Father */}
              <Card variant="elevated" rounded="lg" className="text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold font-display mb-3">
                    {profile.family.parents.father.name || 'Father'}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium mb-4">
                    {profile.family.parents.father.occupation || 'Loving father and family pillar'}
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                    A dedicated professional and caring father who has always emphasized the importance
                    of education, hard work, and maintaining strong moral values.
                  </p>
                </CardContent>
              </Card>

              {/* Mother */}
              <Card variant="elevated" rounded="lg" className="text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold font-display mb-3">
                    {profile.family.parents.mother.name || 'Mother'}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium mb-4">
                    {profile.family.parents.mother.occupation || 'Loving mother and family heart'}
                  </p>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                    The heart of our family who has nurtured us with unconditional love, wisdom,
                    and traditional values while encouraging us to pursue our dreams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Siblings Section */}
          {profile.family.siblings && profile.family.siblings.length > 0 && (
            <motion.section variants={itemVariants}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-display mb-4 flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/20 rounded-xl flex items-center justify-center">
                    <Users className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  Siblings
                </h2>
                <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
                  My wonderful {profile.family.siblings.length === 1 ? 'sibling' : 'siblings'} who {profile.family.siblings.length === 1 ? 'has' : 'have'} been my {profile.family.siblings.length === 1 ? 'companion' : 'companions'} throughout life's journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {profile.family.siblings.map((sibling, index) => (
                  <Card key={index} variant="elevated" rounded="lg" className="text-center group hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <User className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold font-display mb-2">
                        {sibling.name || `${sibling.relation}`}
                      </h3>
                      <p className="text-violet-600 dark:text-violet-400 font-medium mb-3">
                        {sibling.relation}
                      </p>
                      {sibling.details && (
                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                          {sibling.details}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>
          )}

          {/* Family Values Section */}
          <motion.section variants={itemVariants}>
            <Card variant="elevated" rounded="lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-display">Family Values & Traditions</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-4xl mx-auto">
                  Our family has always believed in the importance of staying connected to our roots
                  while embracing modern values. We celebrate traditional festivals, maintain strong
                  cultural ties, and prioritize education and personal growth.
                </p>
                <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-4xl mx-auto">
                  We value honesty, respect for elders, compassion for others, and the importance
                  of supporting each other through all of life's ups and downs. These values have
                  shaped who we are and guide our decisions every day.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                  {[
                    'Respect',
                    'Tradition',
                    'Education',
                    'Compassion',
                    'Unity',
                    'Growth',
                    'Honesty',
                    'Support'
                  ].map((value) => (
                    <div
                      key={value}
                      className="p-4 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-700 rounded-xl text-violet-700 dark:text-violet-300 font-medium hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors duration-200"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </Container>
    </div>
  )
}