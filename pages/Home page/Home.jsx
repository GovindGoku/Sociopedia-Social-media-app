import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Sidepart from '../../components/sidepart/Sidepart'
import Rightpart from '../../components/rightpart/Rightpart'
import Feedx from '../../components/Feedx/Feedx'
import './Home.css'


export default function Home() {
  return (
    <>
    <Topbar />
    <div className='homeContainer'>
    <Sidepart/>
    <Feedx/>
    <Rightpart/>
    </div>
    </>
  )
}