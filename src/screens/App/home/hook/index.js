import { useState } from "react"
const useHome = () => {
    const [SelectedDay, setSelectedDay] = useState(Date.parse(new Date()))
    return { setSelectedDay }
}

export default useHome