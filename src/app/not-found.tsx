'use client'

import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('NotFound')

  return (
    <main className="container mx-auto max-w-lg md:max-w-2xl lg:max-w-6xl">
      <Navbar />
      <div className="max-w-screen-md mx-auto flex items-center justify-center h-[25rem] md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="font-Relative text-gray-400 text-4xl mb-1 lg:text-5xl animate-shine bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text">
            {t('title')}
          </h3>
          <p className="text-primary font-RelativeBk">
            {t('paragraph')}
          </p>
          <Button size="sm" className='gap-2' onClick={() => {
            window.history.back()
          }}
          >
            {t('buttonTitle')}
            <ArrowRight className='text-secondary' size={20} />
          </Button>
        </div>
      </div>
    </main>
  )
}
