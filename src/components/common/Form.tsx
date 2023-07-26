'use client';

import { useEffect } from 'react';
import { FieldValue, FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form';
import { FormProps } from '../../shared/types';

const Form = function <T extends FieldValues>({
  title,
  onSubmit,
  description,
  inputs,
  radioBtns,
  textarea,
  checkboxes,
  btn,
  btnPosition,
}: FormProps & { onSubmit: SubmitHandler<T> }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm<T>();

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  if (!inputs) {
    return null;
  }

  return (
    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
      {title && <h2 className={`${description ? 'mb-2' : 'mb-4'} text-2xl font-bold`}>{title}</h2>}
      {description && <p className="mb-4">{description}</p>}
      <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          {/* Inputs */}
          <div className="mx-0 mb-1 sm:mb-4">
            {inputs.map(({ type, label, name, autocomplete, placeholder }, index) => (
              <div key={`item-input-${index}`} className="mx-0 mb-1 sm:mb-4">
                <label htmlFor={name} className="pb-1 text-xs uppercase tracking-wider">
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  autoComplete={autocomplete}
                  {...register(name as Path<T>)}
                  placeholder={placeholder}
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                />
              </div>
            ))}
          </div>
          {/* Radio buttons */}
          {radioBtns && (
            <div className="mx-0 mb-1 sm:mb-3">
              <label className="pb-1 text-xs uppercase tracking-wider">{radioBtns?.label}</label>
              <div className="flex flex-wrap">
                {radioBtns.radios.map(({ label }, index) => (
                  <div key={`radio-btn-${index}`} className="mr-4 items-baseline">
                    <input
                      type="radio"
                      // name={label}
                      value={`value${index}`}
                      {...register(label as Path<T>)}
                      // checked={radioBtnValue === `value${index}`}
                      // onChange={changeRadioBtnsHandler}
                      className="cursor-pointer"
                    />
                    <label className="ml-2">{label}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Textarea */}
          {textarea && (
            <div className={`mx-0 mb-1 sm:mb-4`}>
              <label htmlFor={textarea.name} className="pb-1 text-xs uppercase tracking-wider">
                {textarea.label}
              </label>
              <textarea
                id={textarea.name}
                cols={textarea.cols}
                rows={textarea.rows}
                {...register(textarea.name as Path<T>)}
                // value={textareaValues}
                // onChange={(e) => changeTextareaHandler(e)}
                placeholder={textarea.placeholder}
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              />
            </div>
          )}
          {/* Checkboxes */}
          {checkboxes && (
            <div className="mx-0 mb-1 sm:mb-4">
              {checkboxes.map(({ label }, index) => (
                <div key={`checkbox-${index}`} className="mx-0 my-1 flex items-baseline">
                  <input
                    type="checkbox"
                    // name={label}
                    {...register(label as Path<T>)}
                    // checked={checkedState[index]}
                    // onChange={() => changeCheckboxHandler(index)}
                    className="cursor-pointer"
                  />
                  <label className="ml-2">{label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        {btn && (
          <div
            className={`${
              btnPosition === 'left' ? 'text-left' : btnPosition === 'right' ? 'text-right' : 'text-center'
            }`}
          >
            <button type={btn.type} className="btn btn-primary sm:mb-0">
              {btn.title}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
