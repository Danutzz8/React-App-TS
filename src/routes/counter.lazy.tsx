import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import  Counter  from '../components/Counter'

export const Route = createLazyFileRoute('/counter')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='pt-40'><Counter /></div> 
}
