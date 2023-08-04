"use client";

import { useState } from "react";

export const ContactUsInput = ({ name, type, placeholder, required }) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = () => {
    setIsActive(true);
  };

  return (
    <>
      <div className="input_Wrap">
        {type ? (
          <input
            className="form__input"
            name={name}
            type={type}
            onChange={handleChange}
          />
        ) : (
          <textarea
            className="form__textarea"
            name={name}
            onChange={handleChange}
          ></textarea>
        )}
        {!isActive && (
          <div
            className={
              isActive ? "input__placeholder--hidden" : "input__placeholder"
            }
          >
            {placeholder}
            {required && <span className="input__star">*</span>}
          </div>
        )}
      </div>
    </>
    //   // {/* {type ? (
    //     <div className="input_Wrap">
    //       <input
    //         className="form__input"
    //         name={name}
    //         type={type}
    //         onFocus={handleFocus}
    //         onBlur={handleBlur}
    //       />
    //       <div
    //         className={
    //           isActive ? "input__placeholder--hidden" : "input__placeholder"
    //         }
    //       >
    //         {placeholder}
    //         {required && <span className="input__star">*</span>}
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="input_Wrap">
    //       <textarea
    //         className="form__textarea"
    //         name={name}
    //         onFocus={handleFocus}
    //         onBlur={handleBlur}
    //       ></textarea>
    //       <div
    //         className={
    //           isActive ? "input__placeholder--hidden" : "input__placeholder"
    //         }
    //       >
    //         {placeholder}
    //         {required && <span className="input__star">*</span>}
    //       </div>
    //     </div>
    //   )} */}
    // </>
  );
};
