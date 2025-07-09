import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <div className='container text-white bg-black'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-9 py-10 sm:place-items-center">
        <div>
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2 text-primary">
            <img src={logo} alt="Logo" className="w-12" />
            OneStop
          </Link>
        </div>
        <div>
          <ul className="flex flex-col gap-2 font-semibold" >
            <li className="hover:text-primary"><Link to="/products">Products</Link></li>
            <li className="hover:text-primary"><Link to="/">Home</Link></li>
            <li className="hover:text-primary"><Link to="/">FAQs</Link></li>
            <li className="hover:text-primary"><Link to="/">Contact</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 font-semibold">
          <p className="font-semibold text-primary text-xl">Contact</p>
          <p>oneStop@shop.pk</p>
          <p>+92 1234567890</p>
          <p className="hover:text-primary">Read FAQs</p>
          <p className="hover:text-primary">Support</p>

        </div>
        <div className="flex flex-col gap-2 font-semibold">
          <p className="font-semibold text-primary text-xl">Subscribe</p>
          <p className="text-sm text-gray-400">Get updates on new products & offers.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-md text-black"
          />
          <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>

      </div>
      <div className="text-center text-sm text-gray-400 mt-4 pb-4">
        © {new Date().getFullYear()} OneStop. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
