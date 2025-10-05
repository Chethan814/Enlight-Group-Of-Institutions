'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaEdit, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
      {/* Breadcrumb Section */}
      <div
        className="breadcrumbarea"
        style={{
          backgroundImage: 'url(/assets/img/infobanner/infobanner-1.jpg)',
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
                  <h2 className="heading text-white">Contact Us</h2>
                </div>
                <div className="breadcrumb__inner">
                  <ul className="d-flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li className="me-2">
                      <Link href="/" className="text-white text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="text-white">/ Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact__section sp_bottom_50 sp_top_100" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
              <div className="single__contact d-flex align-items-start p-4 h-100">
                <div className="contact__icon me-4 mt-2">
                  <FaEnvelope style={{ color: '#5F2DED', fontSize: '2rem' }} />
                </div>
                <div className="contact__text">
                  <h5 className="mb-3">Mail Address</h5>
                  <div className="contact__email">
                    <p className="mb-2">
                      <a href="mailto:infosowrabha@gmail.com" className="text-decoration-none text-dark">
                        infosowrabha@gmail.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:infoenlightnursing@gmail.com" className="text-decoration-none text-dark">
                        infoenlightnursing@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
              <div className="single__contact d-flex align-items-start p-4 h-100">
                <div className="contact__icon me-4 mt-2">
                  <FaPhone style={{ color: '#5F2DED', fontSize: '2rem' }} />
                </div>
                <div className="contact__text">
                  <h5 className="mb-3">Phone Number</h5>
                  <div className="contact__email">
                    <p className="mb-2">
                      <a href="tel:+919916073632" className="text-decoration-none text-dark">
                        +91-9916073632
                      </a>
                    </p>
                    <p>
                      <a href="tel:+918029556773" className="text-decoration-none text-dark">
                        +91-8029556773
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-4">
              <div className="single__contact d-flex align-items-start p-4 h-100">
                <div className="contact__icon me-4 mt-2">
                  <FaMapMarkerAlt style={{ color: '#5F2DED', fontSize: '2rem' }} />
                </div>
                <div className="contact__text">
                  <h5 className="mb-3">Office Address</h5>
                  <div className="contact__email">
                    <p>
                      82/17, Tavarekere Village,<br />
                      Tavarekere Hobli, Bangalore South Taluk,<br />
                      Near Tavarekere-Bus Stand,<br />
                      Bangalore, Karnataka - 562130
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mb-5">
              <div className="map-container" style={{ height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.350925955584!2d77.5006!3d12.8443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae41b3f0e1e8d5%3A0x1e3a3b3b3b3b3b3b!2sEnlight%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact__form__wraper sp_bottom_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="contact__form__inner p-5" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <div className="contact__form__heading text-center mb-5" data-aos="fade-up">
                  <h3>Get in Touch</h3>
                  <p className="text-muted">Have questions? We&apos;re here to help!</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6 mb-4" data-aos="fade-up">
                      <div className="position-relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control ps-5"
                          placeholder="Enter Your Name*"
                          required
                        />
                        <div className="position-absolute" style={{ top: '12px', left: '15px' }}>
                          <FaUser style={{ color: '#5F2DED' }} />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4" data-aos="fade-up">
                      <div className="position-relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control ps-5"
                          placeholder="Enter Email Address*"
                          required
                        />
                        <div className="position-absolute" style={{ top: '12px', left: '15px' }}>
                          <FaEnvelope style={{ color: '#5F2DED' }} />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4" data-aos="fade-up">
                      <div className="position-relative">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control ps-5"
                          placeholder="Enter Your Subject"
                        />
                        <div className="position-absolute" style={{ top: '12px', left: '15px' }}>
                          <FaEdit style={{ color: '#5F2DED' }} />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4" data-aos="fade-up">
                      <div className="position-relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control ps-5"
                          placeholder="Enter Your Phone"
                        />
                        <div className="position-absolute" style={{ top: '12px', left: '15px' }}>
                          <FaPhoneAlt style={{ color: '#5F2DED' }} />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mb-4" data-aos="fade-up">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        rows={5}
                        placeholder="Enter Your Message here"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center" data-aos="fade-up">
                      <button
                        type="submit"
                        className="btn btn-primary px-5 py-3"
                        style={{ backgroundColor: '#5F2DED', border: 'none' }}
                      >
                        <FaPaperPlane className="me-2" /> Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Contact Page Styles */
        .single__contact {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          height: 100%;
        }

        .single__contact:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .contact__icon {
          min-width: 40px;
        }

        .contact__text h5 {
          color: #1e1e1e;
          font-weight: 600;
          margin-bottom: 15px;
          position: relative;
          padding-bottom: 10px;
        }

        .contact__text h5:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 2px;
          background: #5F2DED;
        }

        .contact__email p {
          margin-bottom: 5px;
          color: #555;
        }

        .contact__email a:hover {
          color: #5F2DED !important;
        }

        .form-control {
          height: 50px;
          border: 1px solid #e1e1e1;
          padding-left: 50px !important;
          border-radius: 4px;
          transition: all 0.3s;
        }

        .form-control:focus {
          box-shadow: none;
          border-color: #5F2DED;
        }

        textarea.form-control {
          height: auto;
          padding: 15px;
        }

        .btn-primary {
          background: #5F2DED;
          padding: 12px 30px;
          border: none;
          font-weight: 600;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          background: #4a1fc0;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(95, 45, 237, 0.3);
        }

        /* Responsive Styles */
        @media (max-width: 767px) {
          .contact__section {
            padding: 50px 0;
          }
          
          .single__contact {
            margin-bottom: 30px;
          }
          
          .map-container {
            height: 350px;
          }
          
          .contact__form__inner {
            padding: 30px 20px !important;
          }
        }

        @media (max-width: 575px) {
          .contact__section {
            padding: 40px 0;
          }
          
          .map-container {
            height: 300px;
          }
          
          .btn-primary {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Contacts;