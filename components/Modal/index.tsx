import React, { useRef, useState } from "react";

type Props = {
  modalOpen: boolean;
  toggleModal: () => void;
};

function Modal({ modalOpen = false, toggleModal }: Props) {
  const preventClose = (e: any) => {
    e.stopPropagation();
    // toggleModal();
  };
  return modalOpen === true ? (
    <div>
      <div
        className="fixed inset-0 flex justify-center items-center bg-[#000000b2] z-50"
        onClick={toggleModal}
      >
        <div
          onClick={preventClose}
          className="relative bg-[#ffffff] w-[95%] md:w-[70%] lg:w-[650px] px-4 md:px-8 lg:px-14 py-8 lg:py-12 rounded-[15px]"
        >
          <button
            onClick={toggleModal}
            className="bg-[#2b2b2b] h-9 w-9 lg:h-12 lg:w-12  rounded-full  absolute flex justify-center items-center -top-3 -right-3 lg:-top-5  lg:-right-5 hover:shadow-red-800 hover:shadow-[0px_0px_10px_2px] lg:hover:scale-105 duration-200"
          >
            <p className="text-lg lg:text-xl text-white font-extrabold">X</p>
          </button>
          <div>
            <h1 className="text-[#ff7463] font-bold font-['poppins'] text-base lg:text-2xl text-center ">
              Coloque seu e-mail para assistir a aula
            </h1>

            <form
              id="formcaptura"
              action="https://cr244.infusionsoft.com/app/form/process/3e775105fcc7f71b425e5832ba0a55da"
              method="post"
              className="cf op-optin-validation"
            >
              <div style={{ display: "none" }}>
                <input
                  type="hidden"
                  name="inf_form_xid"
                  value="d933bf5c2eb56f0b80c7a8759c6c4813"
                />
                <input
                  type="hidden"
                  name="inf_form_name"
                  value="form-pp-2017"
                />
                <input
                  type="hidden"
                  name="infusionsoft_version"
                  value="1.60.0.41"
                />
                <input
                  type="hidden"
                  name="inf_custom_LeadSource"
                  value="null"
                />
                <input type="hidden" name="inf_custom_GaContent" value="null" />
                <input type="hidden" name="inf_custom_GaMedium" value="null" />
                <input
                  type="hidden"
                  name="inf_custom_GaCampaign"
                  value="null"
                />
                <input type="hidden" name="inf_custom_GaSource" value="null" />
                <input
                  type="hidden"
                  name="redirect_url"
                  value="https://cr244.infusionsoft.com/app/form/process/d933bf5c2eb56f0b80c7a8759c6c4813"
                />
                <input
                  type="hidden"
                  name="email_field"
                  value="inf_field_Email"
                />
              </div>
              <input
                className="border-[3px] border-[#ff7562] rounded-[8px] text-[#000] w-full px-4 py-4 lg:py-5 mt-6 lg:mt-8"
                type="email"
                required={true}
                name="inf_field_Email"
                placeholder="E-mail"
              />
              <div className="text-center">
                <button
                  type="submit"
                  id="btn_1_1679c158e4c94ec52e221c685b2551a9"
                  className="text-[#fff] text-center text-xl lg:text-[28px] font-bold font-['poppins'] block w-full rounded-[8px] bg-[#49cfca] hover:bg-[#32bdb8] lg:hover:scale-105 duration-200 px-4 py-4 lg:py-5 mt-3"
                >
                  Quero assistir a aula
                </button>
              </div>
              <input
                type="hidden"
                id="op_optin_nonce"
                name="op_optin_nonce"
                value="fa8f522260"
              />
              <input
                type="hidden"
                name="_wp_http_referer"
                value="/cpp1-00-optin1/"
              />
            </form>
            <p className="text-[9px] lg:text-[14px] text-[#212529] text-center mt-3">
              Eu quero receber a aula e os e-mails de Ginástica Íntima
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Modal;
