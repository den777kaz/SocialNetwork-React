import React from 'react';
import {Field, reduxForm} from "redux-form";
import style from "../Dialogs.module.css";
import {maxLength, required} from "../../../utils/validation/validators";
import {Textarea} from "../../common/form-controls/FormControls";

const maxLength10 = maxLength(10);
const DialogForm = (props) => {
  const{handleSubmit} = props;


  return (
    <form className={style.newMessage} onSubmit={handleSubmit}>
        <Field
          component={Textarea}
          name={"newDialogMessage"}
          placeholder={"write a message"}
          validate={[required, maxLength10]}
        />
        <button type={"submit"}>send</button>

    </form>
  )
};
const DialogFormRedux = reduxForm ({
  form: "dialogMessage"
})(DialogForm);

export default DialogFormRedux;
