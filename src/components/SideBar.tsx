import { useState } from 'react'
import { Sidebar, SidebarBody, SidebarLink } from './ui/sidebar'
import { IconHome, IconSettings, IconUser } from '@tabler/icons-react';

const SideBar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false)

    const links = [
        { label: "Home", href: "/aroma", icon: <IconHome /> },
        { label: "Profile", href: "/aroma?tab=profile", icon: <IconUser /> },
        { label: "Settings", href: "/aroma?tab=settings", icon: <IconSettings /> },
    ];
    return (
        <Sidebar open={sideBarOpen} setOpen={setSideBarOpen}>
            <div className='flex-1'>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {sideBarOpen ? "logo" : "icon"}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link) => (
                                <SidebarLink key={link.href} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Manu Arora",
                                href: "#",
                                icon: (
                                    <img
                                        src="https://assets.aceternity.com/manu.png"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </div>
        </Sidebar>
    )
}

export default SideBar