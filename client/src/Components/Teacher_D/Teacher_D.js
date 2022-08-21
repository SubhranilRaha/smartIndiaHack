import React from 'react'
import { Link } from 'react-router-dom'
import Bottomobnav from './bottomobnav'
import Dashtopnav from '../Dashboard_Components/Navigation/dashtopnav'
import Modulecard from '../Dashboard_Components/Cards/Modulecard'
import Pathcard from '../Dashboard_Components/Cards/Pathcard'
import Topiccard from '../Dashboard_Components/Cards/Topiccard'
import Areachart from '../Dashboard_Components/Charts/Areachart'
import Barchart from '../Dashboard_Components/Charts/Barchart'
import Linechart from '../Dashboard_Components/Charts/Piechart'
import LearnPathCreateForm from '../Dashboard_Components/Forms/LearnPathCreateForm'
import Circularbar from '../Dashboard_Components/Progressbars/Circularbar'
import Linearbar from '../Dashboard_Components/Progressbars/Linearbar'
import Progresswrapper from '../Dashboard_Components/Progressbars/Progresswrapper'
import { BrowserRouter, Routes, Route } from "react-router-dom";

	
	
function Teacher_D() {
  return (

    <div >
        <Dashtopnav />
        <LearnPathCreateForm/>
        {/* 
        <Areachart/>
        <Barchart/>
        <Circularbar/>
        <Linearbar/>
        <Linechart/>
        */}
        <Bottomobnav />
    </div>
  )
}

export function THome(){
  return (
    <div id='Thome'>
      <Dashtopnav />
      <Progresswrapper/> 
      <Bottomobnav />
    </div>
  )
}
export function TPath(){
  return (
    <div id='Tpath'>
      <Dashtopnav />
      <Topiccard/>
      <Bottomobnav />
    </div>
  )
}
export function TContact(){
  return (
    <div id='Tcontact'>
      <Dashtopnav />
      <Pathcard/>
      <Bottomobnav />
    </div>
  )
}
export function TAddUser(){
  return (
    <div id='Tadduser'>
      <Dashtopnav />
      <Modulecard/>
      <Bottomobnav />
    </div>
  )
}

export default Teacher_D