import { useState, useEffect } from 'react'
import type { Profile } from '@/types/profile'
import { assetPath } from '@/lib/assetPath'

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProfileSafe = async (url: string) => {
      const res = await fetch(url, { cache: 'no-cache' })
      if (!res.ok) throw new Error(`profile.json HTTP ${res.status}`)
      const data = await res.json()
      return data
    }

    const fetchProfile = async () => {
      try {
        setLoading(true)
        const profileUrl = assetPath('data/profile.json')
        console.log('[profile.json URL]', profileUrl)

        const data = await loadProfileSafe(profileUrl)
        setProfile(data)
      } catch (err) {
        console.error('Profile loading error:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  return { profile, loading, error }
}
