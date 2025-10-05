import React from 'react'
import Image from 'next/image'

const testimonials = [
  {
    img: "/assets/img/testimonial/student-1.jpg",
    alt: "Priya Sharma - BSc Nursing Graduate",
    name: "Priya Sharma",
    role: "BSc Nursing Graduate",
    text: "Enlight Group provided me with excellent nursing education and practical training. The faculty is very supportive.",
  },
  {
    img: "/assets/img/testimonial/student-2.jpg",
    alt: "Rahul Kumar - GNM Graduate",
    name: "Rahul Kumar",
    role: "GNM Graduate",
    text: "The practical exposure and modern facilities at Enlight helped me become a confident healthcare professional.",
  },
  {
    img: "/assets/img/testimonial/student-3.jpg",
    alt: "Anjali Patel - Paramedical Graduate",
    name: "Anjali Patel",
    role: "Paramedical Graduate",
    text: "I'm grateful for the quality education and placement support provided by Enlight Group of Institutions.",
  },
]

export default function TestimonialArea() {
  return (
    <div className="testimonialarea">
      <div className="container">
        <div className="row">
          <div className="col-xl-12" data-aos="fade-up">
            <div className="section__title section__title__2 text-center">
              <h2>What Our <span>Students</span> Say</h2>
              <p>Hear from our successful graduates about their experience</p>
            </div>
          </div>
        </div>
        <div className="row">
          {testimonials.map((t, idx) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" key={idx}>
              <div className="testimonialarea__single">
                <div className="testimonialarea__single__img">
                  <Image loading="lazy" src={t.img} alt={t.alt} width={100} height={100} />
                </div>
                <div className="testimonialarea__single__content">
                  <div className="testimonialarea__single__content__text">
                    <p>&ldquo;{t.text}&rdquo;</p>
                  </div>
                  <div className="testimonialarea__single__content__title">
                    <h3>{t.name}</h3>
                    <span>{t.role}</span>
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