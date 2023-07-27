import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import { SubscribeForm } from '../common/SubscribeForm';
import TestimonialImage from '~/assets/images/julija.jpg';
import Countdown from './Countdown';

const HeroTestimonial = () => {
  return (
    <div className="flex">
      <div className="w-11 flex-none">
        <Image
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src={TestimonialImage}
          alt="Julija profile picture"
          width={80}
          height={80}
        />
      </div>
      <div className="fl ml-3">
        <div className="flex-auto">
          <span className="font-medium">Julija :</span>
          <span className="text-sm"> Mom of 2 kids and Yoga teacher</span>
        </div>
        <div className="text-xs font-light text-slate-500">
          « I just love MyTurn’s innovative approach to gamified chores and see huge potential to make household chores
          fun and engaging for kids. I can’t wait to try the app! »
        </div>
      </div>
    </div>
  );
};

const Hero = (props: { data: HeroProps }) => {
  const { title, subtitle, callToAction, callToAction2, image, form } = props.data;

  // return (
  //   <section id="heroOne">
  //     <div className="mx-auto max-w-7xl px-4 sm:px-6">
  //       <div className="py-12 md:py-20">
  //         <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
  //           {title && (
  //             <h1 className="leading-tighter font-heading mb-6 text-5xl font-bold tracking-tighter md:text-6xl">
  //               {title}
  //             </h1>
  //           )}
  //           <div className="mx-auto max-w-3xl">
  //             {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
  //             <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
  //               {callToAction && <CTA data={callToAction} />}
  //               {callToAction2 && <CTA data={callToAction2} />}
  //             </div>
  //           </div>
  //         </div>
  //         {image && (
  //           <div className="relative m-auto max-w-5xl">
  //             <Image
  //               src={image.src}
  //               alt={image.alt}
  //               className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
  //               placeholder="blur"
  //               loading="eager"
  //               priority
  //               sizes="(max-width: 64rem) 100vw, 1024px"
  //             />
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <div className="m-auto px-6 pt-32 xl:container md:px-12 md:py-12">
      <div
        aria-hidden="true"
        className="from-primaryLight to-secondaryLight absolute inset-0 my-auto h-32 w-96 rotate-45 bg-gradient-to-r opacity-50 blur-3xl dark:opacity-20"
      ></div>
      <div className="relative lg:flex lg:items-center lg:gap-12">
        <div className="text-center sm:mx-auto sm:w-10/12 md:mt-12 md:w-2/3 lg:mr-auto lg:mt-0 lg:w-6/12 lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl xl:text-4xl">
            {title}
          </h1>
          <p className="my-8 text-gray-600 dark:text-gray-300">{subtitle}</p>
          <Countdown />
          <SubscribeForm {...form} />
          <div className="mt-12 flex justify-between gap-6 lg:gap-12">
            <HeroTestimonial />
            {/* <Image
              src="./images/clients/airbnb.svg"
              className="h-8 sm:h-10 w-auto lg:h-12"
                      alt="Testimonial profile picture"
        width={80}
        height={80}
              height={32}
              width={90}
            /> */}
            {/* <Image src="./images/clients/ge.svg" className="h-8 sm:h-10 w-auto lg:h-12"         alt="Testimonial profile picture"
        width={80}
        height={80} height={32} width={90} />
            <Image
              src="./images/clients/coty.svg"
              className="h-8 sm:h-10 w-auto lg:h-12"
                      alt="Testimonial profile picture"
        width={80}
        height={80}
              height={32}
              width={90}
            />
            <Image
              src="./images/clients/microsoft.svg"
              className="h-8 sm:h-10 w-auto lg:h-12"
                      alt="Testimonial profile picture"
        width={80}
        height={80}
              height={32}
              width={90}
            /> */}
          </div>
        </div>
        <div className="mt-12 w-full overflow-hidden lg:-mr-16 lg:mt-0 lg:w-7/12">
          <Image
            src={image.src}
            alt={image.alt}
            className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
            placeholder="blur"
            loading="eager"
            priority
            sizes="(max-width: 64rem) 100vw, 1024px"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
