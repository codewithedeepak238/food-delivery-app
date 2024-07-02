import welcome from "../assets/welcome_img.png"
import res1 from "../assets/res1.jpg"
import res2 from "../assets/res2.jpg"
import res3 from "../assets/res3.jpg"
import res4 from "../assets/res4.jpg"
import res5 from "../assets/res5.jpg"
import res6 from "../assets/res6.jpg"
import res7 from "../assets/res7.jpg"

export const Hero = () => {
  return (
    <div className="bg-[url('/src/assets/Hero_Background.png')] w-[100%] h-[125vh] bg-cover bg-right block">
        <div className="py-[15%] pl-[] w-[100%] block relative">
          <div className="container flex">
            <div className="block ml-[7%] w-[50%] pr-[10%]">
                <img src={welcome} alt="" />
                <div className="text-white mt-[5%]">
                  <p className="text-5xl font-[600] leading-[3.7rem]">Order Healthy And Fresh Food Any Time</p>
                  <p className="text-xl mt-[4%] leading-[1.9rem]">Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.</p>
                  <div className="bg-white flex items-center justify-between p-[1.5%] mt-[6%]">
                    <div className="flex flex-col">
                      <label htmlFor="search" className="text-black text-[17px] font-[500]">Search Keywords</label>
                      <input className="border-none outline-none text-black text-[13px] mt-[2%]" type="text" id="search" name="search" placeholder="Recipe Name Here!" required/>
                    </div>
                    <div className="flex items-center justify-center bg-[#ffcc00] w-[50px] h-[50px]">
                      <i class="text-center fa-solid fa-magnifying-glass text-black text-[18px]"></i>
                    </div>
                  </div>
                </div>
                <div className="mt-[4%]">
                  <h2 className="text-white text-2xl font-[500]">Popular Restaurant</h2>
                  <div className="mt-[5%] flex gap-[10px]">
                    <img className="w-[80px] cursor-pointer" src={res1} alt="" />
                    <img className="w-[80px] cursor-pointer" src={res2} alt="" />
                    <img className="w-[80px] cursor-pointer" src={res3} alt="" />
                    <img className="w-[80px] cursor-pointer" src={res4} alt="" />
                    <img className="w-[80px] cursor-pointer" src={res5} alt="" />
                    <img className="w-[80px] cursor-pointer" src={res6} alt="" />
                    <img className="w-[80px] cursor-pointer" src={res7} alt="" />
                  </div>
                </div>
            </div>
          </div>
          <div>
          </div>
          <svg id="wave" style={{transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 170" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(255, 255, 255, 1)" offset="0%"></stop><stop stopColor="rgba(255, 255, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,17L30,34C60,51,120,85,180,99.2C240,113,300,108,360,99.2C420,91,480,79,540,85C600,91,660,113,720,124.7C780,136,840,136,900,121.8C960,108,1020,79,1080,62.3C1140,45,1200,40,1260,36.8C1320,34,1380,34,1440,51C1500,68,1560,102,1620,121.8C1680,142,1740,147,1800,124.7C1860,102,1920,51,1980,45.3C2040,40,2100,79,2160,99.2C2220,119,2280,119,2340,124.7C2400,130,2460,142,2520,133.2C2580,125,2640,96,2700,76.5C2760,57,2820,45,2880,56.7C2940,68,3000,102,3060,116.2C3120,130,3180,125,3240,107.7C3300,91,3360,62,3420,45.3C3480,28,3540,23,3600,36.8C3660,51,3720,85,3780,87.8C3840,91,3900,62,3960,65.2C4020,68,4080,102,4140,96.3C4200,91,4260,45,4290,22.7L4320,0L4320,170L4290,170C4260,170,4200,170,4140,170C4080,170,4020,170,3960,170C3900,170,3840,170,3780,170C3720,170,3660,170,3600,170C3540,170,3480,170,3420,170C3360,170,3300,170,3240,170C3180,170,3120,170,3060,170C3000,170,2940,170,2880,170C2820,170,2760,170,2700,170C2640,170,2580,170,2520,170C2460,170,2400,170,2340,170C2280,170,2220,170,2160,170C2100,170,2040,170,1980,170C1920,170,1860,170,1800,170C1740,170,1680,170,1620,170C1560,170,1500,170,1440,170C1380,170,1320,170,1260,170C1200,170,1140,170,1080,170C1020,170,960,170,900,170C840,170,780,170,720,170C660,170,600,170,540,170C480,170,420,170,360,170C300,170,240,170,180,170C120,170,60,170,30,170L0,170Z"></path></svg>
        </div>
    </div>
  )
}
