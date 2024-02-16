"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { GiConsoleController } from "react-icons/gi";


export default function Home() {
  const [services, setServices] = useState(null);

  const getServices = async () => {
    let res = await axios.get('/api/services');
    console.log(res);
  }

  useEffect(() => {
    getServices();
  }, [])

  return (
    <main>
      <h1 className="text-3xl font-semibold">Main Section</h1>
    </main>
  );
}
