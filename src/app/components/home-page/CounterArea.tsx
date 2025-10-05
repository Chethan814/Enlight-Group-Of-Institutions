import React from 'react'
import Image from 'next/image'

const counters = [
  {
    icon: "/assets/img/counter/counter__1.png",
    value: "500+",
    label: "Students Enrolled",
    alt: "Students icon",
  },
  {
    icon: "/assets/img/counter/counter__2.png",
    value: "50+",
    label: "Expert Faculty",
    alt: "Faculty icon",
  },
  {
    icon: "/assets/img/counter/counter__3.png",
    value: "10+",
    label: "Years Experience",
    alt: "Experience icon",
  },
  {
    icon: "/assets/img/counter/counter__4.png",
    value: "95%",
    label: "Placement Rate",
    alt: "Placement icon",
  },
]

export default function CounterArea({ isClient }: { isClient: boolean }) {
  return (
    <div className="counterarea">
      <div className="container">
        <div className="row">
          {counters.map((counter, idx) => (
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
              {...(isClient ? { 'data-aos': 'fade-up' } : {})}
              key={idx}
            >
              <div className="counterarea__single">
                <div className="counterarea__single__icon">
                  <Image
                    loading="lazy"
                    src={counter.icon}
                    alt={counter.alt}
                    width={60}
                    height={60}
                  />
                </div>
                <div className="counterarea__single__content">
                  <h2 className="counter">{counter.value}</h2>
                  <p>{counter.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}