import MainContent from "@/components/MainContent"
import SideBar from "@/components/SideBar"

const RootLayout = () => {
    return (
        <div className="flex min-h-screen w-full">
            <SideBar />
            <MainContent />
        </div>
    )
}

export default RootLayout