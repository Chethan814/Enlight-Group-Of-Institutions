// app/about/principal-desk/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Principal's Desk - Enlight Group of Institutions",
  description: "A message from the Principal of Enlight Group of Institutions about our commitment to excellence in education and student development.",
};

const PrincipalDesk = () => {
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
                  <h2 className="heading text-white">Principal&apos;s Desk</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul className="d-flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="me-2">
                      <Link href="/" className="text-white text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="text-white">/ Principal&apos;s Desk</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Principal's Message Section */}
      <div className="aboutarea__5 sp_bottom_100 sp_top_100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6" data-aos="fade-up">
              <div className="aboutarea__5__img" data-tilt>
                <Image
                  src="/assets/img/about/principal.jpg"
                  alt="Principal - Enlight Group of Institutions"
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
                    Excellence is an art mastered by training and habituation. And today&apos;s global economy, 
                    it is important to raise the bar of excellence even higher since today&apos;s students must 
                    be prepared to compete effectively on an international level.
                  </p>

                  <p className="mb-4" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                    &quot;It takes a whole village to raise a child&quot; so goes an African proverb. Imparting education 
                    to the young minds is an enterprise that demands a web of human efforts and system.
                  </p>

                  <div className="mt-5 pt-3">
                    <p className="mb-0" style={{ fontSize: '20px', fontWeight: '600' }}>Principal</p>
                    <p className="text-muted" style={{ fontStyle: 'italic' }}>
                      Enlight Group Of Institutions
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

export default PrincipalDesk;