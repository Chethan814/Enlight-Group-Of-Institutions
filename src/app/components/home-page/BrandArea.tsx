'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import '../../../../public/assets/css/style.css'

const BrandSection = () => {
  // Partner data
  const partners = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    src: `/assets/img/brand/partner-${i + 1}.png`,
    alt: `Partner ${i + 1}`
  }));

  // Initialize AOS on component mount
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
    <div className="brandarea sp_bottom_60">
      

      <div className="container">
        <div className="row">
          <div className="col-xl-12" data-aos="fade-up">
            <div className="section__title text-center">
              <div className="section__title__heading heading__underline">
                <h2>Placement In Associated With</h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="brandarea__wraper" data-aos="fade-up">
            {partners.map((partner) => (
              <div key={partner.id} className="brandarea__img">
                <a href="javascript:void(0);" className="pe-none">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={150}
                    height={90}
                    loading="lazy"
                    style={{ objectFit: 'contain' }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;