import { Outlet } from "react-router-dom";


const RootLayout = () => {


    return (
        <div className="flex min-h-screen w-full">
                <main className="w-full">
                    <Outlet />
                </main>
        </div>
    );
};

export default RootLayout;