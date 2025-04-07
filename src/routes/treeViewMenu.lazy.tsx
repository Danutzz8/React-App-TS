import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import TreeViewMenu from '../components/tree-view-menu/TreeViewMenu'
import menus from '../data/tree-view-data'

export const Route = createLazyFileRoute('/treeViewMenu')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='pt-30'><TreeViewMenu menus={menus} /></div>
}
