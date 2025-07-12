import { Travel } from "@/app/types/travel"


const getStoredTravelItems = () => {
    if (typeof window !== "undefined") {
      const storedTravelItems = localStorage.getItem("travel");
      if (storedTravelItems !== null) {
        try {
          const travelItems = JSON.parse(storedTravelItems);
          return travelItems;
        } catch (error) {
          console.error(error);
        }
      }
    }
    return [];
}
  

const setLocalStorage = <T>(value: T) => {
    localStorage.setItem("travel", JSON.stringify(value))
}

const getLocalStorage = <T>(optionalResponse?: T) => {
    const value = localStorage.getItem("travel")
    return value ? JSON.parse(value) : optionalResponse
}

const postTravelPlanning = (travel: Travel) => {
    const data = getStoredTravelItems()
    setLocalStorage<Travel[]>([...data, travel])
}

const getTravelPlanning = () => {
    return getStoredTravelItems()
}

export {
    postTravelPlanning,
    getTravelPlanning,
    getStoredTravelItems
}
