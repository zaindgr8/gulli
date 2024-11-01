import React from 'react'

const Azammessage = () => {
  return (
    <div className="about-text align-items-center g-4 justify-content-between row p-3">
      <div className="col-md-12 col-lg-7">
        <div className="row g-3 g-sm-4 align-items-center">
          {/* Image */}
          <div className="col-6">
            <div className="position-relative">
              <div className="line-shape" />
              <img
                src="assets/img/gulli/4.jpeg"
                className="img-fluid rounded-3 position-relative"
                alt=""
              />
            </div>
          </div>
          <div className="col-6">
            <div className="row g-3 g-sm-4">
              {/* Image */}
              <div className="col-12">
                <img
                  src="assets/img/gulli/8.jpeg"
                  className="img-fluid rounded-3"
                  alt=""
                />
              </div>
              {/* Image */}
              <div className="col-12">
                <img
                  src="assets/img/gulli/5.jpeg"
                  className="img-fluid rounded-3"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 col-lg-5 ps-xxl-5">
        <div className="text-block">
          <h6 className="fs-14 fw-bold heading-sm l-spacing-1 position-relative text-gray-900 text-uppercase">
            Get in Touch
          </h6>
          <h2 className="mb-4">
            I have assisted numerous individuals in navigating the real estate
            landscape.
          </h2>
          <p className="mb-4">
            Over the past ten years, I have undergone a remarkable
            transformation, launching my career from the ground up in the real
            estate sector. This field has truly resonated with me, allowing for
            significant personal and professional growth. I have successfully
            managed real estate transactions totaling over AED 1 billion. As a
            well-regarded mentor on Instagram and YouTube, I have accumulated
            more than 1 million views on both platforms. My reach is
            international, connecting with clients from countries such as India,
            Russia, the UK, and beyond. I take great pride in establishing
            lasting trust with my clients and being recognized as a leading
            entrepreneur in the real estate industry. Whether it's residential
            properties or expansive estates, my consistent results reflect my
            unwavering commitment to quality.
          </p>
          <ul className="list-checked  mb-9 mb-md-10 ps-0">
            <li>
              Journey of Transformation: From modest beginnings to achieving
              excellence in real estate.
            </li>
            <li>
              Million-Dirham Success: Orchestrating real estate transactions
              exceeding AED 1 billion.
            </li>
            <li>
              Global Reach and Leadership: Building trust with clients worldwide
              and gaining recognition on social media.
            </li>
          </ul>
          <hr className="mt-5" />
          <blockquote className="blockquote quote-text">
            <p className="fst-italic mb-0 text-gray-900 ">
              “Ten years of expertise in real estate, facilitating transactions
              exceeding a billion, and pioneering entrepreneurial achievements.”
            </p>
            <cite className="fs-14 fw-semibold quote-attribution text-dark">
              — Gulraiz Naveed
            </cite>
            {/* <div className="mt-3 signature ">
              <img src="assets/img/signature.png" width={150} height={150} alt="" />
            </div> */}
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Azammessage