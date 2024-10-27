import React from 'react'
import { Button } from "@/components/ui/button"

function Heading() {
  return (
    <div>
       <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Compare Options, Make Better Choices
            </h1>
            <p className="mx-auto max-w-[700px] text-white text-sm sm:text-base md:text-xl">
              Clash helps you compare options in a fun, visual way. Set up a clash, invite friends, and make decisions
              together.
            </p>
          </div>
          <Button className="bg-white text-primary hover:bg-gray-100" size="lg">
            Start a Clash
          </Button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Heading
