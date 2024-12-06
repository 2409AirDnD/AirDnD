import React, {useState} from "react"; 
import Skills from "./Skills.jsx"
import BasicInfo from "./BasicInfo.jsx"
import {useEffect} from "react" 

const CharacterSheet = () => {
  return (
    <>
    <BasicInfo/>
    <Skills/>
    </>
  
  )
}

export default CharacterSheet;