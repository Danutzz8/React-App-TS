import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import CustomHooks from '../components/various-customHook-component/CustomHooks'

export const Route = createLazyFileRoute('/customHooks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='pt-30'><CustomHooks url={'https://dummyjson.com/products?limit=100'}/></div>
}
