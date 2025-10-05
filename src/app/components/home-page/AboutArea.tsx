import React from 'react'
import Image from 'next/image'

export default function AboutArea({ isClient }: { isClient: boolean }) {
  return (
    <div className="aboutarea__2 sp_top_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
            <div className="about__right__wraper__2">
              <div className="educationarea__img" data-tilt>
                <Image loading="lazy" className="aboutarea__2__img__1" src="/assets/img/about/institute-1.jpg" alt="Enlight Institute building" width={300} height={200} />
                <Image loading="lazy" className="aboutarea__2__img__2" src="/assets/img/about/institute-2.jpg" alt="Campus view" width={250} height={180} />
                <Image loading="lazy" className="aboutarea__2__img__3" src="/assets/img/about/about_4.png" alt="Students studying" width={280} height={190} />
                <Image loading="lazy" className="aboutarea__2__img__4" src="/assets/img/about/about_11.png" alt="Campus facilities" width={320} height={210} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
            <div className="aboutarea__content__wraper">
              <div className="aboutarea__button">
                <div className="default__small__button">About Us</div>
              </div>
              <div className="aboutarea__headding heading__underline">
                <h2>Reliable & Trusted Institutions</h2>
              </div>
              <div className="aboutarea__para aboutarea__para__2">
                <p>
                  The Enlight Group Of Institutions Is Located In A Sprawling Green Campus Which Is
                  Spread Over 2 Acres Of Land With Great Ambience And Is Easily Accessible By Road,
                  Rail, Metro And Air. The Institution Is Built With The State Of The Art
                  Infrastructure Creating A Favorable Environment To Explore Higher Learning,
                  Enriching Personal Growth And Evolving As Better Versions Of Oneself. Thus The
                  Tagline Of Enlight Group Of Institutions – Explore, Enrich And Evolve...
                </p>
              </div>
              <div>
                <a title="Know more about us" className="default__button" href="/AboutElgi" aria-label="Learn more about Enlight Group of Institutions">Know More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}