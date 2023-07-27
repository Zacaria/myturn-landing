import Link from 'next/link';
import { footerData2 } from '~/shared/data';

const Footer2 = () => {
  const { links, columns, socials, footNote } = footerData2;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="xs:gap-8 grid grid-cols-4 gap-4 gap-y-8 py-8 md:py-12">
        {columns.map(({ title, texts, links: colLinks }, index) => (
          <div
            key={`item-column-${index}`}
            className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1"
          >
            <div className="mb-2 font-medium text-gray-800 ">{title}</div>
            {texts &&
              texts.map((text, index2) => (
                <p key={`item-text-${index2}`} className="text-gray-600 ">
                  {text}
                </p>
              ))}
            {colLinks &&
              colLinks.map(({ label, labelElement, href }, index) => (
                <p key={`item-link-${index}`}>
                  <a
                    className="font-semibold text-primary-800 duration-150 ease-in-out placeholder:transition hover:text-gray-700 hover:underline "
                    aria-label={label}
                    href={href}
                  >
                    {labelElement || label}
                  </a>
                </p>
              ))}
          </div>
        ))}
        <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
          <div className="mb-2 font-medium text-gray-800 ">Social</div>
          <ul className="-ml-2 mb-4 flex md:order-1 md:mb-0">
            {socials.map(({ label, icon: Icon, href }, index) => (
              <li key={`item-social-${index}`}>
                <a
                  className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200   "
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-muted py-6 text-sm text-gray-700  md:flex md:items-center md:justify-between md:py-8">
        <ul className="-ml-2 mb-4 flex pl-2 md:order-1 md:mb-0">
          {links &&
            links.map(({ label, labelElement, href }, index) => (
              <li key={`item-link-${index}`}>
                <a
                  className="duration-150 ease-in-out placeholder:transition hover:text-gray-700 hover:underline "
                  aria-label={label}
                  href={href}
                >
                  {labelElement || label}
                </a>
                {links.length - 1 !== index && <span className="mr-1"> · </span>}
              </li>
            ))}
        </ul>
        {footNote}
      </div>
    </div>
  );
};

export default Footer2;
