"use client";

import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";

const Page = () => {
    const [service, setService]=  useState(null);

    const params = useSearchParams();
    const id = params.get('id');
    console.log(id)
    const getService = async () => {
        let res = await axios.get(`/api/services?id=${id}`);
        console.log(res);

        if (res.statusText == 'OK') {
            let data = await res.data;
            console.log(data);
            setService(data.services[0]);
        }
    }
    
    useEffect(()=>{
        getService();
    }, [id])


    // Assuming you want to use the id retrieved from the query parameters
    return (
        <div>
            <h1>Service Page</h1>
        </div>
    );
};

export default Page;
