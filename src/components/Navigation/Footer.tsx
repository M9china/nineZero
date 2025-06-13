import Link from "next/link";

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-[#9bca48]">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
            {/* Sitemap sections */}
            <div className="col-span-6 mt-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6">
              <div>
                <h3 className="text-md font-semibold text-black">Contact Details</h3>
                <ul role="list" className="mt-2 space-y-2">
                  <li>
                    <Link className="text-sm text-black" href="mailto:info@ninezero.co.za">info@ninezeroholdings.co.za</Link>
                  </li>
                  <li>
                    <Link className="text-sm text-black" href="tel:+27792681578">+27 79 268 1578</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-md font-semibold text-black">
                  Head Office Address
                </h3>
                
                <ul className="mt-2">
                    <li>
                        <p className="text-sm text-black">
                            834 Justice Mahomed St, Brooklyn, Pretoria 0081
                        </p>
                    </li>
                </ul>
              </div>
            </div>

            {/* Newsletter section */}
            <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
              <h3 className="text-sm font-medium text-black">
                Industry updates right to your inbox
              </h3>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  required
                  autoComplete="email"
                  className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-8 text-center">
          <p className="text-sm text-black">
            &copy; 2023 Ninezero Holdings (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
