import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Heart, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/Container'
import { Lightbox } from '@/components/ui/lightbox'
import { useProfile } from '@/hooks/useProfile'
import { cn } from '@/lib/utils'
import { assetPath } from '@/lib/assetPath'

type GalleryCategory = 'all' | 'casual' | 'traditional'

interface CategoryInfo {
  key: GalleryCategory
  label: string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

const categories: CategoryInfo[] = [
  {
    key: 'all',
    label: 'All Photos',
    icon: Camera,
    description: 'View all photos'
  },
  {
    key: 'casual',
    label: 'Casual',
    icon: Heart,
    description: 'Everyday moments and casual shots'
  },
  {
    key: 'traditional',
    label: 'Traditional',
    icon: Sparkles,
    description: 'Traditional and cultural occasions'
  }
]

export function PhotosPage() {
  const { profile, loading } = useProfile()
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState<string[]>([])

  if (loading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  const normalizeImages = (paths?: string[]) => {
    if (!Array.isArray(paths)) return []
    const clean = paths.filter(path =>
      typeof path === 'string' &&
      path.trim() &&
      !/placeholder/i.test(path)
    )
    return clean.map((image) => assetPath(image))
  }

  const getAllImages = () => {
    const allImages: string[] = []
    Object.values(profile.gallery).forEach((categoryImages) => {
      allImages.push(...normalizeImages(categoryImages))
    })
    return allImages
  }

  const getCategoryImages = (category: GalleryCategory) =>
    category === 'all'
      ? getAllImages()
      : normalizeImages(
          profile.gallery[category as Exclude<GalleryCategory, 'all'>]
        )

  const getFilteredImages = () => {
    if (activeCategory === 'all') {
      return getAllImages()
    }
    return getCategoryImages(activeCategory)
  }

  const openLightbox = (imageIndex: number) => {
    const images = getFilteredImages()
    setCurrentImages(images)
    setCurrentImageIndex(imageIndex)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    )
  }

  const filteredImages = getFilteredImages()

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
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Photo Gallery</h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed">
            A glimpse into my life through various moments and occasions. Click on any photo to view it in full size.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.key
              const categoryImages = getCategoryImages(category.key)

              return (
                <Button
                  key={category.key}
                  variant={isActive ? "solid" : "outline"}
                  onClick={() => setActiveCategory(category.key)}
                  className={cn(
                    "flex items-center gap-2 transition-all duration-200",
                    isActive && "shadow-lg scale-105"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                  <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    {categoryImages.length}
                  </span>
                </Button>
              )
            })}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-violet-100 dark:bg-violet-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="h-12 w-12 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-2xl font-semibold font-display mb-3">No photos available</h3>
              <p className="text-stone-600 dark:text-stone-400 text-lg">
                Photos for this category will be added soon.
              </p>
            </div>
          ) : (
            <section className="mx-auto max-w-6xl px-4">
              <div className="grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 [grid-auto-rows:1fr]">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={`${activeCategory}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <Card
                      variant="elevated"
                      rounded="lg"
                      className="overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                      <div
                        className="relative w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-md aspect-[4/3] cursor-pointer"
                        onClick={() => openLightbox(index)}
                      >
                        <img
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => { e.currentTarget.parentElement?.classList.add('hidden') }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <Camera className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </motion.div>

      {/* Lightbox */}
      <Lightbox
        images={currentImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrevious={previousImage}
      />

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card variant="glass" rounded="lg" className="inline-block">
            <div className="px-6 py-4">
              <p className="text-stone-600 dark:text-stone-400">
                Use keyboard arrows (← →) to navigate between photos, or ESC to close the viewer.
              </p>
            </div>
          </Card>
        </motion.div>
      </Container>
    </div>
  )
}
