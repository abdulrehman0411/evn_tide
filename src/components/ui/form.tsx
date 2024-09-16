'use client';
import { formSchema } from '@/schema/form.schema';
import { useFormik } from 'formik';
import { Button } from './button';
import axios from 'axios';

const TransactionForm = () => {
  const initialValues = {
    name: '',
    amount: '',
    coin: '',
    note: '',
    date: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
    transactionid: 123,
    status: 'Completed',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: async values => {
      try {
        const response = await axios.post('/api/update-component', values);
        alert(response.data.message);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error Occurs while submitting');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='grid gap-4 py-4'>
        <div className='grid grid-cols-6 items-center gap-2'>
          <label
            className='pl-2 col-span-6'
            htmlFor='name'
          >
            Name
          </label>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Name'
            className='col-span-6 py-4 bg-slate-200 pl-3 rounded-xl'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? (
            <p className='text-red-500 text-xs '>{formik.errors.name}</p>
          ) : null}
        </div>
        <div className='grid grid-cols-6 items-center gap-2'>
          <label
            className='pl-2 col-span-6'
            htmlFor='amount'
          >
            Enter Amount
          </label>
          <input
            id='amount'
            name='amount'
            type='number'
            placeholder='0'
            className='col-span-5 py-4 bg-slate-200 pl-3 rounded-xl'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amount}
          />
          {formik.errors.amount && formik.touched.amount ? (
            <p className='text-red-500 text-xs '>{formik.errors.amount}</p>
          ) : null}
          <select
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id='coin'
            name='coin'
            className='col-span-1 py-4 bg-slate-200 pl-3 rounded-xl'
          >
            <option selected>CN</option>
            <option value='BTC'>BTC</option>
            <option value='ETH'>ETH</option>
            <option value='BNB'>BNB</option>
            <option value='LINK'>LINK</option>
          </select>
          <input />
          {formik.errors.coin && formik.touched.coin ? (
            <p className='text-red-500 text-xs '>{formik.errors.coin}</p>
          ) : null}
        </div>
        <div className='grid grid-cols-6 items-center gap-2'>
          <label
            className='pl-2 col-span-6'
            htmlFor='note'
          >
            Enter Note (Optional)
          </label>
          <input
            id='note'
            name='note'
            type='text'
            placeholder='0'
            autoComplete='given-note'
            className='col-span-6 py-4 bg-slate-200 pl-3 rounded-xl'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>

      <Button
        className='w-full bg-indigo-900 h-12'
        type='submit'
      >
        Save changes
      </Button>
    </form>
  );
};

export default TransactionForm;
