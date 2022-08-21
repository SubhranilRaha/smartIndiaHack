import React from 'react'
import { Link } from 'react-router-dom'
import Bottomobnav from '../Dashboard_Components/Navigation/bottomobnav'
import Dashtopnav from '../Dashboard_Components/Navigation/dashtopnav'

function Student_D() {
  return (
    <div >
        <Dashtopnav />
        <Bottomobnav />
    </div>
  )
}

export default Student_D