import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import WeatherCard from '../components/weather-app/WeatherCard'

export const Route = createLazyFileRoute('/weatherApp')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='pt-30'><WeatherCard /></div>
}
