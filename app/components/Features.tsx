import Image from "next/image";

export function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] ">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src="/feature-1.svg"
          alt="Feature 1 image"
          width={500}
          height={500}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src="feature-1.svg"
            alt="feature 1 image"
            width={500}
            height={500}
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Gain real-time insights into sales data, customer behavior, and
            market trends, enabling businesses to make informed decisions and
            enhance their online revenue.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                />
              </span>
              Real-Time Sales Tracking
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                />
              </span>
              Comprehensive Sales Analytics
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                />
              </span>
              Product Performance
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image
                src="/blue-button.svg"
                alt="Learn more"
                width={24}
                height={24}
              />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src="/feature-2.svg"
          alt="Feature 2 image"
          width={500}
          height={500}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px] ">
            Customer Support
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Get in touch with your customers
          </h1>
          <Image
            src="/feature-2.svg"
            alt="feature 1 image"
            width={500}
            height={500}
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Streamline and enhance your customer service operations, ensure that
            your customers receive the highest level of support efficiently and
            effectively. This all-in-one solution integrates various tools and
            features to manage customer inquiries, track issues, and provide
            timely resolutions.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                />
              </span>
              Unified Inbox
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                />
              </span>
              Ticket Management
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image
                  src="/check.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                />
              </span>
              Live Chat & Chatbots
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image
                src="/green-button.svg"
                alt="Learn more"
                width={24}
                height={24}
              />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src="/feature-3.svg"
          alt="Feature 1 image"
          width={500}
          height={500}
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px] ">
            Growth Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Monitor your sites new subscribers
          </h1>
          <Image
            src="/feature-3.svg"
            alt="feature 1 image"
            width={500}
            height={500}
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Track, analyze, and optimize the growth and performance of your
            website. Gain comprehensive insights into key metrics, visitor
            behavior, and engagement, other actionable data to drive website
            improvements and business growth.
          </p>

          <div className="flex w-full gap-x-[24px] ">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">30%</h3>
              <p className="text-[#36485C] ">Increase in conversion</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
              <p className="text-[#36485C]">Satisfied customers</p>
            </div>
          </div>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image
                src="/pink-button.svg"
                alt="Learn more"
                width={24}
                height={24}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
