'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Facility {
  id: number;
  title: string;
  image: string;
  alt: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    title: "Food Available With Good Hygiene",
    image: "/assets/img/service/facility-1.webp",
    alt: "Food Facility"
  },
  {
    id: 2,
    title: "Complete Loan Facility Available",
    image: "/assets/img/service/facility-2.jpg",
    alt: "Loan Facility"
  },
  {
    id: 3,
    title: "High Qualified & Experienced Teaching Staff",
    image: "/assets/img/service/facility-3.jpg",
    alt: "Teaching Staff"
  },
  {
    id: 4,
    title: "College Bus and Convenient Transport Facility",
    image: "/assets/img/service/facility-4.jpg",
    alt: "Transport Facility"
  },
  {
    id: 5,
    title: "Separate and Pollution Free Campus",
    image: "/assets/img/service/facility-5.png",
    alt: "Campus"
  },
  {
    id: 6,
    title: "Library and Information Center",
    image: "/assets/img/service/facility-7.jpg",
    alt: "Library"
  },
  {
    id: 7,
    title: "Well Equipped Laboratory (Anatomy & Physiology Lab)",
    image: "/assets/img/service/facility-6.jpg",
    alt: "Anatomy Lab"
  },
  {
    id: 8,
    title: "Well Equipped Laboratory (Nursing Foundation Lab)",
    image: "/assets/img/service/facility-8.jpg",
    alt: "Nursing Lab"
  },
  {
    id: 9,
    title: "Well Equipped Laboratory (MCH Lab)",
    image: "/assets/img/service/facility-9.jpg",
    alt: "MCH Lab"
  }
];

const Facilities = () => {
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
                  <h2 className="heading text-white">Our Facilities</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul className="d-flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="me-2">
                      <Link href="/" className="text-white text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="text-white">/ Facilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Grid Section */}
      <div className="gridarea sp_bottom_100 sp_top_100">
        <div className="container">
          <div className="row" data-aos="fade-up">
            {facilities.map((facility) => (
              <div key={facility.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="gridarea__wraper h-100">
                  <div className="gridarea__img">
                    <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                      <Image
                        src={facility.image}
                        alt={facility.alt}
                        fill
                        className="img-fluid"
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="gridarea__small__button">
                      <div className="grid__badge green__color">Facilities</div>
                    </div>
                  </div>
                  <div className="gridarea__content p-4">
                    <div className="gridarea__heading">
                      <h3 className="h5">{facility.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Facilities Page Styles */
        .gridarea {
          background-color: #f8f9fa;
          padding: 80px 0;
        }
        
        .gridarea__wraper {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .gridarea__wraper:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .gridarea__img {
          position: relative;
          overflow: hidden;
        }
        
        .gridarea__small__button {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 1;
        }
        
        .grid__badge {
          background: var(--primary-color);
          color: #fff;
          padding: 5px 15px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .green__color {
          background: #28a745 !important;
        }
        
        .gridarea__content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }
        
        .gridarea__heading h3 {
          font-size: 18px;
          margin-bottom: 0;
          line-height: 1.4;
          color: #1e1e1e;
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1199px) {
          .gridarea {
            padding: 60px 0;
          }
          
          .gridarea__heading h3 {
            font-size: 16px;
          }
        }
        
        @media (max-width: 991px) {
          .gridarea {
            padding: 50px 0;
          }
          
          .gridarea__wraper {
            margin-bottom: 30px;
          }
        }
        
        @media (max-width: 767px) {
          .gridarea {
            padding: 40px 0;
          }
          
          .gridarea__content {
            padding: 15px;
          }
        }
      `}</style>
    </>
  );
}

export default Facilities;