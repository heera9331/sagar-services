"use client"

import React, { useState, ReactHTMLElement } from "react"
import { Button, Input } from "@/components";
import axios from 'axios';
import { useRouter } from "next/navigation";

interface providerProp {
    username: string,
    password: string
}

export default function Page() {
    const router = useRouter();
    const [user, setUser] = useState<providerProp>({
        username: "",
        password: ""
    })

    const handleLogin = async () => {
        try {
            console.log(user);
            let res = await axios.post('/api/login', user);
            if (res.statusText == "OK") {
                let data = await res.data;
                router.push('/')

            } else {
                alert(res.data?.error);
            }
        } catch (error) {
            console.log(error)
            alert('login error');
        }
    }

    return (
        <div className="flex flex-col items-center justify-center m-auto min-h-[70vh]">
            <h1 className="text-2xl font-semibold ">Login</h1>
            <div className="w-[450px] m-auto px-2  py-4 shadow-md shadow-gray-400">
                <Input
                    type="text"
                    htmlFor="username"
                    label="Name"
                    placeholder="Enter username"
                    value={user.username}
                    onChange={(e: any) => {
                        setUser({ ...user, username: e.target.value })
                    }}
                />
                <Input
                    type="password"
                    htmlFor="password"
                    label="Password"
                    placeholder="Enter password"
                    value={user.password}
                    onChange={(e: any) => {
                        setUser({ ...user, password: e.target.value })
                    }}
                />

                <div className="flex mt-2 items-center justify-center">
                    <Button
                        text="Login"
                        onClick={(e: React.FormEvent) => {
                            e.preventDefault();
                            handleLogin();
                        }}
                    />
                </div>
            </div>

        </div>
    )
}