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


const ContactsForm = () => {
    const submitRef = useRef(null);

    const handleSubmit = async (values, actions) => {
        //alert(values)
        actions.setSubmitting(true)
        const response = await fetch('sendmail.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname: values.fullname,
                email: values.email,
                message: values.message
            })
        });
        if (response.ok) {
            const result= await response.json();
            alert(result.message);
            //values.fullname = '';
            //values.email = '';
            //values.message = '';
            actions.resetForm();
            actions.setSubmitting(false);
        } else {
            alert("Some error occurred");
            actions.setSubmitting(false);
        }
    };

    return (
        <Formik initialValues={{
            fullname: '',
            email: '',
            message: '',
        }} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({status}) =>
                <Form className="contacts__form">
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