
"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { PiCheckLight } from "react-icons/pi";
import Navbar from "../components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Footer from "../landingpage/footer";

const Calendars = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return(
        <div>
        <Navbar/>
        



        
        
        
    <div
      style={{
        height: "100%",
        width: "100%", 
        position: "relative",
        overflow: "hidden",
      }}
      
      className="md:flex justify-center pt-20 px-8"
    >
      <div>
        <div className="text-5xl font-medium w-2/3">
          Join our integration team
        </div>

        <div className="py-4 text-gray-500">
          Let's talk about how the team can help you work better.
        </div>

        <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-lg my-4">
          
          <div className="flex gap-4 border-b ">
            <PiCheckLight className="text-2xl " />

            <div className="font-normal pb-4 w-80">
              One flexible tool for your entire company to share knowledge, ship projects, and collaborate.
            </div>
          </div>

          <div className="flex gap-4 border-b ">
            <PiCheckLight className="text-2xl " />

            <div className="font-normal pb-4 w-80">
              Enterprise features to securely manage user access and security.
            </div>
          </div>

          <div className="flex gap-4">
            <PiCheckLight className="text-2xl " />

            <div className="font-normal pb-4 w-80">
              Dedicated support to work with you on your setup and help you build the best plan for your company.
            </div>
            
          </div>
          <p className="py-4 text-gray-500">Choose which day you ready to join !</p>
        <Calendar mode="single" selected={date} onSelect={setDate} className="flex justify-left items-center p-4" />
        <div className="flex flex-col justify-between items-center md-2"><Button >Submit</Button>
        </div>
        </div>
        
      </div>
      
    </div>
    <Footer/>
    
        </div>

        
        
    )
}

export default Calendars;