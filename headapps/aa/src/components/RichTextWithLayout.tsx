import { Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import React from 'react';

interface RichTextProps {
  description?: Field<string>;
  variant?: 'default' | 'withSidebar';
  sidebarLinks?: { href: string; label: string }[];
}

export default function RichTextWithLayout({
  description,
  variant = 'default',
  sidebarLinks = [],
}: RichTextProps) {
  if (variant === 'withSidebar') {
    return (
      <div className="row">
        <div className="wrapper flex flex-col md:flex-row gap-[20px]">
          <div className="content-with-sidebar w-full md:w-[75%] float-left border border-[#e5e5e6] rounded-[3px] bg-white md:!px-[8.5%]">
            <RichText field={description} />
          </div>

          <aside>
            <div className="sidebar !px-[2.1rem] pt-[1.8rem] pb-[1.9rem] md:py-[2.5rem] md:!px-[1.8rem] w-full bg-white border border-[#e5e5e6] rounded-[3px]">
              <h2 className="alt !mb-[1.6rem] lg:!mb-[1.7rem] md:px-[1rem] !text-[1.9rem] md:!text-[2.4rem]">
                About our website
              </h2>
              <ul className="md:!pl-[1.2rem] md:!pr-[1rem] !mb-0">
                {sidebarLinks.map((link, index) => (
                  <li key={index} className={`${index == 0 ? '!pt-[0rem]' : 'pt-[1.4rem]'}`}>
                    <Link
                      href={link.href}
                      className={`!text-[#07818c] !text-[1.6rem] !leading-[2.1rem] md:!text-[1.9rem] md:!leading-[2.4rem]  !font-bold hover:!underline`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  // Default layout
  return (
    <div className="row">
      <div className="wrapper">
        <RichText field={description} />
      </div>
    </div>
  );
}
