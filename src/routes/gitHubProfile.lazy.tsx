import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import GitHubProfile from '../components/git-hub-profile/GitHubProfile'

export const Route = createLazyFileRoute('/gitHubProfile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='pt-30'><GitHubProfile /></div>
}
