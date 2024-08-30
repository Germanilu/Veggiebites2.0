'use client';

import React, { useRef, useState }        from "react";
import emailjs                            from "@emailjs/browser";
import { useTranslations }                from "next-intl";

import './index.scss';

export default function Contact() {
  const formRef = useRef();
  const t = useTranslations("Contact-us-component");

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
          alert(t('success-alert'));

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert(t('unsuccess-alert'));
        }
      );
  };


  return (
    <div className='contact-design' >
      <div className="contact-form">
        <div className="texts">
          <p className='text'>{t('title')}</p>
          <h3 className='phone'>{t('phone')}</h3>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='form'
        >
          <label className='form-label'>
            <span className='name'>{t('name-tag')}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t('name-placeholder')}
              className='input'
            />
          </label>
          <label className='form-label'>
            <span className='email'>{t('email-tag')}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t('email-placeholder')}
              className='input'
            />
          </label>
          <label className='form-label'>
            <span className='message'>{t('message-tag')}</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t('message-placeholder')}
              className='input textarea'
            />
          </label>

          <div className="buttons">
            <div className="cancel-button">{t('cancel')}</div>
            <button
              type='submit'
              className='button'
            >
              {loading ? t('loading') : t('send')}
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}