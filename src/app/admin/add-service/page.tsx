"use client"

import React, { useState, ReactHTMLElement, FormEvent, useEffect } from "react"
import { Button, Input, TextArea } from "@/components";
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
    const [providers, setProviders] = useState<{ id: number, name: string }[] | null>(null)

    const getProviders = async () => {
        let res = await axios.get('/api/providers');
        if (res.statusText == 'OK') {
            let data = await res.data;
            setProviders(data.providers);
        }
    }

    const getCategories = async () => {

    }

    const handleSubmit: React.FormEventHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let res = await axios.post('/api/services', service);
            console.log(res);
        } catch (error: any) {
            console.log('error while posting', error);
        }
    }

    useEffect(() => {
        getProviders();
    }, [])

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

                <TextArea
                    placeholder="Enter description"
                    label="Description"
                    htmlFor="description"
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
                <div className="flex flex-col gap-2 m-1 p-1">
                    <label htmlFor="provider">Provider</label>
                    <select name="provider" id="provider" className="bg-slate-100">
                        {providers && providers.map((provider) => {
                            return <option key={provider.id} value={provider.id} >{provider.name}</option>
                        })}
                    </select>
                </div>
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