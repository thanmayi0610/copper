import NavigationBar from '@/components/navigation-bar/NavigationBar'
import React from 'react'

const Rootpage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <NavigationBar/>
      <div className="h-48 bg-orange-500"/>
      <div className="h-48 bg-purple-500"/>
      <div className="h-28 bg-green-500"/>
      
    </div>
  )
}

export default Rootpage