import Image from "next/image";

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500 lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className="flex w-full pt-8 justify-center gap-x-6 ">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Try for free
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing
            <span>
              <Image
                src="/blue-button.svg"
                alt="Learn more"
                width={40}
                height={40}
              />
            </span>
          </button>
        </div>
      </div>

      <div className="flex h-full w-full justify-center">
        <div className="pb-10 flex w-full flex-col items-center">
          <Image
            src="/Image.webp"
            alt="hero image"
            width={500}
            height={500}
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />
        </div>
      </div>
    </div>
  );
}
