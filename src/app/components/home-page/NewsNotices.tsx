import Image from 'next/image'

const newsList = [
  { title: "Admission Open for B.Sc. Nursing and GNM Courses for Academic Year 2024-2025", date: "15 December 2024" },
  { title: "New Paramedical Courses Launched - DMLT, DMXT, and DAT Programs Now Available", date: "10 December 2024" },
  { title: "Enlight Group of Institutions Receives Recognition from INC & KNC", date: "05 December 2024" },
]

const noticeList = [
  { title: "Holiday Notice - Institution will remain closed on 25th December 2024", date: "20 December 2024" },
  { title: "Parent-Teacher Meeting scheduled for 30th December 2024", date: "18 December 2024" },
  { title: "Annual Sports Day will be held on 15th January 2025", date: "15 December 2024" },
]

export default function NewsNotices({ isClient }: { isClient: boolean }) {
  return (
    <div className="blogarea sp_bottom_70 sp_top_100">
      <div className="container">
        <div className="row aos-init" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
          <div className="col-xl-12">
            <div className="section__title text-center">
              <div className="section__title__button">
                <div className="default__small__button">News &amp; Notices</div>
              </div>
              <div className="section__title__heading">
                <h2>Latest News &amp; Notices</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
            <div className="blogarea__content__wraper__scroll">
              <div><h3>News</h3></div>
              <div className="blogarea__content__wraper">
                {newsList.map((news, idx) => (
                  <div className="blogarea__text__wraper" key={idx}>
                    <div className="blogarea__img">
                      <div className="blogarea__date">
                        <i className="icofont-news"></i>
                      </div>
                    </div>
                    <div className="blogarea__para">
                      <p>{news.title}</p>
                      <p className="align-items-center d-flex gap-2">
                        <span><i className="icofont-calendar text-primary"></i></span>{news.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6" {...(isClient ? { 'data-aos': 'fade-up' } : {})}>
            <div className="blogarea__content__wraper__scroll">
              <div><h3>Notices</h3></div>
              <div className="blogarea__content__wraper">
                {noticeList.map((notice, idx) => (
                  <div className="blogarea__text__wraper" key={idx}>
                    <div className="blogarea__img new-gif-size">
                      <div className="blogarea__date">
                        <div className="relative w-6 h-6">
                          <Image 
                            src="/assets/img/newgif.gif" 
                            alt="New notice" 
                            fill
                            sizes="24px"
                            className="object-contain"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                    <div className="blogarea__para">
                      <p>{notice.title}</p>
                      <p className="align-items-center d-flex gap-2">
                        <span><i className="icofont-calendar text-primary"></i></span>{notice.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}