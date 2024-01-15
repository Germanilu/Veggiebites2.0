'use client';

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './index.scss';
import { useTranslations } from "next-intl";

export default function Contact() {
  const formRef = useRef();
  const t = useTranslations("Contact-us");

  //State
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  //Functions
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ro4u14g",
        "template_lledwkg",
        {
          from_name: form.name,
          to_name: "Luciano",
          from_email: form.email,
          to_email: "lucianogermani93@gmail.com",
          message: form.message,
        },
        "p4zQqM0lGfEuM7HC9"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <div className='contact-design' >
      <div className="contact-form">
        <p className='text'>{t('title')}</p>
        <h3 className='subtitle'>CONTACT-SUBTITLE</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='form'
        >
          <label className='form-label'>
            <span className='name'>Text</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Text'
              className='input'
            />
          </label>
          <label className='form-label'>
            <span className='email'>Text</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Text'
              className='input'
            />
          </label>
          <label className='form-label'>
            <span className='message'>Text</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Text'
              className='input textarea'
            />
          </label>

          <button
            type='submit'
            className='button'
          >
            {loading ? "One second..." : `Text`}
          </button>
        </form>
      </div>
    </div>
  )
}