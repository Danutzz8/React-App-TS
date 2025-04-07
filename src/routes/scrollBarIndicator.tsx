import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import ScrollBarIndicator from '../components/scroll-bar-indicator/ScrollBarIndicator'

export const Route = createFileRoute('/scrollBarIndicator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><ScrollBarIndicator url={'https://dummyjson.com/products?limit=100'} /></div>
}
