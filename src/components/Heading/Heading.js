import React from 'react'

const Heading = ({title}) => {
  return (
      <section class="about-title" id="about-title">
          <div class="mx-auto text-center bg-blue-800 text-white py-28">
              <h1 class="text-5xl font-bold mb-2" style={{ fontFamily: "roboto-slab" }}>{title}</h1>
              <hr class="w-[10%] mx-auto h-4" />
          </div>
      </section>
  )
}

export default Heading