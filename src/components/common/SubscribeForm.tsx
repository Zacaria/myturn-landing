'use client';

import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { IconPencil } from '@tabler/icons-react';
import { FormProps } from '~/shared/types';

type FormData = FieldValues & {
  email: string;
};

const IconLoading = () => (
  <svg
    aria-hidden="true"
    role="status"
    className="mr-3 inline h-4 w-4 animate-spin text-white"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="#E5E7EB"
    ></path>
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    ></path>
  </svg>
);

const IconMail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="m-auto h-6 w-6 fill-blue-900/60 "
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const onSubmit = async (data: any) => {
  try {
    await axios.post('/api/subscribe', data);
    toast.success('Email sent, thank you !');
  } catch (e) {
    console.error(e);
    toast.error('An error occured, please retry later');
  }
};

export const SubscribeForm = ({ btn, inputs }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm();

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  let input = inputs ? inputs[0] : { placeholder: 'Your email' };

  if (!btn) {
    return null;
  }
  return (
    <div className="w-full">
      <form
        action=""
        className="mx-auto mt-4 flex w-full flex-col gap-3 sm:flex-row sm:gap-0"
        onSubmit={handleSubmit(onSubmit)}
        id="subscribe"
      >
        <div className="border-primary/10 relative flex w-full items-center rounded-lg rounded-l-lg bg-white shadow-md  ">
          <div className="py-1 pl-3">
            <IconMail />
          </div>
          <input
            autoComplete="email"
            placeholder={input.placeholder}
            className="w-full bg-transparent p-2 placeholder-gray-600 focus:outline-none"
            type="email"
            required
            {...register('email')}
          />
          <button
            type={btn.type}
            title={btn.title}
            className="sm:rounded-r-m flex rounded-r-lg bg-primary-700 px-5 py-3 font-bold disabled:bg-primary-900 sm:rounded-l-none"
            disabled={isSubmitting}
          >
            {isSubmitting && <IconLoading />}
            <span className="relative hidden w-max text-sm font-semibold text-slate-50 md:block">{btn.title}</span>
            <IconPencil className="relative mx-auto h-6 w-6 text-slate-50 md:hidden" />
          </button>
        </div>
      </form>
    </div>
  );
};
