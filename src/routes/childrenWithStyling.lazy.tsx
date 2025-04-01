import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import ShowBox from '../components/childrenWithStyling'

export const Route = createLazyFileRoute('/childrenWithStyling')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ShowBox />
}
