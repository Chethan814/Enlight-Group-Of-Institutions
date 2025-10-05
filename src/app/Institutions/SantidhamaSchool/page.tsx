// app/school/santidhama-school/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sri Shantidhama School of Nursing - Enlight Group of Institutions",
  description: "Explore professional nursing programs at Sri Shantidhama School of Nursing, offering diploma, bachelor's, and postgraduate degrees in nursing. Affiliated with RGUHS and approved by KNC & INC.",
};

const courses = [
  {
    id: 1,
    title: "B.Sc. Nursing",
    image: "/assets/img/courses/bsc-nursing.jpg",
    link: "/bScNursing",
  },
  {
    id: 2,
    title: "M.Sc. Nursing",
    image: "/assets/img/courses/msc-nursing.jpg",
    link: "/msc-nursing",
  },
  {
    id: 3,
    title: "PBBSc Nursing",
    image: "/assets/img/courses/course-7.jpg",
    link: "/pbbsc-nursing",
  },
  {
    id: 4,
    title: "GNM Nursing",
    image: "/assets/img/courses/course-8.jpg",
    link: "/gnm-nursing",
  },
];

const SantidhamaSchool = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div 
        className="breadcrumbarea" 
        style={{ 
          backgroundImage: 'url(/assets/img/infobanner/infobanner-3.jpg)',
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
                  <h2 className="heading text-white">Sri Shantidhama School Of Nursing</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul className="d-flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="me-2">
                      <Link href="/" className="text-white text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="text-white">/ Sri Shantidhama School Of Nursing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="blogarea__2 sp_top_100 sp_bottom_100">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-xl-8 col-lg-8">
              <div className="blogarae__img__2 course__details__img__2" data-aos="fade-up">
                <Image
                  src="/assets/img/courses/bsc-nursing.jpg"
                  alt="Sri Shantidhama School of Nursing"
                  width={800}
                  height={450}
                  className="img-fluid rounded"
                />
              </div>

              <div className="blog__details__content__wraper">
                <div className="course__button__wraper" data-aos="fade-up">
                  <div className="course__button">
                    <a 
                      href="/Sowrabha-Prospectus.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-flex align-items-center"
                    >
                      <i className="icofont-file-document me-2"></i> Download Prospectus
                    </a>
                  </div>
                  <div className="course__date">
                    <p>Last Update: <span>May 19, 2024</span></p>
                  </div>
                </div>

                <div className="course__details__heading" data-aos="fade-up">
                  <h3>About Sri Shantidhama School Of Nursing</h3>
                </div>
                
                <div className="course__details__paragraph text-justify" data-aos="fade-up">
                  <p>
                    Welcome to Shantidhama College of Nursing. In an era of stiff competition, success can only be achieved if one makes the right kind of endeavor at the right time and in the right direction. Shantidhama College of Nursing has been established with a view to produce qualified and efficient nurses for a new tomorrow in the ever-changing competitive world of today. Given the paradigm shift which the healthcare sector is experiencing, nursing science probably represents the most ideal field for healthcare to innovate for it is a domain where there is a constant need to change with the times and continuously review, analyze and upgrade competencies in the profession. Our primary goal is to offer the best EDUCATION AND CLINICAL TRAINING possible in Nursing. Affiliated to RGUHS and approved by KNC, INC New Delhi & Govt. of Karnataka.
                  </p>
                </div>

                <div className="row align-items-center mt-4">
                  <div className="col-sm-12 col-md-8">
                    <div className="course__details__wraper" data-aos="fade-up">
                      <div className="d-flex align-items-center gap-3">
                        <div className="icon-badge">
                          <i className="icofont-check-circled text-primary"></i>
                        </div>
                        <div>
                          <h5 className="text-primary mb-1">Approvals</h5>
                          <p className="mb-0">Indian Nursing Council (INC), Karnataka Nursing Council (KNC)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 mt-3 mt-md-0" data-aos="fade-up">
                    <a 
                      href="https://enlight-enquiry-form.vercel.app" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="default__button w-100 text-center d-inline-block"
                    >
                      Enquiry Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-xl-4 col-lg-4 mt-5 mt-lg-0">
              <div className="course__details__sidebar">
                {/* Courses Offered */}
                <div className="blogsidebar__content__wraper__2" data-aos="fade-up">
                  <h4 className="sidebar__title">Courses Offered</h4>
                  <ul className="course__details__populer__list list-unstyled">
                    {courses.map((course) => (
                      <li key={course.id} className="mb-3">
                        <Link href={course.link} className="d-flex align-items-center text-decoration-none text-dark">
                          <div className="course__details__populer__img me-3">
                            <Image
                              src={course.image}
                              alt={course.title}
                              width={90}
                              height={70}
                              className="rounded"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div className="course__details__populer__content">
                            <h6 className="mb-0">{course.title}</h6>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="course__summery__button mt-4">
                    <p className="mb-2">Need any help in Admission?</p>
                    <a 
                      href="tel:+919916073632" 
                      className="default__button default__button--3 d-inline-flex align-items-center"
                    >
                      <i className="icofont-phone me-2"></i> +91 9916073632
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="blogsidebar__content__wraper__2 mt-4" data-aos="fade-up">
                  <h4 className="sidebar__title">Get in Touch</h4>
                  <form className="get__touch__input">
                    <div className="mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter name*" 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter your mail*" 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <textarea 
                        className="form-control" 
                        rows={3} 
                        placeholder="Message*" 
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="default__button w-100">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SantidhamaSchool;