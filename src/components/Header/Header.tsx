"use client"
import { useState } from "react";
import Link from "next/link"

const Header = () => {
    const [click, setClick] = useState<boolean>(false);

    const handleClick = () => {
        setClick(!click);
    }
    return (
        <header className="flex items-center justify-between bg-gray-800 text-white  py-2 px-2 relative">
            <h1 className="text-3xl font-semibold">
                <Link href="/">
                    Logo
                </Link>
            </h1>
            <input type="search" placeholder="Search here..."
                className="py-1 px-4 rounded-sm text-black focus:outline-none focus:border-b-1 " />
            {/* <ul className={`flex items-center justify-center gap-2 right-0 bg-stone-800 max-sm:flex-col max-sm:items-start max-sm:absolute max-sm:top-12 max-sm:mt-1 `}> */}
            <ul className={`bg-gray-800 flex items-start justify-start flex-wrap gap-2 shadow-md max-md:flex-col max-md:absolute max-md:top-12 max-md:right-0 max-md:p-4 max-md:h-[100vh]  ${click ? "max-sm:hidden" : ""
                }`}>
                {/*  */}
                <li className="hover:bg-gray-700 py-1 px-2 rounded-sm cursor-pointer transition-all ease-in delay-100">
                    <Link href={"/"}>
                        Home
                    </Link>
                </li>
                <li className="hover:bg-gray-700 py-1 px-2 rounded-sm cursor-pointer transition-all ease-in delay-100">
                    <Link href="/admin">
                        Admin
                    </Link>
                </li>

                <li className="hover:bg-gray-700 py-1 px-2 rounded-sm cursor-pointer transition-all ease-in delay-100">About us</li>
                <li className="hover:bg-gray-700 py-1 px-2 rounded-sm cursor-pointer transition-all ease-in delay-100">Contact us</li>
                <li className="hover:bg-gray-700 py-1 px-2 rounded-sm cursor-pointer transition-all ease-in delay-100">
                    <Link href="/login">
                        Login
                    </Link>
                </li>
            </ul>

            <button className="bg-white text-stone-700 rounded-sm py-1 px-2 font-semibold sm:hidden"
                onClick={handleClick}
            >
                Menu
            </button>

        </header>
    )
}


export default Header;