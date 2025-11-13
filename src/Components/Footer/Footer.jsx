import React from "react";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-indigo-100  dark:bg-slate-900 shadow-md rounded-xl w-full p-6 md:p-9">
      <div className="flex justify-between gap-[30px] flex-wrap w-full">
        {/* About Section */}
        <div>
          <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">
            About The Store
          </h3>
          <div className="flex flex-col gap-2 text-black">
            {[
              "Home",
              "Become a customer",
              "About us",
              "FAQ",
              "Return policy",
              "Contact us",
            ].map((text) => (
              <span key={text}>
                <a className="text-[0.9rem] dark:text-slate-400 hover:text-blue-400 cursor-pointer">
                  {text}
                </a>
              </span>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">
            Use Cases
          </h3>
          <div className="flex flex-col gap-[8px] text-black">
            {[
              "Use Cases",
              "Web-designers",
              "Marketers",
              "Small Business",
              "Website Builder",
            ].map((text) => (
              <span key={text}>
                <a className="text-[0.9rem] dark:text-slate-400 hover:text-blue-400 cursor-pointer">
                  {text}
                </a>
              </span>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">
            Resources
          </h3>
          <div className="flex flex-col gap-[8px] text-black">
            {[
              "Resources",
              "Academy",
              "Blog",
              "Themes",
              "Hosting",
              "Developers",
              "Support",
            ].map((text) => (
              <span key={text}>
                <a className="text-[0.9rem] dark:text-slate-400 hover:text-blue-400 cursor-pointer">
                  {text}
                </a>
              </span>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">
            Company
          </h3>
          <div className="flex flex-col gap-[8px] text-black">
            {["About Us", "Careers", "FAQs", "Teams", "Contact Us"].map(
              (text) => (
                <span key={text}>
                  <a className="text-[0.9rem] dark:text-slate-400 hover:text-blue-400 cursor-pointer">
                    {text}
                  </a>
                </span>
              )
            )}
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold text-[#424242] mb-2">
            Get in touch
          </h3>
          <div className="flex gap-[7px] text-black">
            {[CgFacebook, BsTwitter, BsInstagram, BsLinkedin].map(
              (Icon, index) => (
                <a
                  key={index}
                  className="text-[1.2rem] p-1.5 cursor-pointer hover:text-white transition-all duration-300 dark:text-slate-400 rounded-full hover:bg-blue-400"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="md:flex-row border-t dark:border-slate-700 border-gray-200 pt-[20px] flex-col flex items-center gap-[15px] w-full justify-between mt-8">
        <div className="flex flex-wrap gap-y-[6px] gap-x-[15px] sm:gap-[15px] text-gray-400">
          {[
            "Privacy Policy",
            "Terms of Use",
            "Sales and Refunds",
            "Legal",
            "Site Map",
          ].map((text) => (
            <span key={text}>
              <a className="text-[0.9rem] dark:text-slate-500 hover:text-blue-400 cursor-pointer">
                {text}
              </a>
            </span>
          ))}
        </div>
        <p className="text-gray-400 dark:text-slate-500 cursor-pointer text-[0.8rem]">
          © 2024 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
