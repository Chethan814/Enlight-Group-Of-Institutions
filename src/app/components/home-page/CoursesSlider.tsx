import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

const courses = [
    {
        img: "/assets/img/courses/course-1.jpg",
        badge: "Nursing",
        seats: "20 seats left",
        duration: "4 Years",
        title: "B.Sc.Nursing",
        link: "/bScNursing",
        desc: "The course of study shall extend over 4 academic years from the date of commencement of his/ her study of....",
    },
    {
        img: "/assets/img/courses/course-2.jpg",
        badge: "Nursing",
        seats: "20 seats left",
        duration: "2 Years",
        title: "M.Sc.Nursing",
        link: "/MSCNursing",
        desc: "MSc Nursing will prepare Nurses, to improve the quality of nursing education and practice, in India. It will build upon....",
    },
    {
        img: "/assets/img/courses/course-3.jpg",
        badge: "Paramedical",
        seats: "40 seats left",
        duration: "2 Years",
        title: "Diploma in Medical Laboratory Technology (DMLT)",
        link: "/diploma-in-medical-laboratory-technology-dmlt",
        desc: "DMLT is a two years course. A professional with DMLT examines and analyzes different body....",
    },
    {
        img: "/assets/img/courses/course-4.jpg",
        badge: "Paramedical",
        seats: "20 seats left",
        duration: "2 Years",
        title: "Diploma in Medical Imaging/X-Ray Technology (DMXT)",
        link: "/diploma-in-medical-imaging-x-ray-technology-dmxt",
        desc: "DMXT is an undergraduate radiology course and is all about how electromagnetic radiation....",
    },
    {
        img: "/assets/img/courses/course-5.jpg",
        badge: "Nursing",
        seats: "20 seats left",
        duration: "2 Years",
        title: "PBBSc Nursing",
        link: "/PbbscNursing",
        desc: "The B.Sc Nursing (Post certificate) course of study shall extend over a period of 2 academic years from the date....",
    },
    {
        img: "/assets/img/courses/course-6.jpg",
        badge: "Nursing",
        seats: "20 seats left",
        duration: "3 Years",
        title: "GNM Nursing",
        link: "/GnmNursing",
        desc: "GNM referred to as General Nursing and Midwifery deals with the education of nurses in general health care, nursing, and....",
    },
    {
        img: "/assets/img/courses/course-7.jpg",
        badge: "Paramedical",
        seats: "20 seats left",
        duration: "2 Years",
        title: "Diploma in Medical Operation Technology (DMOT)",
        link: "/diploma-in-medical-operation-technology-dmot",
        desc: "DMOT is a two-year diploma program designed to create trained and qualified professionals....",
    },
    {
        img: "/assets/img/courses/course-8.jpg",
        badge: "Paramedical",
        seats: "20 seats left",
        duration: "2 Years",
        title: "Diploma in Medical Anesthesia Technology (DOT/DAT)",
        link: "/diploma-in-medical-anesthesia-technology-dot-dat",
        desc: "DOT/DAT leads the students to a comprehensive study of the field of anesthetics and its.....",
    },
]

export default function CoursesSlider({ isClient }: { isClient: boolean }) {
    const swiperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isClient && swiperRef.current) {
            import('swiper').then(({ default: Swiper }) => {
                import('swiper/modules').then(({ Navigation, Pagination, Autoplay }) => {
                    new Swiper(swiperRef.current!, {
                        modules: [Navigation, Pagination, Autoplay],
                        slidesPerView: 1,
                        spaceBetween: 0,
                        loop: true,
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false,
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                        breakpoints: {
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        },
                    })
                })
            })
        }
    }, [isClient])

    return (
        <div className="gridarea__2 sp_bottom_70" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
            <div className="container-fluid full__width__padding">
                <div className="section__title">
                    <div className="section__title__heading">
                        <h2>Courses We Offer</h2>
                    </div>
                </div>
                <div className="row row__custom__class">
                    <div className="swiper featured__course" ref={swiperRef}>
                        <div className="swiper-wrapper">
                            {courses.map((course, idx) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item column__custom__class swiper-slide" key={idx}>
                                    <div className="gridarea__wraper">
                                        <div className="gridarea__img">
                                            <a href={course.link}>
                                                <Image 
                                                    src={course.img} 
                                                    alt={course.title}
                                                    width={370}
                                                    height={250}
                                                    style={{ 
                                                        width: '100%', 
                                                        height: 'auto',
                                                        objectFit: 'cover'
                                                    }}
                                                    loading="lazy"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </a>
                                            <div className={`gridarea__small__button${course.badge === "Paramedical" ? " gridarea__small__button__1" : ""}`}>
                                                <div className={`grid__badge${course.badge === "Paramedical" ? " blue__color" : ""}`}>{course.badge}</div>
                                            </div>
                                        </div>
                                        <div className="gridarea__content">
                                            <div className="gridarea__list">
                                                <ul>
                                                    <li>
                                                        <i className="icofont-chair"></i> {course.seats}
                                                    </li>
                                                    <li>
                                                        <div className="text-end"><i className="icofont-clock-time"></i> {course.duration}</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-info-height">
                                                <div className="gridarea__heading">
                                                    <h3><a href={course.link}>{course.title}</a></h3>
                                                </div>
                                                <div className="text-justify">
                                                    <p>{course.desc}</p>
                                                </div>
                                            </div>
                                            <div className="gridarea__bottom">
                                                <a href={course.link}>
                                                    <div className="gridarea__small__img">
                                                        <div className="gridarea__small__content ms-0">
                                                            <h6>Apply Now <i className="icofont-long-arrow-right"></i></h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="slider__controls__wrap slider__controls__arrows">
                    <button className="swiper-button-next arrow-btn" aria-label="Next course"></button>
                    <button className="swiper-button-prev arrow-btn" aria-label="Previous course"></button>
                </div>
            </div>
        </div>
    )
}