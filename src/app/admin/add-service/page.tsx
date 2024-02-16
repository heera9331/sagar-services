"use client"

import React, { useState, ReactHTMLElement } from "react"
import { Button, Input } from "@/components";
import axios from "axios";

interface ServiceProps {
    title: string,
    description: string,
    providerId: number | null,
    district: string,
    categoryId: number | null,
    address: string,
    contact: string,
}

export default function Page() {
    const [service, setService] = useState<ServiceProps>({
        title: "",
        description: "",
        providerId: null,
        district: "",
        categoryId: null,
        address: "",
        contact: ""
    })
    const handleSubmit : React.FormEventHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let res = await axios.post('/api/services', provider);
            console.log(res);
        } catch(error: any) {
            console.log('error while posting', error);
        }
    }
    return (
        <div className="">
            <h1 className="text-2xl font-semibold ">Add A New Service</h1>

            <div className="w-[450px] m-auto p-4 shadow-md">
                <Input
                    type="text"
                    htmlFor="title"
                    label="Name"
                    placeholder="Enter service name"
                    value={service.title}
                    onChange={(e: any) => {
                        setService({ ...service, title: e.target.value })
                    }}
                />
                <Input
                    type="text"
                    htmlFor="description"
                    label="Decription"
                    placeholder="Enter description"
                    value={service.description}
                    onChange={(e: any) => {
                        setService({ ...service, description: e.target.value })
                    }}
                />
                <Input
                    type="text"
                    htmlFor="district"
                    label="District"
                    placeholder="Enter district"
                    value={service.district}
                    onChange={(e: any) => {
                        setService({ ...service, district: e.target.value })
                    }}
                />
                <Input
                    type="text"
                    htmlFor="address"
                    label="Address"
                    placeholder="Enter address"
                    value={service.address}
                    onChange={(e: any) => {
                        setService({ ...service, address: e.target.value })
                    }}
                />
                <Input
                    type="text"
                    htmlFor="contact"
                    label="Contact Number"
                    placeholder="Enter contact number"
                    value={service.contact}
                    onChange={(e: any) => {
                        setService({ ...service, contact: e.target.value })
                    }}
                />

                <div className="flex mt-2 items-center justify-center">
                    <Button
                        text="Add Now"
                        onClick={(e: React.FormEvent) => {
                            handleSubmit(e)

                        }}
                    />
                </div>
            </div>

        </div>
    )
}