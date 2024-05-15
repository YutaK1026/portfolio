import { useState, useEffect } from 'react'

type useCheckDeviceType = () => {
  isPC: boolean,
  isLoading: boolean
}

export const useCheckDeviceType: useCheckDeviceType = () => {
  const [isPC, setIsPC] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const mobileTypeList = ["iPhone", "iPad", "iPod", "Android"];
    const machineType = navigator.userAgent;
    const mobileTypeCheck = mobileTypeList.filter((item) => {
      return machineType.search(item) != -1
    })
    if(mobileTypeCheck.length > 0){
      setIsPC(false)
      setIsLoading(false)
    }else{
      setIsPC(true)
      setIsLoading(false)
    }
  },[])

  return {
    isPC,
    isLoading
  }
}