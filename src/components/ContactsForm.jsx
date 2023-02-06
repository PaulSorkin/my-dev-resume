import React, {useRef} from 'react';
import {Form, Formik} from "formik";
import {MyTextareaInput, MyTextInput} from "./FormsControl/FormsControl";
import Link from "./Link";
import * as Yup from "yup";

const validationSchema = Yup.object({
    fullname: Yup.string()
        .min(3, 'Please, enter your name')
        .required('Please, enter your name'),
    email: Yup.string()
        .email('Sorry, invalid format here')
        .required('Please, enter your email'),
    message: Yup.string()
        .min(3, "Don't hesitate to drop me a message")
        .required("Don't hesitate to drop me a message"),
});

const handleSubmit = () => {
    alert('YESSS')
};

const ContactsForm = () => {
    const submitRef= useRef(null)

    return (
        <Formik initialValues={{
            fullname: '',
            emal: '',
            message: '',
        }} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({status}) =>
                <Form>
                    <div className="formlines">
                        <MyTextInput name={"fullname"} placeholder={"NAME"}/>
                        <MyTextInput name={"email"} type={"email"} placeholder={"EMAIL"}/>
                        <MyTextareaInput name={"message"} placeholder={"MESSAGE"}/>


                    {status && <div>{status}</div>}
                        <button ref={submitRef} type={"submit"} onSubmit={handleSubmit} hidden></button>

                    <Link text="SEND MESSAGE" onClick={() => submitRef.current.click()}/>
                    </div>
                </Form>
            }
        </Formik>
    );
};

export default ContactsForm;