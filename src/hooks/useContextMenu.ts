import { useEffect } from "react"

export const useContextMenu = () => {
  // Add an event listener to the document to prevent the context menu from appearing
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }
    document.addEventListener("contextmenu", preventContextMenu)
    return () => {
      document.removeEventListener("contextmenu", preventContextMenu)
    }
  }, [])
}