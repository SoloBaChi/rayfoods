import React from "react";
import Link from "next/link";
import SubscribeEmailBtn from "./subscribeEmailBtn";
import FacebookIcon from "./icons/facebookIcon";
import InstagramIcon from "./icons/instagramIcon";
import YoutubeIcon from "./icons/youtubeIcon";
import TwitterIcon from "./icons/twitterIcon";

function Footer() {
  return (
    <footer className="footer-container px-[5%] py-[_1.5rem] pt-[_4rem] lg:px-[_7%] bg-[_#1E1E1E] text-[_#fff]">
      <div className="top-menu">
        <ul className="lg:grid lg:gap-8 grid-cols-12">
          <li className="col-span-3 font-[_700] text-xl mb-8">
            <Link href="/" className="mb-6 block">
              ABOUT US
            </Link>
            <ul>
              <li>
                <Link href="/" className="text-lg font-[_600] block mb-2">
                  About Rayfoods
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-[_600] block mb-2">
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-[_600] block mb-2">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-[_600] block mb-2">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </li>
          <li className="col-span-3 font-[_700] text-xl mb-8">
            <Link href="/" className="mb-6 block">
              SUPPORT
            </Link>
            <ul>
              <li>
                <Link href="/" className="text-lg font-[_600] block mb-2">
                  Support@Rayfoods.ng
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-[_600] block mb-2">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-[_600] block mb-2">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg font-[_600] block mb-2">
                  FAQ
                </Link>
              </li>
            </ul>
          </li>
          <li className="col-span-6 mb-8 font-[_700] text-xl">
            <Link href="/" className="mb-4 block">
              SUBSCRIBE TO OUR NEWSLETTER
            </Link>
            <SubscribeEmailBtn />
          </li>
        </ul>
      </div>
      <div className="bottom-menu">
        <h4 className="font-[_700] text-xl mb-4">JOIN US</h4>
        <div className="flex flex-row flex-wrap justify-between">
          <div className="left-item social-media-links flex flex-row gap-2 items-center">
            <InstagramIcon />
            <YoutubeIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
          <div className="right-item">
            Copyright 2023 RayFoods. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
