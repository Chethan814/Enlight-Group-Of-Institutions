// app/hostel/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hostel Facilities - Enlight Group of Institutions",
  description: "Explore our comfortable and secure hostel facilities at Enlight Group of Institutions, featuring 24/7 security, WiFi, and affordable accommodation for students.",
};

const features = [
  {
    icon: "icofont-safety",
    title: "24 x 7 Security",
    description: "All time security guard, CCTV surveillance & emergency services available.",
  },
  {
    icon: "icofont-wallet",
    title: "Affordable Pricing",
    description: "In this era of inflation we are offering an affordable price for student's accommodation.",
  },
  {
    icon: "icofont-wifi",
    title: "24x7 WiFi Available",
    description: "Free high-speed WiFi available for all hostel residents.",
  },
];

const Hostel = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div 
        className="breadcrumbarea" 
        style={{ 
          backgroundImage: 'url(/assets/img/infobanner/infobanner-4.jpg)',
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
                  <h2 className="heading text-white">Hostel</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul className="d-flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="me-2">
                      <Link href="/" className="text-white text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="text-white">/ Hostel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Hostel Section */}
      <div className="aboutarea__5 sp_bottom_100 sp_top_100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6" data-aos="fade-up">
              <div className="aboutarea__5__img" data-tilt>
                <Image
                  src="/assets/img/Hostel/Hostel-Img-1.jpg"
                  alt="Enlight Group of Institutions Hostel"
                  width={600}
                  height={400}
                  className="img-fluid"
                  style={{ 
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6" data-aos="fade-up">
              <div className="aboutarea__content__wraper__5">
                <div className="section__title">
                  <div className="section__title__heading">
                    <h2>About Hostel</h2>
                  </div>
                </div>

                <div className="aboutarea__para__5 mb-4">
                  <p>The institution provides residential hostel to the boy and girl students separately. The residential hostel is managed by a teacher-warden appointed by the Principal. Right of admission and right of expulsion rest with the authorities.</p>
                </div>

                <div className="row g-4">
                  {features.map((feature, index) => (
                    <div key={index} className="col-12" data-aos="fade-up" data-aos-delay={index * 100}>
                      <div className="course__details__wraper">
                        <div className="d-flex align-items-center gap-3">
                          <div className="icon-badge">
                            <i className={feature.icon}></i>
                          </div>
                          <div>
                            <h5 className="text-primary mb-0">{feature.title}</h5>
                            <p className="lh-1-5 mb-0">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hostel Regulations Section */}
          <div className="row mt-5 pt-5" data-aos="fade-up">
            <div className="col-xl-12">
              <div className="aboutarea__content__wraper__5 ms-0">
                <div className="section__title">
                  <div className="section__title__heading">
                    <h2>Hostel Regulations</h2>
                  </div>
                </div>

                <div className="aboutarea__para__5">
                  <p className="mb-4">Students are allowed to go out once a month for shopping and back by 6:00 pm. Visitors are allowed only on Sundays between 2pm to 5pm, once in a month only. No student will be permitted to stay outside the hostel with relatives or friends.</p>
                  
                  <p className="mb-4">When a student is ill he/she should inform the Tutor/warden. Relatives and friends are not permitted to visit the students during duty hours. Arrival from a distance place will not entitle a visiting relative to see the student during her duty hours nor she will be called from sleep if she is on night duty unless it is very urgent.</p>
                  
                  <p className="mb-4">Ragging in all its forms are banned and treated as a cognizable offence. Any student found guilty of ragging will be suspended and/or dismissed at the discretion of the management.</p>
                  
                  <p className="mb-4">Taking or administering any harmful drug/liquor/smoking is strictly prohibited. In order to curb any such tendency amongst students, it has been decided that any student found in possession of any un-authorized drug/liquor/smoking, will be summarily DISMISSED.</p>
                  
                  <p className="mb-4">Students will not be allowed to interrupt their studies to send time preparing for Final vows or to attend congregation meetings or praying together etc. inside the hostel premises.</p>
                  
                  <p className="mb-0">The students should not venture out the premises without prior written permission of warden in leisure time or on off duty days. The warden has the authority to check the rooms and cupboards of the residents at any time without any prior notice. All the students should be present in person at 7:00 pm for the Roll call.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hostel;