'use client'
import AboutPage from "@/components/pages/about"
import Introduce from "@/components/pages/about/introduce"
import { useEffect, useState } from "react"

export default function About() {
  const [isPcType, setIsPcType] = useState(false)
  useEffect(() => {
    const mobileTypeList = ["iPhone", "iPad", "iPod", "Android"];
    const machineType = navigator.userAgent;
    const mobileTypeCheck = mobileTypeList.filter((item) => {
      return machineType.search(item) != -1
    })
    if(mobileTypeCheck.length > 0){
      setIsPcType(false)
    }else{
      setIsPcType(true)
    }
    console.log(machineType)
  })
  return (
    <div>
      {
        isPcType
        ? 
        <div>aa</div> 
        :
        <div>
          <AboutPage/>
          <Introduce/>
        </div>
      }
      
    </div>
  )
}
