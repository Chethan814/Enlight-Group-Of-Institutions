"use client";
import React from 'react';
import { FaPhone, FaEnvelope, FaUserAlt, FaFileAlt } from 'react-icons/fa';
import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';

const TopBar: React.FC = () => {
  return (
    <div className="topbararea py-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="topbar__left">
              <ul className="d-flex align-items-center gap-4 mb-0 ps-0">
                <li className="d-flex align-items-center gap-2">
                  <FaPhone />
                  <span>+91-8029556773</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <FaEnvelope />
                  <span>infoenlightnursing@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="topbar__right">
              <div className="d-flex justify-content-end align-items-center">
                <div className="login-buttons d-flex align-items-center gap-2 me-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Go to Student Login"
                    href="https://enlight.eduwego.in/student-login"
                    className="default__small__button__white mb-0 rounded p-1 d-flex align-items-center gap-2"
                  >
                    <FaUserAlt className="me-1" />
                    <span>Student Login</span>
                  </a>
                  <span className="text-white">|</span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Go for Online Admission"
                    href="https://enlight-admission-form.vercel.app"
                    className="default__small__button__white mb-0 rounded p-1 d-flex align-items-center gap-2 me-3"
                  >
                    <FaFileAlt className="me-1" />
                    <span>Online Admission</span>
                  </a>
                  <span className="text-white">|</span>
                  <a
                    href="https://enlight-enquiry-form.vercel.app"
                    title="Go to Enquiry Now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="default__small__button__white mb-0 rounded p-1 d-flex align-items-center gap-2"
                  >
                    <span>Enquiry Now</span>
                  </a>
                </div>
                <div className="topbar__list ms-3">
                  <ul className="d-flex align-items-center gap-2 mb-0 ps-0">
                    <li className="d-flex">
                      <a
                        className="d-flex align-items-center justify-content-center"
                        title="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/sovamjamatiaofficial"
                      >
                        <FaFacebookF className="fs-6" />
                      </a>
                    </li>
                    <li className="d-flex">
                      <a
                        className="d-flex align-items-center justify-content-center"
                        title="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://x.com/of_enlight?t=IIT52UV_BZ1hzOkmeuhHGQ&s=08"
                      >
                        <FaXTwitter className="fs-6" />
                      </a>
                    </li>
                    <li className="d-flex">
                      <a
                        className="d-flex align-items-center justify-content-center"
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/enlightgroupofinstitutions2024/"
                      >
                        <FaInstagram className="fs-6" />
                      </a>
                    </li>
                    <li className="d-flex">
                      <a
                        className="d-flex align-items-center justify-content-center"
                        title="Youtube"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/@enlightgroupofinstitutions8290"
                      >
                        <FaYoutube className="fs-6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;