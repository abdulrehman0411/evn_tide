'use client';
import React from 'react';
import messages from '@/message.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowBigRight, User } from 'lucide-react';
import { useFormik } from 'formik';
import axios from 'axios';

const Support = () => {
  const initialValues = {
    text: '',
    sender: 'Your message is recieved',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async values => {
      try {
        const response = await axios.post('/api/update-text', values);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error Occurs while submitting');
      }
    },
  });
  return (
    <div>
      <div className='ml-8 mt-7 rounded-xl mr-6 float-left items-center p-4 bg-white sm:w-[750px]'>
        <div className='flex flex-col gap-4 pb-20'>
          <h1 className='text-4xl font-semibold'>FAQs</h1>
          <Accordion
            type='single'
            collapsible
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-lg font-medium'>
                How do I sign up for Eventide?
              </AccordionTrigger>
              <AccordionContent className='text-lg font-medium'>
                Visit the Eventide website and follow the signup instructions.
                You will need to provide a valid email address and create a
                strong password.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type='single'
            collapsible
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-lg font-medium'>
                How do I navigate the Eventide dashboard?
              </AccordionTrigger>
              <AccordionContent className='text-lg font-medium'>
                Visit the Eventide website and follow the signup instructions.
                You will need to provide a valid email address and create a
                strong password.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type='single'
            collapsible
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-lg font-medium'>
                How do I add my crypto exchanges to Eventide?
              </AccordionTrigger>
              <AccordionContent className='text-lg font-medium'>
                Visit the Eventide website and follow the signup instructions.
                You will need to provide a valid email address and create a
                strong password.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type='single'
            collapsible
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-lg font-medium'>
                Does Eventide allow me to trade cryptocurrencies directly?
              </AccordionTrigger>
              <AccordionContent className='text-lg font-medium'>
                Visit the Eventide website and follow the signup instructions.
                You will need to provide a valid email address and create a
                strong password.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type='single'
            collapsible
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-lg font-medium'>
                Can I see my order history on Eventide?
              </AccordionTrigger>
              <AccordionContent className='text-lg font-medium'>
                Visit the Eventide website and follow the signup instructions.
                You will need to provide a valid email address and create a
                strong password.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type='single'
            collapsible
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-lg font-medium'>
                How do I analyze my trading performance on Eventide?
              </AccordionTrigger>
              <AccordionContent className='text-lg font-medium'>
                Visit the Eventide website and follow the signup instructions.
                You will need to provide a valid email address and create a
                strong password.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type='single'
            collapsible
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-lg font-medium'>
                How does Eventide protect my account?
              </AccordionTrigger>
              <AccordionContent className='text-lg font-medium'>
                Visit the Eventide website and follow the signup instructions.
                You will need to provide a valid email address and create a
                strong password.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className='flex xl:ml-0 ml-8 mt-7 rounded-xl mr-6 float-left items-center p-4 bg-white sm:w-[580px] sm:h-[680px]'>
        <div className='flex flex-col-reverse h-full w-full'>
          <div className='relative justify-start'>
            <form
              action=''
              onSubmit={formik.handleSubmit}
            >
              <input
                name='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.text}
                type='text'
                className=' w-full py-3 bg-slate-100 rounded-xl pl-3'
                placeholder='Write a Message'
              />
              <span className='absolute top-3 right-2'>
                <ArrowBigRight
                  onClick={formik.submitForm}
                  className='text-indigo-700'
                />
              </span>
            </form>
          </div>
          <div className='justify-end overflow-y-auto'>
            {messages.map(message => (
              <div>
                <h1 className='relative m-3 bg-indigo-900 text-white rounded-md p-3'>
                  {message.text}
                  <span>
                    <User className='absolute top-3 right-3' />
                  </span>
                </h1>

                <h1 className='relative pl-12 m-3 bg-slate-100 text-black rounded-md p-3'>
                  {message.sender}
                  <span>
                    <User className='absolute top-3 left-3' />
                  </span>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
