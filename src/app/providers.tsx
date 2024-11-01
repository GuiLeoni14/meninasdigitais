'use client'
import { queryClient } from '@/lib/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

interface RootProvidersProps {
  children: ReactNode
}

export function RootProviders({ children }: RootProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
