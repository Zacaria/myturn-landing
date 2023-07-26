'use client';

import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { IconPencil } from '@tabler/icons-react';

type FormData = FieldValues & {
  email: string;
};

const IconMail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="m-auto h-6 w-6 fill-blue-900/60 dark:fill-gray-400"
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

export const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm();

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);
  return (
    <div className="w-full">
      <form
        action=""
        className="mx-auto mt-4 flex w-full flex-col gap-3 sm:flex-row sm:gap-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="border-primary/10 relative flex w-full items-center rounded-lg rounded-l-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-900">
          <div className="py-1 pl-3">
            <IconMail />
          </div>
          <input
            autoComplete="email"
            placeholder="Your mail address"
            className="w-full bg-transparent p-2 placeholder-gray-600 dark:placeholder-white"
            type="email"
            {...register('email')}
          />
          <button
            type="submit"
            title="Start buying"
            className="sm:rounded-r-m rounded-r-lg bg-primary-700 px-5 py-5 font-bold sm:rounded-l-none "
          >
            <span className="relative hidden w-max font-semibold text-slate-50 md:block">Try for free</span>
            <IconPencil className="relative mx-auto h-6 w-6 text-slate-50 dark:text-gray-900 md:hidden" />
          </button>
        </div>
      </form>
    </div>
  );
};
