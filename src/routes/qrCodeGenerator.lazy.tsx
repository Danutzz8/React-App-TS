import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import QRCodeGenerator from '../components/QR-code/QRCodeGenerator'

export const Route = createLazyFileRoute('/qrCodeGenerator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='pt-40'><QRCodeGenerator  /></div>
}
