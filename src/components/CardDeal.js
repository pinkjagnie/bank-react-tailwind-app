import React, { useState } from "react";

import Button from "./Button";
import Modal from "./Modal/Modal";

import { card } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => {
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

      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortorç. Aliquet ultrices ac, ametau.</p>
          <div onClick={modalHandler}><Button styles={`mt-10`} text="Get Started"/></div>
        </div>

        <div className={layout.sectionImg}>
          <img src={card} alt="billing" className="w-[100%] h-[100%]" />
        </div>

      </section>
    </>
  )
};

export default CardDeal;