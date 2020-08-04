import React from 'react';
import {Field, reduxForm} from "redux-form";
import style from "../Dialogs.module.css";


const DialogForm = (props) => {
  const{handleSubmit} = props;
  return (
    <form className={style.newMessage} onSubmit={handleSubmit}>
        <Field component={"textarea"} name={"newDialogMessage"} />
        <button type={"submit"}>send</button>

    </form>
  )
};
const DialogFormRedux = reduxForm ({
  form: "dialogMessage"
})(DialogForm);

export default DialogFormRedux;
