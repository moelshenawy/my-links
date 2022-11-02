import React, { useState } from "react";
import {
  BsShare,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsWhatsapp,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

const Home = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="container p-3">
        <div className="d-flex p-2 align-items-center justify-content-center flex-column">
          <div className="user-info">
            <div className="logo-container">
              <img
                src={require("../assets/imgs/pexels-jer-chung-2059151.jpg")}
                alt="profile"
              />
            </div>
          </div>

          <div className="user-name">
            <h1>مطعم طبق اليوم</h1>
          </div>

          <div className="user-desc">
            <p>
              وجبات افطار - غذاء لجميع العاملين بالشركات والمحلات بمحيط ميدان
              محطة الرمل والمنشية ادارة الشيف: عصام فؤاد
            </p>
          </div>

          <div className="user-lists d-flex  flex-column">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.facebook.com/groups/636931504808352/"
              target="_blank"
              className="list"
            >
              <div className="list-desc">جروب الفيسبوك</div>

              <div className="list-icon">
                <BsShare />
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              className="list"
              href="https://chat.whatsapp.com/C59YCnYkJyIA4UwoN9rXgi"
              target="_blank"
              rel="noreferrer"
            >
              <div className="list-desc">جروب الواتس اب</div>

              <div className="list-icon">
                <BsShare />
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="tel:01229642796"
              className="list"
            >
              <div className="list-desc">رقم التوصيل</div>

              <div className="list-icon">
                <BsShare />
              </div>
            </motion.a>

            <div className="list mt-5">
              <h2>الروابط</h2>
            </div>
          </div>

          <div className="user-links mt-6 d-flex  justify-content-around mb-5">
            <a
              href="https://www.facebook.com/groups/636931504808352"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              href="https://chat.whatsapp.com/C59YCnYkJyIA4UwoN9rXgi"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp />
            </a>
            <a href="#Twitter">
              <BsTwitter />
            </a>
            <a href="#Instagram">
              <BsInstagram />
            </a>
            <a href="#Youtube">
              <BsYoutube />
            </a>
            <a href="#Tiktok">
              <FaTiktok />
            </a>
            <a href="#Gmail">
              <SiGmail />
            </a>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="user-location"
            onClick={() => setToggle((prev) => !prev)}
          >
            <div className="desc">
              ١٢ ش امين فكري القائد إبراهيم متفرع من السلطان حسين
            </div>
            <div className="icon">
              <MdLocationOn />
            </div>
          </motion.div>

          {/* {toggle && (
            <>
              <div className="map-wrap">
                <img
                  src={require("../assets/imgs/map.png")}
                  className={`${toggle ? "opacity-1" : "opacity-0"}`}
                  alt="map"
                />
              </div>
              <div className="close" onClick={() => setToggle(false)}>
                <BsFillArrowUpCircleFill className="mt-3" />
              </div>
            </>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Home;
