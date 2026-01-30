"use client"

import Image from "next/image"

const Explorebtn = () => {
  return (
    <div className="flex flex-row">
      <button type="button" id="explore-btn" onClick={()=> console.log("Hello ")} className="mt-7 mx-auto">
        <a href="#events">
          Explore Events
          <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
        </a>
      </button>
    </div>
  )
}

export default Explorebtn
