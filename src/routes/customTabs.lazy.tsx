import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import CustomTabs from '../components/custom-tabs/CustomTabs'
import {tabs} from '../data/customTabsData'
export const Route = createLazyFileRoute('/customTabs')({
  component: RouteComponent,
})

function RouteComponent() {
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <div className='pt-30'><CustomTabs tabs={tabs} onChange={handleChange}/></div>
}
