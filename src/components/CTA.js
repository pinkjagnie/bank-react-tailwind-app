import React, { useState } from "react";

import Button from "./Button";
import Modal from "./Modal/Modal";

import styles from "../style";

const CTA = () => {
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

      <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
          <h2 className={styles.heading2}>Let’s try our service now!</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <div onClick={modalHandler}><Button text="Get Started"/></div>
        </div>
      </section>
    </>
  )
};

export default CTA;