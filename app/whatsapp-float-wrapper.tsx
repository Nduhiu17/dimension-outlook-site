'use client'

import dynamic from 'next/dynamic'

const WhatsAppFloat = dynamic(() => import('@/components/whatsapp-float'), {
  loading: () => null,
  ssr: false,
})

export default function WhatsAppFloatWrapper() {
  return <WhatsAppFloat />
}
