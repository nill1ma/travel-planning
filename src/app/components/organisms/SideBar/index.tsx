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
        <div className={`h-full w-[15%] bg-stone-800`}>
            <BaseList variant="ul" style={style} className="w-full flex flex-col align-center">
                {menu?.map((item) => (
                     <Link  
                        className={`${item.active ? "bg-stone-50 font-bold text-stone-800" : "text-white"} py-5 w-full cursor-pointer  flex justify-center`}    
                        href={item.href}
                        key={item.id} 
                        onClick={() => handleSetMenu(item.id)} 
                    >
                        <BaseListItem 
                            className="text-left w-[50%]" 
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