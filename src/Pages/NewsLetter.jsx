import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);

    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};


function NewsLetter() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div className='page p-0 m-4'>
      <Form className='shadow-lg bg-slate-50 w-[80vw] md:w-[30rem] px-4 py-12 h-auto flex flex-col items-center justify-center m-auto' method='POST'>
        <h4 className='font-semibold text-xl tracking-wider'>
        Our Newsletter
        </h4>
        <div className='m-3 flex flex-col'>
        <label htmlFor='name' className='text-base my-1 font-medium'>
          Name :
        </label>
        <input
          type='text'
          className='inputs'
          name='name'
          id='name'
          required
        />
      </div>
        <div className='m-3 flex flex-col'>
        <label htmlFor='lastname' className='text-base my-1 font-medium'>
          Last name :
        </label>
        <input
          type='text'
          className='inputs'
          name='lastname'
          id='lastname'
          required
        />
      </div>
      {/* email */}
      <div className='m-3 flex flex-col'>
        <label htmlFor='email' className='text-base my-1 font-medium'>
          Email :
        </label>
        <input
          type='email'
          className='inputs'
          name='email'
          id='email'
          required
        />
      </div>
      <button
        type='submit'
        className='w-[70vw] md:w-[20rem] mt-6 bg-green-500 hover:bg-green-400 p-1 font-medium tracking-wider'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'submitting' : 'submit'}
      </button>
      </Form>
    </div>
  )
}

export default NewsLetter
