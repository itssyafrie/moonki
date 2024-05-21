import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="pt-4 lg:pt-10">
        <div className="px-[20px] lg:px-[280px]">
          <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
            Transforming good websites to great
          </h1>
          <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
            We are committed to ensuring the health and performance of your
            online presence. Our mission is to provide peace of mind, knowing
            your website is operating at its best around the clock.
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
          <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] ">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
              <Image
                src="/Instagram post - 2.svg"
                alt="Feature 1 image"
                width={500}
                height={500}
                className="hidden w-1/2 sm:block"
              />
              <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">
                  Founder/President
                </h3>
                <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                  Vincent LeBlanc
                </h1>
                <Image
                  src="/Instagram post - 2.svg"
                  alt="feature 1 image"
                  width={500}
                  height={500}
                  className="pt-[24px] sm:hidden"
                />
                <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                  Vincent LeBlanc is the visionary President and Founder of
                  Moonki, bringing over 15 years of expertise in the web
                  industry to the helm of our company. With a passion for
                  technology and a deep understanding of the digital landscape,
                  Vincent has been instrumental in shaping Moonki into a leading
                  website monitoring service provider.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row">
              <Image
                src="/Instagram post - 3.svg"
                alt="Feature 2 image"
                width={500}
                height={500}
                className="hidden w-1/2 sm:block"
              />
              <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
                <h3 className="font-medium text-[#00A424] lg:text-[18px] ">
                  Co-founder/Vice President
                </h3>
                <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                  Luisa Morales
                </h1>
                <Image
                  src="/Instagram post - 3.svg"
                  alt="feature 1 image"
                  width={500}
                  height={500}
                  className="pt-[24px] sm:hidden"
                />
                <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                  Luisa Morales is the dynamic Vice President and Co-Founder of
                  Moonki, bringing a wealth of experience and a relentless drive
                  for excellence to our team. With over a decade in the tech
                  industry, Luisa combines her expertise in web development and
                  digital strategy to help steer Moonki towards continuous
                  growth and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="py-[48px] lg:py-[60px]">
            <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px]">
              Our milestones
            </h1>
            <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row pt-14">
              <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                  <p className="text-[#36485C] lg:text-2xl">
                    Businesses transformed
                  </p>

                  <p className="pt-4 text-[#4328EB] text-3xl font-extrabold lg:text-5xl">
                    3424
                  </p>
                </div>
              </div>
              <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                  <p className="text-[#36485C] lg:text-2xl">
                    Average reported ROI of our user
                  </p>

                  <p className="pt-4 text-[#4328EB] text-3xl font-extrabold lg:text-5xl">
                    20x
                  </p>
                </div>
              </div>
              <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                  <p className="text-[#36485C] lg:text-2xl">
                    Average increased revenue
                  </p>

                  <p className="pt-4 text-[#4328EB] text-3xl font-extrabold lg:text-5xl">
                    $20M
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[48px] lg:py-[60px]">
            <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px]">
              Our values
            </h1>
            <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row pt-14">
              <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                  <p className="text-[#36485C] lg:text-2xl">
                    Make Magic Possible
                  </p>

                  <p className="pt-4 text-[#4328EB] text-3xl font-extrabold lg:text-5xl">
                    3424
                  </p>
                </div>
              </div>
              <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                  <p className="text-[#36485C] lg:text-2xl">
                    Obsess Over Quality
                  </p>

                  <p className="pt-4 text-[#4328EB] text-3xl font-extrabold lg:text-5xl">
                    20x
                  </p>
                </div>
              </div>
              <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                  <p className="text-[#36485C] lg:text-2xl">Have Fun</p>

                  <p className="pt-4 text-[#4328EB] text-3xl font-extrabold lg:text-5xl">
                    $20M
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
