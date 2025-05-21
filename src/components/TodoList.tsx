"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { Calendar1Icon } from "lucide-react";
import React, { useState } from "react";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <Calendar1Icon />
            {date ? (
              <span>{format(date, "PPP")}</span>
            ) : (
              <span>Pick a Day</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          {" "}
          <Calendar
            mode="single"
            selected={date}
            onSelect={(dt) => {
              setDate(dt);
              setOpen(false);
            }}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>
      {/* list */}
      <ScrollArea className="max-h-[400px] h-full w-full mt-4 ">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 30 }).map((_, i) => (
            <Card key={i} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={`item${i + 1}`} />
                <div>
                  <label
                    htmlFor={`item${i + 1}`}
                    className="text-sm text-muted-foreground"
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </label>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
