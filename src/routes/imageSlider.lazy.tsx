import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import ImageSlider from '../components/image-slider'

export const Route = createLazyFileRoute('/imageSlider')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='pt-40'><ImageSlider url='https://picsum.photos/v2/list' limit='7' page='2' /></div>
}
