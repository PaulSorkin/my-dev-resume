import React, {useRef} from 'react';
import {Form, Formik} from "formik";
import {MyTextareaInput, MyTextInput} from "./FormsControl/FormsControl";
import Link from "./Link";
import * as Yup from "yup";
import * as emailjs from "@emailjs/browser";

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


const ContactsForm = () => {
    const submitRef = useRef(null);
    const form = useRef();

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(true)
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                actions.setSubmitting(false);
                actions.resetForm();
            }, (error) => {
                console.log(error.text);
                actions.setSubmitting(false);
            });
    };

    return (
        <Formik initialValues={{
            fullname: '',
            email: '',
            message: '',
        }} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({status}) =>
                <Form ref={form} className="contacts__form" id="contacts__form">
                    <div className="formlines">
                        <MyTextInput name={"fullname"} placeholder={"NAME"}/>
                        <MyTextInput name={"email"} type={"email"} placeholder={"EMAIL"}/>
                        <MyTextareaInput name={"message"} placeholder={"MESSAGE"}/>
                        {status && <div>{status}</div>}
                        <button ref={submitRef} type={"submit"} onSubmit={handleSubmit} hidden></button>            {/*Actual but hidden button*/}
                        <Link text="SEND MESSAGE" onClick={() => submitRef.current.click()}/>                       {/*Ref to the actual button*/}
                    </div>
                </Form>
            }
        </Formik>
    );
};

export default ContactsForm;