// app/school/enlight-school/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Enlight School of Nursing - Enlight Group of Institutions",
  description: "Explore our nursing programs at Enlight School of Nursing, offering B.Sc, M.Sc, PBBSc, and GNM Nursing courses with experienced faculty and excellent placement opportunities.",
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

const EnlightSchool = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div
        className="breadcrumbarea"
        style={{
          backgroundImage: 'url(/assets/img/infobanner/infobanner-1.jpg)',
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
                  <h2 className="heading text-white">Enlight School of Nursing</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul className="d-flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="me-2">
                      <Link href="/" className="text-white text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="text-white">/ Enlight School of Nursing</li>
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
            <div className="col-xl-8 col-lg-8">
              {/* Main Image */}
              <div className="blogarae__img__2 course__details__img__2" data-aos="fade-up">
                <Image
                  src="/assets/img/courses/bsc-nursing.jpg"
                  alt="Enlight School of Nursing"
                  width={800}
                  height={450}
                  className="img-fluid w-100"
                  style={{ borderRadius: '8px' }}
                />
              </div>

              {/* Content Section */}
              <div className="blog__details__content__wraper">
                <div className="course__button__wraper" data-aos="fade-up">
                  <div className="course__button">
                    <a
                      href="/Sowrabha-Prospectus.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-flex align-items-center"
                    >
                      <i className="icofont-file-document me-2"></i>
                      Download Prospectus
                    </a>
                  </div>
                  <div className="course__date">
                    <p>Last Update: <span>May 19, 2024</span></p>
                  </div>
                </div>

                <div className="course__details__heading" data-aos="fade-up">
                  <h3>About Enlight School of Nursing</h3>
                </div>
                <div className="course__details__paragraph text-justify" data-aos="fade-up">
                  <p>
                    The Enlight Education Trust started in the year of Nov 2015 by keeping a broad objective of
                    imparting high-quality education through improving oneself and the nation at large. Through
                    well-organized packages, we are successful in providing standard education to the students.
                    Providing trustworthy services with minimum expense was always our trademark &hellip; We worked to
                    enlighten our students&apos; lives by making valuable contributions to their academic, and
                    non-academic side by providing assistance in their studies, getting better placements, and
                    allover bringing them as useful citizens to the nation. All this we made real only by the
                    coordinated practices, having experienced faculties, and putting 100% loyalty into work...
                    that&apos;s why we believe together we can succeed.
                  </p>
                </div>

                <div className="row align-items-center mt-4">
                  <div className="col-sm-12 col-md-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="icon-badge">
                        <i className="icofont-check-circled"></i>
                      </div>
                      <div>
                        <h5 className="text-primary mb-0">Approvals</h5>
                        <p className="lh-1-5 mb-0">
                          Indian Nursing Council (INC), Karnataka Nursing Council (KNC)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div data-aos="fade-up">
                    <a
                      href="https://enlight-enquiry-form.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="default__button"
                    >
                      Enquiry Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-4 col-lg-4">
            <div className="course__details__sidebar">
              {/* Courses Offered */}
              <div className="blogsidebar__content__wraper__2" data-aos="fade-up">
                <h4 className="sidebar__title">Courses Offered</h4>
                <ul className="course__details__populer__list" style={{ listStyle: 'none', padding: 0 }}>
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
                            className="img-fluid"
                            style={{ borderRadius: '4px' }}
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
                  <p>Need any help in Admission?</p>
                  <a
                    href="tel:+91 9916073632"
                    className="default__button default__button--3"
                  >
                    <i className="icofont-phone me-2"></i> +91 9916073632
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="blogsidebar__content__wraper__2 mt-4" data-aos="fade-up">
                <h4 className="sidebar__title">Get in Touch</h4>
                <form className="get__touch__input">
                  <input
                    type="text"
                    placeholder="Enter name*"
                    className="form-control mb-3"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter your mail*"
                    className="form-control mb-3"
                    required
                  />
                  <textarea
                    placeholder="Message*"
                    className="form-control mb-3"
                    rows={3}
                    required
                  ></textarea>
                  <button type="submit" className="default__button w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnlightSchool;