"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarForm() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col justify-right">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow
      "
    />
    </div>
  )
}
