import React, { useState } from "react";

import Button from "./Button";
import Modal from "./Modal/Modal";

import { features } from "../constans/index";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => {
  return(
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  )
};

const Business = () => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(true);
    // console.log(showModal)
  };

  const closeModalHandler = () => {
    setShowModal(false)
  };

  return(
    <>
      {showModal && <Modal closeModalHandler={closeModalHandler} />}

      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/> we'll handle the money.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
          <div onClick={modalHandler}><Button styles={`mt-10`} text="Get Started"/></div>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => {
            return(
              <FeatureCard key={feature.id} {...feature} index={index} />
            )
          })}
        </div>

      </section>
    </>
  )
};

export default Business;