import { IconChevronRight } from '@tabler/icons-react';
import { CallToActionProps, Item } from '~/shared/types';
import { SubscribeForm } from '../common/SubscribeForm';

const Card = ({ title, description, href, form }: Item) => (
  <div className="mb-6 rounded-md border-gray-400 bg-primary-50 px-5 py-4 text-base font-medium text-gray-700 shadow-md ">
    <div className="flex items-center justify-between">
      <div className="w-full">
        <h3 className="mb-3 text-xl font-bold ">{title}</h3>
        <p className="text-gray-600 ">{description}</p>
      </div>
      {href && (
        <div className="flex h-10 w-10 items-center justify-center">
          <IconChevronRight className="h-6 w-6 text-primary-600 " />
        </div>
      )}
    </div>
    {form && <SubscribeForm {...form} />}
  </div>
);

const CallToAction2 = ({ title, subtitle, items }: CallToActionProps) => (
  <section className="bg-primary-800 text-gray-200" id="callToActionTwo">
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:pt-20">
      <div className="row-gap-10 grid gap-6 md:grid-cols-2">
        <div className="mx-auto md:my-auto md:ml-0 md:pb-6 md:pr-24">
          <h2 className="mb-3 flex justify-center text-6xl font-bold md:justify-start">{title}</h2>
          <p className="text-center text-xl text-gray-200  md:text-left">{subtitle}</p>
        </div>
        <div className="relative -mb-6">
          {items &&
            items.map(({ title, description, href, form }, index) => (
              <div key={`call-to-action-item-${index}`}>
                {href ? (
                  <a
                    href={href}
                    className="w-full sm:mb-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`item-cta-${index}`}
                  >
                    <Card title={title} description={description} href={href} form={form} />
                  </a>
                ) : (
                  <Card title={title} description={description} href={href} form={form} />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction2;
