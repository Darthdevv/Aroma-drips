import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


const MainContent = () => {
    const location = useLocation()
    const [tab, setTab] = useState<string>("")

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search)
        const tab = urlParams.get("tab") || ''
        setTab(tab)
    }, [location.search])
    return (
        <div className="w-full">
            {tab}
        </div>
    )
}

export default MainContent