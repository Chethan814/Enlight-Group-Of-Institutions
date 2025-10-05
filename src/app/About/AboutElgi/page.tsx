// app/about-elgi/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ELGI - Enlight Group of Institutions',
  description: 'Learn about Enlight Group of Institutions, our mission, vision, and why choose us for professional education in Bangalore.',
};

const AboutElgi = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div 
        className="breadcrumbarea" 
        style={{ 
          backgroundImage: 'url(/assets/img/infobanner/infobanner-5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div className="dark-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb__content__wraper" data-aos="fade-up">
                <div className="breadcrumb__title">
                  <h2 className="heading text-white">About ELGI</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul className="d-flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="me-2">
                      <Link href="/" className="text-white text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="text-white">/ About ELGI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="aboutarea__2 sp_bottom_100 sp_top_100">
        <div className="container">
          {/* First Row */}
          <div className="row align-items-center mb-5">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">
              <div className="about__right__wraper__2">
                <div className="educationarea__img" data-tilt>
                  <div style={{ position: 'relative' }}>
                    <Image
                      src="/assets/img/about/Updated-images/Enlight-College.jpg"
                      alt="College photo"
                      width={520}
                      height={460}
                      className="img-fluid aboutarea__2__img__1"
                      style={{ borderRadius: '8px' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      zIndex: 1
                    }}>
                      <Image
                        src="/assets/img/about/Updated-images/Enlight-Chairman.jpg"
                        alt="Enlight-Chairman photo"
                        width={250}
                        height={300}
                        className="img-fluid aboutarea__2__img__2"
                        style={{ borderRadius: '8px', border: '5px solid #fff' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">
              <div className="aboutarea__content__wraper ps-lg-5">
                <div className="aboutarea__button mb-4">
                  <div className="default__small__button">Know Us Better</div>
                </div>
                <div className="aboutarea__headding heading__underline mb-4">
                  <h2>About Enlight Group Of Institutions</h2>
                </div>
                <div className="aboutarea__para aboutarea__para__2">
                  <p className="mb-4">
                    The Enlight Education Trust started in the year of Nov 2015 by keeping a broad objective of 
                    imparting high-quality education through improving oneself and the nation at large. Through 
                    well-organized packages, we are successful in providing standard education to the students. 
                    Providing trustworthy services with minimum expense was always our trademark. We worked to 
                    enlighten our students&apos; lives by making valuable contributions to their academic, and 
                    non-academic side by providing assistance in their studies, getting better placements, and 
                    overall bringing them as useful citizens to the nation.
                  </p>
                  <p>
                    Enlight Group of Institutions was established in the year 2019 under the trust of Enlight 
                    Educational Trust. The College is Affiliated with RGUHS, Recognized by Govt of Karnataka 
                    and approved by the Karnataka Nursing Council and Indian Nursing Council, Pharmacy Council 
                    of India. The Institutions set new standards of excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Bangalore Section */}
          <div className="row align-items-center my-5 py-5">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-2 order-lg-1" data-aos="fade-up">
              <div className="aboutarea__5__img sp_top_90" data-tilt>
                <Image
                  src="/assets/img/about/about-1.jpg"
                  alt="About Enlight"
                  width={600}
                  height={500}
                  className="img-fluid"
                  style={{ borderRadius: '8px' }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-1 order-lg-2" data-aos="fade-up">
              <div className="aboutarea__content__wraper ps-lg-5">
                <div className="aboutarea__headding heading__underline mb-4">
                  <h2>Why Bangalore for Professional Education?</h2>
                </div>
                <div className="aboutarea__para aboutarea__para__2">
                  <p className="mb-3">
                    The Enlight Education Trust started in the year of Nov 2015 by keeping a broad objective of 
                    imparting high-quality education through improving oneself and the nation at large. Through 
                    well-organized packages, we are successful in providing standard education to the students.
                  </p>
                  <p className="mb-3">
                    ENLIGHT GROUP OF INSTITUTION Develops, Supports, Represents &amp; Educates Professional Health Care...
                  </p>
                  <p className="mb-3">
                    Long a national leader in nursing education with a firm commitment to clinical excellence, 
                    robust research and evidence-based practice.
                  </p>
                  <p>
                    Enlight Group of Institutions Is an Integral part Of Campus Steeped in Tradition but 
                    Thoughtfully Engaged in the Present and the Future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="row align-items-center my-5 py-5">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">
              <div className="aboutarea__5__img" data-tilt>
                <Image
                  src="/assets/img/about/about-2.jpg"
                  alt="Why Choose Us"
                  width={600}
                  height={500}
                  className="img-fluid"
                  style={{ borderRadius: '8px' }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up">
              <div className="aboutarea__content__wraper ps-lg-5">
                <div className="aboutarea__headding heading__underline mb-4">
                  <h2>Why You Choose Enlight Group Of Institutions (ELGI)</h2>
                </div>
                <div className="aboutarea__para aboutarea__para__2 mb-4">
                  <p>Would you like to learn with expert in your subjects? EGI support you and your career.</p>
                </div>
                <div className="aboutarea__list__3">
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-start">
                      <i className="icofont-check me-2 mt-1 text-primary"></i>
                      <span>High Quality teaching by qualified and richly experienced faculty.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="icofont-check me-2 mt-1 text-primary"></i>
                      <span>Excellent infrastructure with well- equipped laboratories and library</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="icofont-check me-2 mt-1 text-primary"></i>
                      <span>Spacious and well ventilated classrooms.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="icofont-check me-2 mt-1 text-primary"></i>
                      <span>Periodic report to the parents on attendance and progress of the student.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="icofont-check me-2 mt-1 text-primary"></i>
                      <span>Special programs and activities to improve memory confidence and concentration</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="icofont-check me-2 mt-1 text-primary"></i>
                      <span>Attractive fee structure and scholarship for eligible students.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="icofont-check me-2 mt-1 text-primary"></i>
                      <span>Student-centered approach.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start">
                      <i className="icofont-check me-2 mt-1 text-primary"></i>
                      <span>We Accept WBSCC, Education Loan Facilities</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="icofont-check me-2 mt-1 text-primary"></i>
                      <span>Online Admissions Form are Facilitated</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="row align-items-center my-5 py-5">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-2 order-lg-1" data-aos="fade-up">
              <div className="aboutarea__5__img sp_top_90" data-tilt>
                <Image
                  src="/assets/img/about/about-3.jpg"
                  alt="Mission &amp; Vision"
                  width={600}
                  height={500}
                  className="img-fluid"
                  style={{ borderRadius: '8px' }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-1 order-lg-2" data-aos="fade-up">
              <div className="aboutarea__content__wraper ps-lg-5">
                <div className="mb-5">
                  <div className="aboutarea__headding heading__underline mb-4">
                    <h2>Our Mission</h2>
                  </div>
                  <div className="aboutarea__list__3">
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-start">
                        <i className="icofont-check me-2 mt-1 text-primary"></i>
                        <span>Making quality education possible with minimum expense.</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <i className="icofont-check me-2 mt-1 text-primary"></i>
                        <span>Provision of individualized attention to students.</span>
                      </li>
                      <li className="d-flex align-items-start">
                        <i className="icofont-check me-2 mt-1 text-primary"></i>
                        <span>Making the students capable of building their careers bright.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-5 pt-4">
                  <div className="aboutarea__headding heading__underline mb-4">
                    <h2>Our Vision</h2>
                  </div>
                  <div className="aboutarea__para aboutarea__para__2">
                    <p>
                      We work for enlight education sector by providing quality education and raising the 
                      students future and making them capable of giving valuable contributions to the nation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutElgi;