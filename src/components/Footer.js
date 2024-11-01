import Link from "next/link";
import ScrollTop from "./scroll-top";
import { MdLocationOn } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
    return (
      <>
        {/* Start Footer */}
        <ScrollTop />
        <footer
          className="main-footer footer-dark background-image"
          data-image-src="assets/img/gulli/1.jpeg/"
        >
          <div className="container pt-4">
            {/* Start Card Contact */}
            <div
              className="card-contact bg-white mb-4 mt-5 py-5 px-4 px-md-5 position-relative overflow-hidden rounded-3 shadow-lg"
              data-aos="fade-down"
            >
              <div className="row align-items-center position-relative z-1">
                <div className="col-md-10 col-lg-8 col-xl-6">
                  <h2 className="display-6 fw-bold text-capitalize text-gray-900">
                    Interested in exploring real estate opportunities? Sign up
                    with us today!
                  </h2>
                  <div className="row g-4 align-items-center mt-1">
                    <div className="col-auto">
                      <button
                        type="button"
                        className=" btn-outline-default border-0"
                      >
                        <i className="fas text-gray-900 mr-2 fa-mobile"></i>
                        <span className="text-gray-900">+971 58 522 0047</span>
                      </button>
                    </div>
                    <div className="col-auto">
                      <Link
                        href="#"
                        className="fs-17 l-spacing-1 text-gray-900"
                      >
                        <i className="fas fa-envelope fs-15 mr-2"></i>
                        <span>ceo@therealtaholic.com</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Card Background Image */}
              <div className="card-sketch w-full mb-[8vh]">
                <img
                  src="assets/img/gulli/1.jpeg/"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              {/* /.End Card Background Image */}
            </div>
            {/* .End Card Contact  */}
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 py-3 py-md-5 pe-xl-5 text-center">
                <div className="footer-about">
                  <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                    Gulraiz Naveed
                  </h3>
                  <div className=" mb-3 d-inline-block">
                    {/* Start Qr Code Image */}
                    <img
                      src="assets/img/gulli/7.jpeg/"
                      className="mb-0 object-cover h-[20vh] rounded-lg"
                      height="146"
                      width="146"
                      alt="..."
                    />
                    {/* /End Qr Code Image */}
                  </div>
                  <p className="text-gray-400">
                    Get in touch with me to discover more.
                  </p>
                  <Link className="email-link d-block fw-medium mb-1" href="#">
                    <i className="fa-solid fa-phone me-2"></i>
                    <span className="text-gray-400">+971 58 522 0047</span>
                  </Link>
                  <Link className=" email-link d-block fw-medium" href="#">
                    <i className="fa-solid fa-envelope me-2"></i>
                    <span className="text-gray-400">
                      ceo@therealtaholic.com
                    </span>
                  </Link>
                </div>
              </div>
              
            

              <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 py-3 py-md-5 d-lg-none d-xl-block">
                <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                  Office Location
                </h3>
                {/* /Start Footer Link  */}

                <ul className="footer-link list-unstyled menu mb-0">
                  <li className="mb-2">
                    <Link href="" className="link d-block">
                      <p>The Royal Peak, Azizi Rivera, Dubai</p>
                    </Link>
                  </li>
                </ul>
                {/* /.End Footer Link */}
              </div>
              <div className="col-6 col-sm-4 col-md-4 col-lg col-xl-2 py-3 py-md-5">
                <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">
                  Connect with us
                </h3>
                {/* /Start Social Icon */}
                <ul className="list-unstyled social-icon">
                  <li>
                    <Link
                      href="https://www.instagram.com/therealtaholic/profilecard/?igsh=MTgzOGxkcmN5OHMxeg=="
                      className="align-items-center d-flex flex gap-x-3"
                    >
                      <FaInstagram className="text-white text-2xl" />
                      Instagram
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://youtube.com/@therealtaholic?si=W3WcaY9oPd4LLRaD"
                      className="align-items-center d-flex flex gap-x-3"
                    >
                      <AiOutlineYoutube className="text-white text-2xl" />
                      YouTube
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`https://wa.me/971585220047`}
                      className="align-items-center d-flex gap-x-3"
                    >
                      <SiWhatsapp className="text-white text-2xl" />
                      WhatsApp
                    </Link>
                  </li>
                </ul>
                {/* /.End Social Icon */}
              </div>
            </div>
            <hr className="mb-0 mt-4" />
            <div className="py-4">
              {/* Start Sub Footer Nav */}

              {/*  /. End Sub Footer Nav */}
              <div className="align-items-center row mb-2">
                {/* Start Copy Rights Text */}
                <div className="col-sm-auto copy text-sm">
                  © 2024 Made By{" "}
                  <a
                    className="font-bold text-red-500"
                    href="https://devmatesolutions.com/"
                  >
                    DEVMATE SOLUTIONS
                  </a>{" "}
                  - ALL RIGHTS RESERVED
                </div>
                {/* /.End Copy Rights Text */}
              </div>
            </div>
          </div>
        </footer>
        {/* /.End Footer */}
      </>
    );
}