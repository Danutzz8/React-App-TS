import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import LoadMorePage from '../components/load-more/LoadMorePage'

export const Route = createLazyFileRoute('/loadMore')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><LoadMorePage /></div>
}
