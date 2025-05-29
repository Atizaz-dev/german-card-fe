'use client';

import Image from 'next/image';
import Link from 'next/link';

// Image imports
import logo from '@assets/img/GermanCard-full.png';
import linkedin from '@assets/img/Category-icon.jpg';
import facebook from '@assets/img/Category-icon.png';
import instagram from '@assets/img/insta.png';
import tiktok from '@assets/img/tiktok.jpg';
import xing from '@assets/img/xling.png';
import madeInGermany from '@assets/img/Mede in Germany.png';
import planted from '@assets/img/planted.png';
import climatePartner from '@assets/img/ClimatePartner.png';
import iso from '@assets/img/Iso.png';
import dssv from '@assets/img/DSSV.png';
import tuv from '@assets/img/TUV.png';
import ebene from '@assets/img/Ebene 1.png';
import vector2 from '@assets/img/Vector2.png';
import phoneIcon from '@assets/img/Vector.svg';

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="px-3 md:px-[120px]">
        <div className="bg-gray-100 text-gray-700 px-6 rounded-[6px]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col gap-4 md:flex-row justify-between items-center pb-3 pt-10 text-center md:text-left">
              <Image src={logo} alt="GermanCard Logo" className="w-[180px] h-auto mb-4"/>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Link href="#" className="h-12 flex justify-center items-center gap-2 text-base font-medium hover:text-black transition-colors" aria-label="LinkedIn">
                  <Image src={linkedin} alt="" className="rounded-full h-6 w-6" />
                  LinkedIn
                </Link>
                <Link href="#" className="h-12 flex justify-center items-center gap-2 text-base font-medium hover:text-black transition-colors" aria-label="Facebook">
                  <Image src={facebook} alt="" className="rounded-full h-6 w-6" />
                  Facebook
                </Link>
                <Link href="#" className="h-12 flex justify-center items-center gap-2 text-base font-medium hover:text-black transition-colors" aria-label="Instagram">
                  <Image src={instagram} alt="" className="rounded-full h-6 w-6" />
                  Instagram
                </Link>
                <Link href="#" className="h-12 flex justify-center items-center gap-2 text-base font-medium hover:text-black transition-colors" aria-label="TikTok">
                  <Image src={tiktok} alt="" className="rounded-full h-6 w-6" />
                  TikTok
                </Link>
                <Link href="#" className="h-12 flex justify-center items-center gap-2 text-base font-medium hover:text-black transition-colors" aria-label="Xing">
                  <Image src={xing} alt="" className="rounded-full h-6 w-6" />
                  Xing
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10">
              <div>
                <h3 className="font-semibold mb-2">About Us</h3>
                <p className="text-sm">
                  We, <strong>GERMANCARD Technologies GmbH</strong>, are a special printing company based in Kempen near Cologne and have specialized in the production of plastic cards, RFID cards and customer cards in the form of a check card up to special formats.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Products & Services</h3>
                <ul className="space-y-1 text-sm">
                  <li><Link href="#" className="hover:text-black transition-colors">Plastic cards</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Organic cards</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">RFID/chip cards</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Special formats</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Personalization</Link></li>
                </ul>
              </div>

              <div className="pt-8">
                <ul className="space-y-1 text-sm">
                  <li><Link href="#" className="hover:text-black transition-colors">Personalization</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Printer & Accessories</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Services</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Company</h3>
                <ul className="space-y-1 text-sm">
                  <li><Link href="#" className="hover:text-black transition-colors">About us</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Jobs & Career</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Downloads</Link></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between border-t border-gray-200 pt-4 pb-4 gap-4">
              <div className="w-full md:w-[60%]">
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link href="#"><Image src={madeInGermany} alt="Made in Germany" className="h-6 w-auto" /></Link>
                  <Link href="#"><Image src={planted} alt="Planted" className="h-4 w-auto" /></Link>
                  <Link href="#"><Image src={climatePartner} alt="Climate Partner" className="h-4 w-auto" /></Link>
                  <Link href="#"><Image src={iso} alt="ISO Certified" className="h-4 w-auto" /></Link>
                  <Link href="#"><Image src={dssv} alt="DSSV" className="h-4 w-auto" /></Link>
                  <Link href="#"><Image src={tuv} alt="TUV Certified" className="h-4 w-auto" /></Link>
                  <Link href="#"><Image src={ebene} alt="" className="h-4 w-auto" /></Link>
                </div>
              </div>

              <div className="w-full md:w-[40%] flex flex-col sm:flex-row justify-center md:justify-end gap-2 items-center mt-4 md:mt-0 text-center md:text-right">
                <Link href="#" className="bg-black text-white px-3 py-2 text-sm rounded hover:bg-gray-800 transition-colors flex flex-row gap-2">
                  <Image src={vector2} alt="Contact Icon" className="transform rotate-90 w-4 h-4" />
                  Contact us
                </Link>
                <div className="bg-[#FFEFB1] text-black text-xs font-bold px-3 py-2 rounded flex items-center gap-2">
                  <Image src={phoneIcon} alt="Phone icon" className="w-[14px] h-[14px]" />
                  Call now +49 (0) 2273 604180
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
            <div>
              &copy; 2024 by GERMANCARD Technologies GmbH | <Link href="#" className="underline hover:text-black transition-colors">Privacy Policy</Link> | <Link href="#" className="underline hover:text-black transition-colors">Cookies</Link>
            </div>
            <div>
              Designed by <Link href="#" className="text-black font-semibold hover:underline transition-colors">Starlify</Link> + <Link href="#" className="text-black font-semibold hover:underline transition-colors">Mateusz Madura</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
