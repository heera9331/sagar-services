"use client"

import React, { useState, ReactHTMLElement, useEffect } from "react"
import { Button, Input } from "@/components";
import axios from "axios";

interface providerProp {
    name: string,
    mobile: string,
    district: string
}

export default function Page() {
    const [provider, setProvider] = useState<providerProp>({
        name: "",
        mobile: "",
        district: ""
    })


    const handleSubmit: React.FormEventHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let res = await axios.post('/api/providers', provider);
            console.log(res);
        } catch (error: any) {
            console.log('error while posting', error);
        }
    }

    return (
        <div className="">
            <h1 className="text-2xl font-semibold ">Add A New Service Provider</h1>

            <div className="w-[450px] m-auto p-4 rounded-sm shadow-md border border-black border-opacity-25">

                <Input
                    type="text"
                    htmlFor="name"
                    label="Name"
                    placeholder="Enter provider name"
                    value={provider.name}
                    onChange={(e: any) => {
                        setProvider({ ...provider, name: e.target.value })
                    }}
                />
                <Input
                    type="text"
                    htmlFor="mobile"
                    label="Contact Number"
                    placeholder="Enter mobile number"
                    value={provider.mobile}
                    onChange={(e: any) => {
                        setProvider({ ...provider, mobile: e.target.value })
                    }}
                />
                <Input
                    type="text"
                    htmlFor="district"
                    label="District"
                    placeholder="Enter mobile district"
                    value={provider.district}
                    onChange={(e: any) => {
                        setProvider({ ...provider, district: e.target.value })
                    }}
                />

                <div className="flex mt-2 items-center justify-center">
                    <Button
                        text="Add Now"
                        onClick={(e: React.FormEvent) => {
                            handleSubmit(e);
                        }}
                    />
                </div>
            </div>

        </div>
    )
}