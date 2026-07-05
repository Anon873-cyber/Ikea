import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface-alt)] ">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-[38px] font-bold mb-8">Ikea</h2>

            <div className="grid grid-cols-[1fr_auto] mb-8">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="bg-white px-4 py-3 outline-none"
              />

              <button className="bg-[var(--color-primary)] text-white px-6">
                Sign Up
              </button>
            </div>

            <div className="space-y-2 text-[var(--color-text-secondary)]">
              <p>Contact Info</p>
              <p>
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[22px] font-semibold mb-8">
              Categories
            </h3>

            <ul className="grid gap-4 text-[var(--color-text-secondary)]">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-[22px] font-semibold mb-8">
              Customer Care
            </h3>

            <ul className="grid gap-4 text-[var(--color-text-secondary)]">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-[22px] font-semibold mb-8">
              Pages
            </h3>

            <ul className="grid gap-4 text-[var(--color-text-secondary)]">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#E7E4F8````````]">
        <div className="max-w-[1200px] mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 items-center">
          
          <p className="text-[var(--color-text-secondary)]">
            ©Webecy - All Rights Reserved
          </p>

          <div className="justify-self-start md:justify-self-end flex gap-3 mt-4 md:mt-0">
            <FaFacebookF
              className="bg-[var(--color-heading)] text-white p-2 rounded-full"
              size={34}
            />

            <FaInstagram
              className="bg-[var(--color-heading)] text-white p-2 rounded-full"
              size={34}
            />

            <FaTwitter
              className="bg-[var(--color-heading)] text-white p-2 rounded-full"
              size={34}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}