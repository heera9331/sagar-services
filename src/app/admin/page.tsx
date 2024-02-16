"use client"
import Link from "next/link";

export default function Page() {

    return (
        <div>
            <h1>Admin</h1>
            <div className="flex flex-col text-blue-800">
                <Link href={'/admin/add-service'}>Add Service</Link>
                <Link href={'/admin/add-category'}>Add Category</Link>
                <Link href={'/admin/add-provider'}>Add A Service Provider</Link>
            </div>
        </div>
    )
}