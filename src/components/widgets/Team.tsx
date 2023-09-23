import Image from 'next/image';
import { teamData } from '~/shared/data';
import HeaderWidget from '../common/HeaderWidget';

const Team = () => {
  const { header, teams } = teamData;

  return (
    <section id="team">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />}
        <div className="flex items-stretch justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3">
            {teams.map(({ name, occupation, image, items, line }, index) => (
              <div key={`item-team-${index}`} className="p-6">
                <Image
                  src={image.src}
                  width={240}
                  height={320}
                  alt={image.alt}
                  className="m-auto h-72 w-60 rounded-md object-cover"
                />
                <div className="relative mt-3 text-center">
                  <h3 className="mb-1.5 text-xl font-bold">{name}</h3>
                  <p className="mb-3 text-base font-medium capitalize text-gray-600 ">{occupation}</p>
                  <p className="mb-7 font-light text-gray-500 ">{line}</p>
                  <ul className="absolute right-[-10px] top-[-290px] block list-none rounded-md bg-white/70 shadow-[0_0_8px_rgba(0,0,0,0.2)] backdrop-blur-sm ">
                    {items &&
                      items.map(
                        ({ title, href, icon: Icon }, index2) =>
                          Icon &&
                          href && (
                            <li
                              key={`team-${index2}`}
                              className="m-1 flex items-center justify-center rounded text-primary-700 hover:text-gray-500"
                            >
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={title as string}
                                className="hover: hover: flex items-center justify-center rounded-sm bg-transparent p-0.5 text-primary-900 hover:bg-primary-900 hover:text-slate-200"
                              >
                                <Icon className="h-6 w-6 p-0.5" />
                              </a>
                            </li>
                          ),
                      )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
