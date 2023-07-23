'use client';
import { subscribeData } from '~/shared/data';
import Form from '../common/Form';
import HeaderWidget from '../common/HeaderWidget';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FieldValues } from 'react-hook-form/dist/types';

type FormData = FieldValues & {
  email: string;
};

const Subscribe = () => {
  const { header, form } = subscribeData;

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post('/api/subscribe', data);
      toast.success('Email sent, thank you !');
    } catch (e) {
      toast.error('An error occured, please retry later');
    }
  };
  if (!form.inputs) {
    return null;
  }

  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="contactTwo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}
        <div className="flex items-stretch justify-center">
          <Form<FormData> {...form} btnPosition="right" onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
