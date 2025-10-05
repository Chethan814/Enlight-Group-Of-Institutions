// app/school/sowrabha-institute/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sowrabha Institute of Nursing Sciences - Enlight Group of Institutions",
  description: "Sowrabha Institute of Nursing Sciences offers GNM, B.Sc, P.B.B.Sc, and M.Sc Nursing courses, affiliated with RGUHS and approved by KNC & INC.",
};

const courses = [
  {
    id: 1,
    title: "B.Sc. Nursing",
    image: "/assets/img/courses/course-1.jpg",
    link: "/bScNursing",
  },
  {
    id: 2,
    title: "M.Sc. Nursing",
    image: "/assets/img/courses/msc-nursing.jpg",
    link: "/MSCNursing",
  },
  {
    id: 3,
    title: "PBBSc Nursing",
    image: "/assets/img/courses/course-7.jpg",
    link: "/PbbscNursing",
  },
  {
    id: 4,
    title: "GNM Nursing",
    image: "/assets/img/courses/course-8.jpg",
    link: "/GnmNursing",
  },
];

const SowrabhaInstitute = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div 
        className="breadcrumbarea" 
        style={{ 
          backgroundImage: 'url(/assets/img/infobanner/infobanner-2.jpg)',
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
                  <h2 className="heading text-white">Sowrabha Institute of Nursing Sciences</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul className="d-flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="me-2">
                      <Link href="/" className="text-white text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="text-white">/ Sowrabha Institute of Nursing Sciences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="blogarea__2 sp_top_100 sp_bottom_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="blogarae__img__2 course__details__img__2" data-aos="fade-up">
                <Image
                  src="/assets/img/courses/bsc-nursing.jpg"
                  alt="Sowrabha Institute of Nursing Sciences"
                  width={800}
                  height={450}
                  className="img-fluid w-100"
                  style={{ borderRadius: '8px' }}
                />
              </div>

              <div className="blog__details__content__wraper">
                <div className="course__button__wraper" data-aos="fade-up">
                  <div className="course__button">
                    <Link 
                      href="/download-pdf" 
                      className="d-inline-flex align-items-center gap-2 text-decoration-none"
                      title="Download Prospectus"
                    >
                      <i className="icofont-file-document"></i> Download Prospectus
                    </Link>
                  </div>
                  <div className="course__date">
                    <p>Last Update: <span>May 19, 2024</span></p>
                  </div>
                </div>

                <div className="course__details__heading" data-aos="fade-up">
                  <h3>About Sowrabha Institute of Nursing Sciences</h3>
                </div>
                
                <div className="course__details__paragraph text-justify" data-aos="fade-up">
                  <p>
                    Sowrabha Institute of Nursing Sciences was established in the year 2019. The College is Affiliated to RGUHS, 
                    Recognized by Govt of Karnataka and approved by Karnataka Nursing Council and Indian Nursing Council. 
                    The Institution has set new standards of excellence in Nursing Education and practice by offering 
                    GNM Course under School of Nursing & by offering B.Sc, P.B.B.Sc under College of Nursing
                  </p>
                </div>

                <div className="row align-items-center mt-4">
                  <div className="col-sm-12 col-md-8">
                    <div className="course__details__wraper" data-aos="fade-up">
                      <div className="d-flex align-items-center gap-3">
                        <div className="icon-badge">
                          <i className="icofont-check-circled text-primary fs-4"></i>
                        </div>
                        <div>
                          <h5 className="text-primary mb-1">Approvals</h5>
                          <p className="mb-0">Indian Nursing Council (INC), Karnataka Nursing Council (KNC)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 mt-3 mt-md-0">
                    <div data-aos="fade-up">
                      <a 
                        href="https://enlight-enquiry-form.vercel.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="default__button d-inline-block text-center"
                      >
                        Enquiry Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4 mt-5 mt-lg-0">
              <div className="course__details__sidebar">
                <div className="blogsidebar__content__wraper__2" data-aos="fade-up">
                  <h4 className="sidebar__title mb-4">Courses Offered</h4>
                  <ul className="course__details__populer__list list-unstyled">
                    {courses.map((course) => (
                      <li key={course.id} className="mb-3">
                        <Link 
                          href={course.link}
                          className="d-flex align-items-center text-decoration-none text-dark"
                        >
                          <div className="course__details__populer__img me-3">
                            <Image
                              src={course.image}
                              alt={course.title}
                              width={90}
                              height={70}
                              className="rounded-3"
                            />
                          </div>
                          <div className="course__details__populer__content">
                            <h6 className="mb-0">{course.title}</h6>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="course__summery__button mt-5">
                    <p className="mb-3">Need any help in Admission?</p>
                    <a 
                      href="tel:+919916073632" 
                      className="default__button default__button--3 d-inline-flex align-items-center gap-2"
                    >
                      <i className="icofont-phone"></i> +91 9916073632
                    </a>
                  </div>
                </div>

                <div className="blogsidebar__content__wraper__2 mt-5" data-aos="fade-up">
                  <h4 className="sidebar__title mb-4">Get in Touch</h4>
                  <form className="get__touch__input">
                    <div className="mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter name*" 
                      />
                    </div>
                    <div className="mb-3">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter your mail*" 
                      />
                    </div>
                    <div className="mb-3">
                      <textarea 
                        className="form-control" 
                        rows={3} 
                        placeholder="Message*"
                      ></textarea>
                    </div>
                    <button type="submit" className="default__button w-100 text-center">
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

export default SowrabhaInstitute;