"use client";
import { useState } from "react";
import BaseList from "../../atoms/BaseList";
import BaseListItem from "../../atoms/BaseListItem";
import Link from "next/link";

interface SideBarProps {
    style?: React.CSSProperties;
    className?: string;
}


const SideBar = ({ style, className }: SideBarProps) => {

    const [menu, setMenu] = useState([
        { id: "travels", label: "Travels", active: false, href: "/list" },
        { id: "create", label: "Create", active: false, href: "/create" },
        { id: "settings", label: "Settings", active: false, href: "/settings" },
    ])


    const handleSetMenu = (id: string) => {
        setMenu(menu.map((item) => item.id === id ? { ...item, active: true } : { ...item, active: false }))
    }
    return (
        <div className={`h-screen w-32 bg-sky-500`}>
            <BaseList variant="ul" style={style} className="w-full flex flex-col align-center">
                {menu?.map((item) => (
                     <Link  
                        className={`${item.active ? "bg-sky-600 font-bold" : ""} py-5 w-full cursor-pointer text-white flex justify-center`}    
                        href={item.href}
                        key={item.id} 
                    >
                        <BaseListItem 
                            className="text-left w-[50%]" 
                            onClick={() => handleSetMenu(item.id)} 
                        >
                        {item.label}
                        </BaseListItem>
                    </Link>
                ))}
            </BaseList> 
        </div>
    )
}

export default SideBar