import { useState, useEffect } from "react"

const baseUrl = "http://www.boredapi.com/api/activity"

export function useBoredApiFetchFacade({ filterParams, timestampTrigger }) {
  const [isLoading, setIsLoading] = useState()
  const [activity, setActivity] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        const url = filterParams.type
          ? `${baseUrl}?type=${filterParams.type}`
          : baseUrl
        let result = await fetch(url)
        if (!result.ok) {
          return
        }
        result = await result.json()
        setActivity(result)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [filterParams, timestampTrigger])

  return {
    isLoading,
    activity,
  }
}
