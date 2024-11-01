
import { motion } from "framer-motion";

const Azamvision = () => {
  return (
    <div className="hero-header  hero-header__three align-items-center d-flex position-relative header-gradient">
      <div className="container position-relative">
        <div className="row justify-content-center justify-content-lg-between align-items-center">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6 pe-xxl-5"
          >
            {/* Start Title */}
            <h1 className="hero-header_title display-2 fw-bold text-capitalize">
              <p className="text-gray-800">
                HOMESTEAD <br />
              </p>
              <p className="text-gray-900">DREAMER</p>
            </h1>
            {/* /.End Title */}
            {/* Start Text */}
            <p className="fs-18 mb-5 text-gray-800">
              Gulraiz is the visionary leader of The Royal Peak RE, a premier
              real estate brokerage in Dubai specializing in secondary and
              off-plan properties. With expertise in buying, selling, and
              renting!
            </p>
            {/* /.End Text */}
            {/* Start Main Search Content */}
            {/* /.End Main Search Content */}
            <div className="flex flex-col text-gray-800 gap-y-3">
              <p>Over AED 20 Million in Transactions</p>
              <span className="flex gap-x-4">
                <h1 className="text-gray-900 font-bold text-4xl">
                  AED 20 Million +
                </h1>
                <p>
                  85% Closing Rate <br />
                  Friendly Dubai Realtor
                </p>
              </span>
              <div className="border-l border-1 h-26 border-gray-800"></div>
              <div>
                <p className="text-gray-800 font-semibold">
                  Ranked #1 at The Royal Peak Real Estate as Sales Head in 2024
                </p>
                <span className="text-sm text-gray-800">
                  By the team and CEO
                </span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold ">
                  Real Estate & Social Media Influencer & Coach
                </p>
                {/* <span className="text-sm text-gray-800"></span> */}
              </div>
            </div>
          </motion.div>
          <div className="col-lg-6 col-xl-6 col-xxl-6 ps-xl-5 d-none d-lg-block">
            <div className="row g-3 g-sm-5 align-items-center">
              <div className="col-6">
                <div className="position-relative">
                  <div className="line-shape-home" />
                  <div
                    className="position-relative image-bg-shape"
                    data-aos="zoom-in"
                  >
                    <div className="rounded-4 overflow-hidden position-relative">
                      <img
                        src="assets/img/gulli/1.jpeg"
                        className="img-fluid position-relative image-parallax z-1"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 align-self-end">
                <div
                  className="overflow-hidden rounded-4"
                  data-aos="zoom-in"
                  data-aos-easing="ease"
                  data-aos-delay={200}
                >
                  <img
                    src="assets/img/gulli/3.jpeg"
                    className="img-fluid rounded-4 image-parallax"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Azamvision