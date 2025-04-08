import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import TicTacToe from '../components/tic-tact-toe/TicTacToe'

export const Route = createLazyFileRoute('/ticTactToe')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='pt-30'><TicTacToe /></div>
}
