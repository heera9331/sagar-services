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
    const [categories, setCategories] = useState<{ id: number, name: string }[] | null>(null)

    const getProviders = async () => {
        let res = await axios.get('/api/providers');
        if (res.statusText == 'OK') {
            let data = await res.data;
            setProviders(data.providers);
        }
    }

    const getCategories = async () => {
        let res = await axios.get('/api/categories');
        console.log(res);
        if (res.statusText == 'OK') {
            let data = await res.data;
            console.log(data);
            setCategories(data.categories);
        }
    }

    const handleSubmit: React.FormEventHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log(service)
            let res = await axios.post('/api/services', service);
            if (res.statusText == 'OK') {
                console.log(await res.data);
                alert('success')
                e.defaultPrevented
            } else {
                console.log(await res.data);
                alert('something is not right');
            }
        } catch (error: any) {
            console.log('error while posting', error);
            alert('something is not right');
        }
    }

    useEffect(() => {
        getProviders();
        getCategories();
    }, [])

    return (
        <div className="mb-10">
            <h1 className="text-2xl font-semibold ">Add A New Service</h1>
            <form action="#" method="post" onSubmit={(e: FormEvent) => { handleSubmit(e) }} className="w-[450px] m-auto p-4 rounded-sm shadow-md border border-black border-opacity-25">
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
                    <select name="provider" id="provider" className="bg-slate-100"
                        required
                        onChange={(e) => {
                            setService({ ...service, providerId: Number(e.target.value) })
                        }}
                    >
                        <option value={0}> --select-- </option>
                        {providers && providers.map((provider) => {
                            return <option key={provider.id} value={provider.id} >{provider.name}</option>
                        })}
                    </select>
                </div>
                <div className="flex flex-col gap-2 m-1 p-1">
                    <label htmlFor="category">Select category</label>
                    <select name="category" id="category" className="bg-slate-100"
                        onChange={(e) => {
                            setService({ ...service, categoryId: Number(e.target.value) })
                        }}
                    >
                        <option value={0}> --select-- </option>
                        {categories && categories.map((category) => {
                            return <option key={category.id} value={category.id} >{category.name}</option>
                        })}
                    </select>
                </div>
                <div className="flex mt-2 items-center justify-center gap-2">
                    <Button
                        text="Add Now"
                        onClick={(e: React.FormEvent) => {
                        }}
                        type="submit"
                    />
                    {/* todo: to be implemented */}
                    {/* <Button
                        type="reset"
                        className="bg-red-600"
                        text="Reset"
                        onClick={(e) => { }}
                    /> */}
                </div>
            </form >
        </div>
    )
}