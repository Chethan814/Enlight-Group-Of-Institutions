// app/paramedicals/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Paramedical Courses - Enlight Group of Institutions",
  description: "Explore our paramedical courses including DMLT, DMXT, DMOT, DAT, and more at Enlight Group of Institutions.",
};

const paramedicalCourses = [
  {
    id: 1,
    title: "Diploma in Medical Laboratory Technology (DMLT)",
    duration: "2 Years",
    seats: "40 seats",
    image: "/assets/img/service/facility-16.jpg",
    description: "DMLT is a two years course. A professional with DMLT examines and analyzes different body...",
    link: "/diploma-in-medical-laboratory-technology-dmlt",
    badgeClass: "blue__color"
  },
  {
    id: 2,
    title: "Diploma in Medical Imaging/X-Ray Technology (DMXT)",
    duration: "2 Years",
    seats: "20 seats",
    image: "/assets/img/courses/dmxt.jpg",
    description: "DMXT is an undergraduate radiology course and is all about how electromagnetic...",
    link: "/diploma-in-medical-imaging-x-ray-technology-dmxt",
    badgeClass: "blue__color"
  },
  {
    id: 3,
    title: "Diploma in Medical Operation Technology (DMOT)",
    duration: "2 Years",
    seats: "20 seats",
    image: "/assets/img/courses/dmot.jpg",
    description: "DMOT is a two-year diploma program designed to create trained and qualified professionals...",
    link: "/diploma-in-medical-operation-technology-dmot",
    badgeClass: "blue__color"
  },
  {
    id: 4,
    title: "Diploma in Medical Anesthesia Technology (DOT/DAT)",
    duration: "2 Years",
    seats: "20 seats",
    image: "/assets/img/service/facility-9.jpg",
    description: "DOT/DAT leads the students to a comprehensive study of the field of...",
    link: "/diploma-in-medical-anesthesia-technology-dot-dat",
    badgeClass: "blue__color"
  }
];

const Paramedicals = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div 
        className="breadcrumbarea" 
        style={{ 
          backgroundImage: 'url(/assets/img/infobanner/infobanner-6.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          padding: '100px 0'
        }}
      >
        <div 
          className="dark-overlay" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)'
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb__content__wraper" data-aos="fade-up">
                <div className="breadcrumb__title">
                  <h2 className="heading text-white">Paramedical</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul className="d-flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="me-2">
                      <Link href="/" className="text-white text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="text-white">/ Paramedical</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paramedical Courses Grid */}
      <div className="gridarea sp_bottom_100 sp_top_100">
        <div className="container">
          <div className="row" data-aos="fade-up">
            {paramedicalCourses.map((course) => (
              <div key={course.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="gridarea__wraper h-100">
                  <div className="gridarea__img">
                    <Link href={course.link}>
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={370}
                        height={250}
                        className="img-fluid"
                        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      />
                    </Link>
                    <div className="gridarea__small__button">
                      <div className={`grid__badge ${course.badgeClass}`}>Paramedical</div>
                    </div>
                    <div className="gridarea__small__icon">
                      <a href="#"><i className="icofont-heart-alt"></i></a>
                    </div>
                  </div>
                  <div className="gridarea__content p-4">
                    <div className="gridarea__list mb-3">
                      <ul className="d-flex justify-content-between" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li className="d-flex align-items-center">
                          <i className="icofont-chair me-2"></i> {course.seats}
                        </li>
                        <li>
                          <div className="d-flex align-items-center">
                            <i className="icofont-clock-time me-2"></i> {course.duration}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="gridarea__heading mb-3">
                      <h3>
                        <Link href={course.link} className="text-decoration-none" style={{ fontSize: '18px' }}>
                          {course.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="mb-4" style={{ minHeight: '60px' }}>
                      <p className="mb-0">{course.description}</p>
                    </div>
                    <div className="gridarea__bottom">
                      <Link href={course.link} className="text-decoration-none">
                        <div className="gridarea__small__img">
                          <div className="gridarea__small__content ms-0">
                            <h6>Apply Now <i className="icofont-long-arrow-right"></i></h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Paramedicals;