import Image from "next/image";

export function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px]">
        Flexible plans for you
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
        No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Free Trial
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for testing the waters
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              0$<span className="text-[#5F7896]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.svg"
                    alt="included"
                    width={24}
                    height={24}
                  />
                </span>
                Real-Time Performance Monitoring
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.svg"
                    alt="included"
                    width={24}
                    height={24}
                  />
                </span>
                Basic Analytics
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.svg"
                    alt="included"
                    width={24}
                    height={24}
                  />
                </span>
                Limited Monitoring Locations
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Start Trial
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Business
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for small businesses
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              500$<span className="text-[#5F7896]">/mo</span>
            </h2>

            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.svg"
                    alt="included"
                    width={24}
                    height={24}
                  />
                </span>
                Real-Time Performance Monitoring
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.svg"
                    alt="included"
                    width={24}
                    height={24}
                  />
                </span>
                Advanced Basic Analytics
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.svg"
                    alt="included"
                    width={24}
                    height={24}
                  />
                </span>
                Advanced Monitoring Locations
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.svg"
                    alt="included"
                    width={24}
                    height={24}
                  />
                </span>
                Alert Notifications
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image
                    src="/check.svg"
                    alt="included"
                    width={24}
                    height={24}
                  />
                </span>
                Integration & Automation
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Get Started
          </button>
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Enterprise
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for big companies
            </p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Custom</h2>

            <p className="pt-4 text-[16px] text-[#36485C]">
              Our Custom Tier is the ultimate solution for enterprises and
              organizations with unique and demanding web monitoring needs. This
              tier offers a highly flexible and tailored approach, providing
              advanced features, dedicated resources, and bespoke solutions to
              ensure your website operates at peak performance under all
              conditions.
            </p>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
