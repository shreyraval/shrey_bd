import { useState, useEffect } from 'react'
import type { Profile } from '@/types/profile'
import { assetPath } from '@/lib/assetPath'

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true)
        const profileUrl = assetPath('data/profile.json')
        console.log('[profile.json URL]', profileUrl)
        const response = await fetch(profileUrl, { cache: 'no-cache' })

        if (!response.ok) {
          throw new Error('Failed to fetch profile data')
        }

        const data = await response.json()
        setProfile(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  return { profile, loading, error }
}
