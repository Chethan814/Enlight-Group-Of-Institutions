// app/about/chairman-message/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chairman&apos;s Message - Enlight Group of Institutions",
  description: "Read the Chairman&apos;s message from Mr. Sijo PC of Enlight Group of Institutions about our vision for education and student development.",
};

const ChairmanMessage = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <div 
        className="breadcrumbarea" 
        style={{ 
          backgroundImage: 'url(/assets/img/infobanner/infobanner-7.jpg)',
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
                  <h2 className="heading text-white">Chairman&apos;s Message</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul className="d-flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="me-2">
                      <Link href="/" className="text-white text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="text-white">/ Chairman&apos;s Message</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chairman's Message Section */}
      <div className="aboutarea__5 sp_bottom_100 sp_top_100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6" data-aos="fade-up">
              <div className="aboutarea__5__img" data-tilt>
                <Image
                  src="/assets/img/about/chairman.jpg"
                  alt="Chairman - Mr. Sijo PC"
                  width={600}
                  height={700}
                  className="img-fluid"
                  style={{ 
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6" data-aos="fade-up">
              <div className="aboutarea__content__wraper__5 ps-lg-5">
                <div className="aboutarea__para__5">
                  <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                    Greeting from ENLIGHT GROUP OF INSTITUTIONS. The Courses offered at EGI not only enable the students 
                    to gain knowledge but also develop their overall skills and personal attitude that shall empower them 
                    to achieve global recognition in their respective professional specialization. In keeping with our 
                    mission centered on academic excellence, our programs are designed with a good blend of classroom 
                    and Clinical learning, through our comprehensive suite of professional resources and wide range of 
                    clinical exposure.
                  </p>

                  <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                    It is a challenge to the society to provide a sound foundation to students&apos; community by comprehensive 
                    technical education in our Modern society.
                  </p>

                  <div className="mt-5 pt-3">
                    <p className="mb-0" style={{ fontSize: '20px', fontWeight: '600' }}>Mr. Sijo PC</p>
                    <p className="text-muted" style={{ fontStyle: 'italic' }}>
                      Chairman, Enlight Group Of Institutions
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

export default ChairmanMessage;