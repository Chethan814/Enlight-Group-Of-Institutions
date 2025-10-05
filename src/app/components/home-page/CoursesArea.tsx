import React from 'react'
import Image from 'next/image'

const courses = [
  {
    img: "/assets/img/courses/bsc-nursing.jpg",
    alt: "BSc Nursing students",
    title: "BSc Nursing",
    desc: "4-year undergraduate program in nursing sciences",
    link: "/nursing",
    aria: "Learn more about BSc Nursing",
  },
  {
    img: "/assets/img/courses/course-1.jpg",
    alt: "GNM Nursing students",
    title: "GNM Nursing",
    desc: "3-year diploma program in general nursing and midwifery",
    link: "/nursing",
    aria: "Learn more about GNM Nursing",
  },
  {
    img: "/assets/img/courses/course-2.jpg",
    alt: "Paramedical students",
    title: "Paramedical Courses",
    desc: "Various diploma programs in medical laboratory technology",
    link: "/paramedicals",
    aria: "Learn more about Paramedical courses",
  },
]

export default function CoursesArea() {
  return (
    <div className="coursesarea coursesarea__2">
      <div className="container">
        <div className="row">
          <div className="col-xl-12" data-aos="fade-up">
            <div className="section__title section__title__2 text-center">
              <h2>Our <span>Courses</span></h2>
              <p>Explore our comprehensive range of healthcare education programs</p>
            </div>
          </div>
        </div>
        <div className="row">
          {courses.map((course, idx) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" key={idx}>
              <div className="coursesarea__single">
                <div className="coursesarea__single__img">
                  <Image loading="lazy" src={course.img} alt={course.alt} width={400} height={250} />
                </div>
                <div className="coursesarea__single__content">
                  <div className="coursesarea__single__content__title">
                    <h3>{course.title}</h3>
                  </div>
                  <div className="coursesarea__single__content__paragraph">
                    <p>{course.desc}</p>
                  </div>
                  <div className="coursesarea__single__content__button">
                    <a href={course.link} className="default__button" aria-label={course.aria}>
                      Learn More
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