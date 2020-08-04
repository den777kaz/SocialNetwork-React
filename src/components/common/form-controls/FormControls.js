import React from "react";
import style from "./FormControls.module.css";

// export const Textarea = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={style.formControl + " " + (hasError ? style.error : "")}>
//       <textarea {...input} {...props} />
//       {hasError && <span>{meta.error}</span>}
//     </div>
//
//   )
// };
// export const Input = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={style.formControl + " " + (hasError ? style.error : "")}>
//       <input {...input} {...props} />
//       {hasError && <span>{meta.error}</span>}
//     </div>
//
//   )
// };

const FormControl = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div>

  )
};
export const Input = (props) => {
  const {input, meta, ...restProps} = props

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>

  )
};
export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>

  )
};
