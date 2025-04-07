import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import  StarRating  from '../components/star-rating/StarRating'

export const Route = createLazyFileRoute('/starRating')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='pt-40'><StarRating /></div>
}
