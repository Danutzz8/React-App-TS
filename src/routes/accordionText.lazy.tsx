import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import AccordionText from '../components/accordianText/AccordianText'

export const Route = createLazyFileRoute('/accordionText')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><AccordionText /></div>
}
