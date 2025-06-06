export default function PromoGrid() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-center">
        {/* Card 1: Yellow background with image */}
        <div
          className="bg-cover bg-no-repeat bg-center px-5 py-16 text-black rounded-md min-h-[302.6px] flex flex-col justify-between"
          style={{ backgroundImage: "url('/large-beam.webp')" }}
        >
          <div>
            <h2 className="text-xl font-bold mb-4">Car insurance</h2>
            <p className="mb-4 md:text-[17px] text-[17px]">
              Comprehensive cover for £250 or less – that&apos;s what 10% of new customers paid from
              December 2024 to February 2025.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-b from-[#3d3d3d] to-[#161616] 
               text-white font-bold py-2 md:px-6 px-14 rounded 
               border-[1px] border-[#151515] text-[1.1rem] 
               shadow-[inset_0_4px_4px_rgba(255,255,255,0.15)] 
               transition  hover:bg-[#5e5e5e] hover:from-transparent hover:to-transparent"
            >
              Get car Insurance
            </button>
          </div>
        </div>

        {/* Card 2: White background */}
        <div className="bg-white p-6 text-black px-8 py-16 rounded-md shadow min-h-[303.6px] flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Book your MOT and service</h2>
            <p className="mb-4 md:text-[17px] text-[16px]">
              All garages are AA approved, parts are guaranteed for 1 year, and you can spread the
              cost in 4 interest-free instalments.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-b from-[#ffcc00] to-[#f9b800] 
             text-black font-bold py-2 md:px-6 px-14 rounded 
             border border-[#d6a500] text-[1.1rem] 
             shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] 
             transition duration-300  hover:from-[#ffe066] hover:to-[#ffd633] hover:border-[#ffd633]"
            >
              Book your car in
            </button>
          </div>
        </div>

        {/* Card 3: White background */}
        <div className="bg-white p-6 text-black px-8 py-16 rounded-md shadow min-h-[303.6px] flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Had an accident?</h2>
            <p className="mb-4 md:text-[17px] text-[16px]">
              Contact us first and we’ll handle everything – from vehicle recovery to making a
              claim.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-b from-[#ffcc00] to-[#f9b800] 
             text-black font-bold py-2 md:px-6 px-4 rounded 
             border border-[#d6a500] text-[1.1rem] 
             shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] 
             transition duration-300  hover:from-[#ffe066] hover:to-[#ffd633] hover:border-[#ffd633]"
            >
              More about Accident Assist
            </button>
          </div>
        </div>

        {/* Card 4: Yellow background with image */}
        <div
          className="bg-cover bg-no-repeat bg-center px-5 py-16 text-black rounded-md min-h-[302.6px] flex flex-col justify-between"
          style={{ backgroundImage: "url('/large-beam.webp')" }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">European breakdown cover</h2>
            <p className="mb-4 md:text-[17px] text-[18px]">
              Peace of mind abroad, with over 60,000 repairers and recovery operators in 44
              countries across Europe.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-b from-[#3d3d3d] to-[#161616] 
               text-white font-bold py-2  px-6 rounded 
               border-[1px] border-[#151515] text-[1.1rem] 
               shadow-[inset_0_4px_4px_rgba(255,255,255,0.15)] 
               transition  hover:bg-[#3d3d3d] hover:from-transparent hover:to-transparent"
            >
              Buy European breakdown cover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
