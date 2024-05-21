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
            Grow your brand to new heights & beyond
          </h1>
          <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
            Our Website Monitoring Dashboard is your all-in-one solution for
            tracking the health and performance of your online presence.
            Designed with user-friendly interfaces and powerful analytics, our
            dashboard provides real-time insights into your business
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
                src="/Dashboard-1.svg"
                alt="Feature 1 image"
                width={500}
                height={500}
                className="hidden w-1/2 sm:block"
              />
              <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                <h3 className="font-medium text-yellow-600 lg:text-[18px] ">
                  Sales Dashboard
                </h3>
                <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                  Vincent LeBlanc
                </h1>
                <Image
                  src="/Dashboard-1.svg"
                  alt="feature 1 image"
                  width={500}
                  height={500}
                  className="pt-[24px] sm:hidden"
                />
                <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                  Our Sales Dashboard for web monitoring provides real-time
                  insights into your sales performance. Track leads,
                  conversions, and revenue, analyze sales trends, and forecast
                  future growth to optimize your sales strategy and drive
                  business success.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row">
              <Image
                src="/Dashboard-2.svg"
                alt="Feature 2 image"
                width={500}
                height={500}
                className="hidden w-1/2 sm:block"
              />
              <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
                <h3 className="font-medium text-blue-500 lg:text-[18px] ">
                  Finance Dashboard
                </h3>
                <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                  Luisa Morales
                </h1>
                <Image
                  src="/Dashboard-1.svg"
                  alt="feature 1 image"
                  width={500}
                  height={500}
                  className="pt-[24px] sm:hidden"
                />
                <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                  Our Finance Dashboard for web monitoring provides a real-time
                  overview of your financial metrics, helping you track income,
                  expenses, and profitability. With detailed reports, budget
                  management, and forecasting tools, it offers the insights you
                  need to make informed financial decisions and ensure the
                  financial health of your web monitoring services.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
              <Image
                src="/Dashboard-3.svg"
                alt="Feature 1 image"
                width={500}
                height={500}
                className="hidden w-1/2 sm:block"
              />
              <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                <h3 className="font-medium text-violet-500 lg:text-[18px] ">
                  Customer & Growth Dashboard
                </h3>
                <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                  Vincent LeBlanc
                </h1>
                <Image
                  src="/Dashboard-3.svg"
                  alt="feature 1 image"
                  width={500}
                  height={500}
                  className="pt-[24px] sm:hidden"
                />
                <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                  Our Customer & Growth Dashboard for web monitoring offers
                  real-time insights into customer metrics and growth trends.
                  Track user engagement, retention rates, and acquisition
                  channels to optimize customer satisfaction and drive
                  sustainable growth for your business.
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
        </div>
      </div>

      <Footer />
    </>
  );
}
