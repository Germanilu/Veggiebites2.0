'use client';

import React, { useRef, useState }        from "react";
import {motion}                           from "framer-motion";
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
    <motion.div className='contact-design' 
    variants={{
      hidden:{opacity:0, y:150},
      visible:{opacity:1,y:0},          
    }}
    transition={{delay:.25, duration:0.5}}
    initial="hidden"
    animate="visible"
    >
      <div className="contact-form">
        <div className="texts">
          <motion.p className='text'
          variants={{
            hidden:{opacity:0, y:0},
            visible:{opacity:1,y:0},          
          }}
          transition={{delay:.5, duration:0.75}}
          initial="hidden"
          animate="visible"
          >{t('title')}</motion.p>
          <motion.p className='phone'
          variants={{
            hidden:{opacity:0, y:0},
            visible:{opacity:1,y:0},          
          }}
          transition={{delay:.5, duration:0.75}}
          initial="hidden"
          animate="visible"
          >{t('phone')}</motion.p>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='form'
        >
          <motion.label className='form-label'
           variants={{
            hidden:{opacity:0, y:0},
            visible:{opacity:1,y:0},          
          }}
          transition={{delay:1, duration:0.75}}
          initial="hidden"
          animate="visible"
          >
            <span className='name'>{t('name-tag')}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t('name-placeholder')}
              className='input'
            />
          </motion.label>
          <motion.label className='form-label'
          variants={{
            hidden:{opacity:0, y:0},
            visible:{opacity:1,y:0},          
          }}
          transition={{delay:1.25, duration:0.75}}
          initial="hidden"
          animate="visible"
          >
            <span className='email'>{t('email-tag')}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t('email-placeholder')}
              className='input'
            />
          </motion.label>
          <motion.label className='form-label'
            variants={{
              hidden:{opacity:0, y:0},
              visible:{opacity:1,y:0},          
            }}
            transition={{delay:1.5, duration:0.75}}
            initial="hidden"
            animate="visible"
          >
            <span className='message'>{t('message-tag')}</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t('message-placeholder')}
              className='input textarea'
            />
          </motion.label>

          <div className="buttons">
            <motion.div 
              className="cancel-button" 
              onClick={() => setForm({ name: "", email:"",message: "",})}
              variants={{
                hidden:{opacity:0, y:0},
                visible:{opacity:1,y:0},          
              }}
              transition={{delay:1.75, duration:0.75}}
              initial="hidden"
              animate="visible"
              >
              {t('cancel')}
            </motion.div>
            <motion.button
              type='submit'
              className='button'
              variants={{
                hidden:{opacity:0, y:0},
                visible:{opacity:1,y:0},          
              }}
              transition={{delay:2, duration:0.75}}
              initial="hidden"
              animate="visible"
            >
              {loading ? t('loading') : t('send')}
            </motion.button>

          </div>
        </form>
      </div>
    </motion.div>
  )
}