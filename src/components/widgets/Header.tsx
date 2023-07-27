'use client';

import { useState } from 'react';
import { IconRss } from '@tabler/icons-react';
import ToggleDarkMode from '~/components/atoms/ToggleDarkMode';
import Link from 'next/link';
import Logo from '~/components/atoms/Logo';
import ToggleMenu from '../atoms/ToggleMenu';
import { headerData } from '~/shared/data';
import CTA from '../common/CTA';
import CallToAction from './CallToAction';

const Header = () => {
  const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerData;

  const updatedIsDropdownOpen =
    links &&
    links.map(() => {
      return false;
    });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(updatedIsDropdownOpen as boolean[]);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  return (
    <header
      className={`top-0 z-40 mx-auto w-full flex-none bg-[#f5ece4] transition-all duration-100 ease-in  md:bg-[#f5ece4]/90 md:backdrop-blur-sm  ${
        isSticky ? 'sticky' : 'relative'
      }`}
      id="header"
    >
      <div className="mx-auto w-full max-w-7xl px-3 py-2 md:flex md:justify-between md:px-4 md:py-2.5">
        <div className="flex justify-between">
          <Link
            className="flex items-center"
            href="/"
            onClick={() =>
              isToggleMenuOpen ? handleToggleMenuOnClick() : setIsDropdownOpen(updatedIsDropdownOpen as boolean[])
            }
          >
            <Logo />
          </Link>
          <div className="flex items-center md:hidden">
            <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
          </div>
        </div>
        <nav
          className={`${isToggleMenuOpen ? 'block' : 'hidden'} h-screen md:w-full ${
            position === 'right' ? 'justify-end' : position === 'left' ? 'justify-start' : 'justify-center'
          } w-auto overflow-y-auto  md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible`}
          aria-label="Main navigation"
        >
          <ul className="flex w-full flex-col pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
            {links &&
              links.map(({ label, labelElement, href, icon: Icon, links }, index) => (
                <li key={`item-link-${index}`} className={links?.length ? 'dropdown' : ''}>
                  {links && links.length ? (
                    <>
                      <button
                        className="flex items-center px-3 py-2 font-medium transition duration-150 ease-in-out hover:text-gray-900 "
                        onClick={() => handleDropdownOnClick(index)}
                      >
                        {label} {Icon && <Icon className="ml-0.5 hidden h-3.5 w-3.5 md:inline" />}
                      </button>
                      <ul
                        className={`${
                          isDropdownOpen[index] ? 'block' : 'md:hidden'
                        } rounded pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:bg-[#f5ece4]/90 md:pl-0 md:backdrop-blur-md `}
                      >
                        {links.map(({ label: label2, labelElement: labelElement2, href: href2 }, index2) => (
                          <li key={`item-link-${index2}`}>
                            <Link
                              className="whitespace-no-wrap block px-5 py-2 first:rounded-t last:rounded-b  md:hover:bg-gray-200"
                              href={href2 as string}
                              onClick={() =>
                                isToggleMenuOpen ? handleToggleMenuOnClick() : handleCloseDropdownOnClick(index)
                              }
                            >
                              {labelElement2 || label2}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      className="flex items-center px-3 py-2 font-medium transition duration-150 ease-in-out hover:text-gray-900 "
                      href={href as string}
                      onClick={() => (isToggleMenuOpen ? handleToggleMenuOnClick() : handleDropdownOnClick(index))}
                    >
                      {labelElement || label}
                    </Link>
                  )}
                </li>
              ))}
          </ul>
        </nav>
        <div
          className={`${
            isToggleMenuOpen ? 'block' : 'hidden'
          } fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0`}
        >
          <div className="flex w-full items-center justify-between md:w-auto">
            {showToggleTheme && <ToggleDarkMode />}
            {showRssFeed && (
              <Link
                className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200   "
                aria-label="RSS Feed"
                href=""
              >
                <IconRss className="h-5 w-5" />
              </Link>
            )}
            {actions && actions.length > 0 && (
              <div className="ml-4 flex w-max flex-wrap justify-end">
                {actions.map((callToAction, index) => (
                  <CTA
                    key={`item-action-${index}`}
                    data={callToAction as CallToAction}
                    class="m-1 px-5 py-2 text-sm font-semibold shadow-none md:px-6"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
