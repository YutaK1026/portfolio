import { createContext, useContext } from 'react'
import { SpringValue } from '@react-spring/web'


export const DockContext = createContext({ width: 0, hovered: false, setIsZooming: () => {} })

export const useDock = () => {
  return useContext(DockContext)
}
