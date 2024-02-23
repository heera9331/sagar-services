"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { Button } from "@/components/index";

import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { useRouter } from "next/navigation";

interface ServiceProps {
  id: number,
  title: string,
  description: string,
  provider: string,
  district: string,
  category: string,
  address: string,
  contact: string,
}

export default function Home() {
  const [services, setServices] = useState<ServiceProps[]>([]);
  const router = useRouter();
  const getServices = async () => {
    let res = await axios.get('/api/services');
    console.log(res);

    if (res.statusText == 'OK') {
      let data = await res.data;
      console.log(data);
      setServices(data.services);
    }
  }

  useEffect(() => {
    getServices();
  }, [])

  return (
    <div className="flex min-h-[90vh] max-h-[90vh]">
      {/* left sidebar */}
      <aside className="p-4 border-r border-black border-opacity-25 columns-sm">
        <div className="flex flex-col">

          <div className="flex flex-col">

            <div className="flex flex-col gap-2 m-1 p-1">
              <input type="search" placeholder="Search here..."
                className="py-1 px-4 rounded-sm text-black border border-black border-opacity-25 focus:outline-none focus:border-b-1" />
            </div>
            <h3 className="font-semibold">Filters</h3>
            <div className="flex flex-col gap-2 m-1 p-1">
              <label htmlFor="district">District</label>
              <select name="district" id="district" className="bg-slate-100">
                <option value={``}> - - - - - </option>
                <option value={`Damoh`}> Damoh </option>
                <option value={`Sagar`}> Sagar </option>
                <option value={`Chattarpur`}> Chattarpur </option>
              </select>
            </div>
            <div className="flex flex-col gap-2 m-1 p-1">
              <label htmlFor="category">Category</label>
              <select name="category" id="category" className="bg-slate-100">
                <option value={``}> - - - - - </option>
                <option value={`Education`}> Education </option>
                <option value={`Home Service Provider`}> Home Service Provider</option>
              </select>
            </div>
          </div>
        </div>
      </aside>

      {/* main display services */}
      <div className="px-4 flex">
        <main className="text-black overflow-x-hidden overflow-y-auto" style={{ scrollBehavior: "smooth" }}>
          <div className="">
            {services.length > 0 && services.map((service) => (
              <div className="p-4 my-4 text-gray-800 flex flex-col gap-2 border border-black border-opacity-25 rounded-sm" key={service.id}>
                <h3 className="text-xl font-semibold flex items-center">
                  <MdOutlineMiscellaneousServices className="text-3xl" />
                  <span>{service.title}</span>
                </h3>
                <p> ➡️ {service.description}</p>
                <p className="flex items-center gap-2"> <FaLocationDot className="text-xl" /> {service.district}</p>
                <p className="flex items-center gap-2">
                  <MdCategory className="text-xl" />
                  <span>{service.category}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>Rating - </span>
                  <span className="flex">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                  </span>
                  <span>(4/5)</span>
                </p>
                <div>
                  <Button
                    text="View More"
                    className="bg-gray-100"
                    onClick={() => {
                      router.push(`/${service.id}`)
                    }}
                  />
                </div>
              </div>
            ))}

          </div>
        </main>
        <aside className="min-w-[250px]">

        </aside>
      </div>
    </div>
  );
}
