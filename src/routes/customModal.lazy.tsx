import React, {useState} from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import CustomModal from '../components/custom-modal/CustomModal'

export const Route = createLazyFileRoute('/customModal')({
  component: RouteComponent,
})

function RouteComponent() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div className='pt-30'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={handleToggleModalPopup}>
        Open Modal
      </button>
      {showModalPopup && <CustomModal onClose={onClose} button={<button>Go to</button>}/>}
    </div>
  )
}

