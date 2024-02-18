"use client"

import React, { useState, useEffect, ReactHTMLElement } from "react"
import { Button, Input } from "@/components";
import axios from "axios";

interface categoryProps {
    name: string,
    parentCategoryId: number,
    providerId: number
}

export default function Page() {

    const [category, setCategory] = useState<categoryProps>({
        name: "",
        parentCategoryId: 1,
        providerId: 1
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
            let res = await axios.post('/api/category', category);
            console.log(res);
        } catch (error: any) {
            console.log('error while posting', error);
        }
    }

    useEffect(() => {
        getProviders();
        getCategories();
    })

    return (
        <div className="">
            <h1 className="text-2xl font-semibold ">Add A New Category</h1>

            <div className="w-[450px] m-auto p-4 shadow-md">
                <Input
                    type="text"
                    htmlFor="Category"
                    label="Category Name"
                    placeholder="Enter category name"
                    value={category.name}
                    onChange={(e: any) => {
                        setCategory({ ...category, name: e.target.value })
                    }}
                />
                <div className="flex flex-col gap-2 m-1 p-1">
                    <label htmlFor="provider">Provider</label>
                    <select name="provider" id="provider" className="bg-slate-100"
                        required
                        onChange={(e) => {
                            setCategory({ ...category, providerId: Number(e.target.value) })
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
                            setCategory({ ...category, parentCategoryId: Number(e.target.value) })
                        }}
                    >
                        <option value={0}> --select-- </option>
                        {categories && categories.map((category) => {
                            return <option key={category.id} value={category.id} >{category.name}</option>
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