import axios from 'axios';
import { useFormik } from 'formik';
import { ArrowBigRight, User } from 'lucide-react';
import React from 'react';
import messages from '@/message.json';

const Chat = () => {
  const initialValues = {
    text: '',
    sender: 'Your message is recieved',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async values => {
      try {
        const response = await axios.post('/api/update-text', values);
        alert(response.statusText);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error Occurs while submitting');
      }
    },
  });
  return (
    <div>
      <div className='flex flex-col-reverse h-full mt-4'>
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
  );
};

export default Chat;
