"use client"

import React, { useState, ReactHTMLElement } from "react"
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

    const handleSubmit : React.FormEventHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let res = await axios.post('/api/category', category);
            console.log(res);
        } catch(error: any) {
            console.log('error while posting', error);
        }
    }

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
                <Input
                    type="text"
                    htmlFor="provider"
                    label="Provider"
                    placeholder="Enter provider name"
                    value={category.providerId}
                    onChange={(e: any) => {
                        setCategory({ ...category, providerId: e.target.value })
                    }}
                />
                <Input
                    type="text"
                    htmlFor="parentCategoryId"
                    label="Parent Category"
                    placeholder="Enter category name"
                    value={category.parentCategoryId}
                    onChange={(e: any) => {
                        setCategory({ ...category, parentCategoryId: e.target.value })
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