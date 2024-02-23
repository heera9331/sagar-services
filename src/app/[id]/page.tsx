import React from "react";
import axios from "axios";

interface PageProps {

}

const getService = async (id: Number) => {
    
}

const Page: React.FC<PageProps> = ({ params }: any) => {
    const service = getService(params.id);

    return (
        <div>
            <h1>Single Service Page</h1>
        </div>
    );
}

export default Page;