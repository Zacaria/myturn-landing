import { FeaturesProps } from '~/shared/types';
import HeaderWidget from '../common/HeaderWidget';

const Features3 = ({ header, items }: FeaturesProps) => (
  <section className="scroll-mt-16" id="features3">
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
      {header && <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />}
      <div className="mb-0 grid grid-cols-2 items-start gap-6  sm:grid-cols-2 md:my-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {items.map(({ title, description, icon: Icon, link }, index) => (
          <div
            key={`item-feature3-${index}`}
            className="col-span-2 pb-6 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <div className="flex-flow flex">
              <div className="mb-4 mr-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-900">
                  {Icon && <Icon className="h-6 w-6 text-white " />}
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <>
                  <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  <p className="text-gray-600 ">{description}</p>
                </>
                {link && (
                  <div className="pt-2">
                    <a className="flex font-bold text-blue-600 hover:underline " href={link.href}>
                      {link.label}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features3;
