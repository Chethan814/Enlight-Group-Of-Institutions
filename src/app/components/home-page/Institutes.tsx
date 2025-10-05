import React from 'react'
import Image from 'next/image'

interface Institute {
  img: string
  name: string
  link: string
  description?: string
}

const institutes: Institute[] = [
  {
    img: "/assets/img/courses/course-5.jpg",
    name: "Sowrabha Institute of Nursing Sciences",
    link: "/sowrabhaIns",
  },
  {
    img: "/assets/img/courses/course-6.jpg",
    name: "Enlight Institute of Para Medical Sciences",
    link: "/englightIns",
  },
  {
    img: "/assets/img/courses/course-7.jpg",
    name: "Enlight School of Nursing",
    link: "/enlightSchool",
  },
  {
    img: "/assets/img/courses/course-8.jpg",
    name: "Sri Shantidhama School of Nursing",
    link: "/enlightSchool",
  },
]

export default function Institutes({ isClient }: { isClient: boolean }) {
  return (
    <div className="blogarea__2 sp_top_40 sp_bottom_70">
      <div className="container-fluid full__width__padding">
        <div className="row">
          <div className="col-xl-12" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
            <div className="section__title__2 text-center teamarea__margin">
              <div className="section__small__title">
                <span>Institutes</span>
              </div>
              <div className="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                <h2>Our Best Institutes</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {institutes.map((inst, idx) => (
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
              {...(isClient ? { 'data-aos': 'fade-up' } : {})}
              key={idx}
            >
              <div className="single__blog__wraper">
                <div className="single__blog__img">
                  <div className="institute-image-container">
                    <Image
                      src={inst.img}
                      alt={`${inst.name} Institute`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="single__blog__content">
                  <p>Enlight Group of Institutions</p>
                  <h4>
                    <a href={inst.link}>
                      {inst.name.includes("School") ? (
                        <>
                          {inst.name.split("School")[0]}School of <br />
                          {inst.name.split("School")[1]?.trim()}
                        </>
                      ) : (
                        inst.name
                      )}
                    </a>
                  </h4>
                  <div className="single__blog__bottom__button">
                    <a href={inst.link}>
                      Explore More <i className="icofont-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}