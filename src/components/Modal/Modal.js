import React from "react";

import Button from "../Button";

import styles from "../../style";

const Modal = (props) => {

  const closeModalHandler = () => {
    props.closeModalHandler()
  };

  return(
    <section className={`fixed top-0 left-0 bg-black w-[100vw] h-[100vh] z-20 ${styles.padding}`}>
      <div className={`${styles.padding}`}>
        <div className="text-center">
          <h2 className={styles.heading2}>Lorem ipsum dolor sit amet</h2>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase mt-3 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia mi ut mi sodales, quis eleifend lectus bibendum. Mauris hendrerit ac lacus sit amet facilisis. Sed luctus in augue sit amet congue.</p>
        </div>
        <div className="w-[80%] m-[auto]">
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[20%] rounded-full blue__gradient bottom-40" />
          <div className="flex-1 flex justify-start items-center flex-row m-3">
            <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">Lorem ipsum</h4>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia mi ut mi sodales, quis eleifend lectus bibendum.</p>
          </div>
          <div className="flex-1 flex justify-start items-center flex-row m-3 mb-9">
            <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">Lorem ipsum</h4>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia mi ut mi sodales, quis eleifend lectus bibendum.</p>
          </div>
        </div>
        <div className="flex justify-center" onClick={closeModalHandler}>
          <Button styles={"w-[30%]"} text="Close"/>
        </div>
      </div>
    </section>
  )
};

export default Modal;