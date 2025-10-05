'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Dynamically import AOS with SSR disabled


export default function SowrabhaInstitute() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
        });
      });
    }
  }, []);

  return (
    <>
      {/* Page Title Area Start */}
      <div className="pagetitle__area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="pagetitle__content">
                <h3>School Education</h3>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><span>School</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title Area End */}

      {/* School Area Start */}
      <div className="school__area section__padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title" data-aos="fade-up">
                <h2>School Education Programs</h2>
                <p>Comprehensive education from primary to higher secondary levels</p>
              </div>
            </div>
          </div>

          {/* School Overview */}
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
              <div className="school__overview">
                <h3>About Our Schools</h3>
                <p>Enlight Group operates multiple schools providing quality education from primary to higher secondary levels. Our schools focus on holistic development, academic excellence, and character building.</p>
                <div className="school__features">
                  <h4>Key Features</h4>
                  <ul>
                    <li><i className="icofont-check-circled"></i> Experienced and qualified teachers</li>
                    <li><i className="icofont-check-circled"></i> Modern teaching methodologies</li>
                    <li><i className="icofont-check-circled"></i> Focus on overall development</li>
                    <li><i className="icofont-check-circled"></i> Safe and nurturing environment</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
              <div className="school__overview__image">
                <Image
                  src="/assets/img/school/school-main.jpg"
                  alt="School Education"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* School Programs */}
          <div className="row mt-5">
            <div className="col-xl-12">
              <div className="school__programs" data-aos="fade-up">
                <h3>Our School Programs</h3>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="school__program__single">
                      <div className="school__program__single__image">
                        <Image
                          src="/assets/img/school/enlight-school.jpg"
                          alt="Enlight School"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                      </div>
                      <div className="school__program__single__content">
                        <h4>Enlight School</h4>
                        <p>Primary and secondary education with focus on academic excellence</p>
                        <ul>
                          <li>Classes: 1st to 10th</li>
                          <li>CBSE Curriculum</li>
                          <li>Sports and activities</li>
                          <li>Modern facilities</li>
                        </ul>
                        <Link href="/school/enlight-school" className="default__button">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="school__program__single">
                      <div className="school__program__single__image">
                        <Image
                          src="/assets/img/school/enlight-institute.jpg"
                          alt="Enlight Institute"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                      </div>
                      <div className="school__program__single__content">
                        <h4>Enlight Institute</h4>
                        <p>Higher secondary education preparing students for higher studies</p>
                        <ul>
                          <li>Classes: 11th to 12th</li>
                          <li>Science and Commerce streams</li>
                          <li>Career guidance</li>
                          <li>College preparation</li>
                        </ul>
                        <Link href="/school/enlight-institute" className="default__button">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="school__program__single">
                      <div className="school__program__single__image">
                        <Image
                          src="/assets/img/school/santidhama-school.jpg"
                          alt="Santidhama School"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                      </div>
                      <div className="school__program__single__content">
                        <h4>Santidhama School</h4>
                        <p>Alternative education focusing on spiritual and moral development</p>
                        <ul>
                          <li>Holistic education approach</li>
                          <li>Value-based learning</li>
                          <li>Cultural activities</li>
                          <li>Spiritual development</li>
                        </ul>
                        <Link href="/school/santidhama-school" className="default__button">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum & Approach */}
          <div className="row mt-5">
            <div className="col-xl-12">
              <div className="curriculum__approach" data-aos="fade-up">
                <h3>Curriculum & Teaching Approach</h3>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="curriculum__section">
                      <h4>Academic Excellence</h4>
                      <ul>
                        <li>CBSE curriculum with modern teaching methods</li>
                        <li>Regular assessments and progress tracking</li>
                        <li>Remedial classes for weak students</li>
                        <li>Advanced learners program for gifted students</li>
                        <li>Computer and technology integration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="curriculum__section">
                      <h4>Holistic Development</h4>
                      <ul>
                        <li>Sports and physical education</li>
                        <li>Arts, music, and cultural activities</li>
                        <li>Leadership and personality development</li>
                        <li>Community service and social responsibility</li>
                        <li>Environmental awareness programs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facilities & Activities */}
          <div className="row mt-5">
            <div className="col-xl-12">
              <div className="facilities__activities" data-aos="fade-up">
                <h3>School Facilities & Activities</h3>
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="facility__single">
                      <div className="facility__single__icon">
                        <i className="icofont-computer"></i>
                      </div>
                      <h4>Computer Labs</h4>
                      <p>Modern computer facilities with latest software</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="facility__single">
                      <div className="facility__single__icon">
                        <i className="icofont-book"></i>
                      </div>
                      <h4>Library</h4>
                      <p>Extensive collection of books and digital resources</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="facility__single">
                      <div className="facility__single__icon">
                        <i className="icofont-soccer"></i>
                      </div>
                      <h4>Sports Ground</h4>
                      <p>Large playground for various sports activities</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="facility__single">
                      <div className="facility__single__icon">
                        <i className="icofont-music"></i>
                      </div>
                      <h4>Activity Rooms</h4>
                      <p>Dedicated spaces for arts and cultural activities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Admission Information */}
          <div className="row mt-5">
            <div className="col-xl-12">
              <div className="admission__information" data-aos="fade-up">
                <h3>Admission Information</h3>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="admission__details">
                      <h4>Admission Process</h4>
                      <ul>
                        <li>Application form submission</li>
                        <li>Document verification</li>
                        <li>Entrance test (if applicable)</li>
                        <li>Interview with parents and student</li>
                        <li>Admission confirmation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="admission__cta">
                      <h4>Ready to Enroll?</h4>
                      <p>Give your child the best start in education with Enlight Group schools.</p>
                      <div className="admission__cta__buttons">
                        <Link href="/contacts" className="default__button">
                          Contact School Office
                        </Link>
                        <a
                          href="https://enlight.eduwego.in/online-admission/enlight-group-of-institutions"
                          target="_blank"
                          className="default__button default__button__2"
                        >
                          Apply Online
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* School Area End */}
    </>
  )
}
