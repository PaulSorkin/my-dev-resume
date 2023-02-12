import React, {useRef, useState} from 'react';
import {Form, Formik} from "formik";
import {MyTextareaInput, MyTextInput} from "./FormsControl/FormsControl";
import * as Yup from "yup";
import * as emailjs from "@emailjs/browser";
import CustomLink from "./CustomLink";
import CustomLinkInactive from "./CustomLinkInactive";

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

const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;
const serviseId = process.env.REACT_APP_YOUR_SERVICE_ID;
const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;

const ContactsForm = () => {
    const submitRef = useRef(null);
    const form = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(true);
        setIsSubmitting(true);
        emailjs.sendForm(serviseId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                actions.setSubmitting(false);
                setIsSubmitting(false);
                actions.resetForm();
            }, (error) => {
                console.log(error.text);
                actions.setSubmitting(false);
                setIsSubmitting(false);
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
                        {isSubmitting ? (<CustomLinkInactive text="SENDING..." />) : (
                            <CustomLink text="SEND MESSAGE" onClick={() => submitRef.current.click()}/>             /*Ref to the actual button*/
                        )}
                        <button ref={submitRef} type={"submit"} onSubmit={handleSubmit} hidden></button>            {/*Actual but hidden button*/}
                    </div>
                </Form>
            }
        </Formik>
    );
};

export default ContactsForm;