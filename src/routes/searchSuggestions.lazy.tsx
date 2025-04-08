import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import SearchSuggestions from '../components/search-with-API/SearchSuggestions';

export const Route = createLazyFileRoute('/searchSuggestions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='pt-30'>< SearchSuggestions /></div>
}
