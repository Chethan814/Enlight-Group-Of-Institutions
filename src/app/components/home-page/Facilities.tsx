import React from 'react'

const facilities = [
    {
        icon: "icofont-read-book",
        title: "Library",
        desc: "The library at Enlight Group Of Institutions (ELGI) is a collection of resources, both physical and digital, that is made available to students and faculty for use and study related to nursing, paramedical, pharmacy, Allied health science.",
    },
    {
        icon: "icofont-stethoscope",
        title: "Clinical Training",
        desc: "The Clinical Training program at ENLIGHT GROUP OF INSTITUTIONS (ELGI) is designed to provide students with hands-on experience in diagnosing and treating mental health disorders. Students learn from experienced clinicians and participate in supervised clinical rotations, gaining the skills and knowledge necessary to become competent mental health professionals.",
    },
    {
        icon: "icofont-bus-alt-1",
        title: "Transport",
        desc: "The transport facility at Enlight Group Of Institutions (ELGI) provides safe and efficient transportation for students, faculty and staff to and from the institute.",
    },
    {
        icon: "icofont-wifi",
        title: "Wifi",
        desc: "The wifi at Enlight Group Of Institutions (ELGI) provides internet connectivity to students to facilitate online learning, research and communication.",
    },
    {
        icon: "icofont-brain-alt",
        title: "Demonstration Room",
        desc: "The demonstration room at ENLIGHT GROUP OF INSTITUTIONS (ELGI) is a specialized space for students and faculty to conduct and observe hands-on demonstrations, experiments and practicals related to nursing and paramedical science.",
    },
    {
        icon: "icofont-graduate-alt",
        title: "Placement",
        desc: "The placement cell at Enlight Group Of Institutions (ELGI) provides career guidance and placement support to help students secure rewarding positions in healthcare organizations.",
    },
]

export default function Facilities({ isClient }: { isClient: boolean }) {
    return (
        <div className="aboutarea__2 aboutarea__4 sp_bottom_70">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
                        <div className="aboutarea__content__wraper">
                            <div className="section__title__2">
                                <div className="section__small__title">
                                    <span>Facility</span>
                                </div>
                                <div className="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                                    <h2>Facility & Services Provided By Us</h2>
                                </div>
                            </div>
                            <div className="aboutarea__list__2 sp_top_40">
                                <ul>
                                    {facilities.map((facility, idx) => (
                                        <li className="d-flex gap-1" key={idx}>
                                            <span><i className={facility.icon} aria-hidden="true"></i></span>
                                            <span>
                                                <b className="text-primary">{facility.title}</b> - {facility.desc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}