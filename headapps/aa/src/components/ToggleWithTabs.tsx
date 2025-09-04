/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

interface ToggleItem {
  title: string;
  content: React.ReactNode;
}

interface TabsWithTogglesProps {
  tabs: string[];
  toggleData: Record<string, ToggleItem[]>;
}

export default function TabsWithToggles({ tabs, toggleData }: TabsWithTogglesProps) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-white py-[40px]">
      <div className="container">
        {/* Tabs */}
        <div className="flex flex-wrap gap-[24px] mb-[16px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`!text-[#2b2929] py-[8px] !px-[16px] !mr-[24px] rounded-[4px] !text-[32px] !leading-[40px] !font-['AA-Sans',Arial,Helvetica,Verdana,sans-serif] !font-regular ${
                selectedTab === tab
                  ? 'bg-[#f6f6f6] no-underline'
                  : 'underline !underline-offset-[6px] [text-decoration-skip-ink:none]'
              }`}
              onClick={() => {
                setSelectedTab(tab);
                setOpenIndexes([]); // Reset on tab change
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Toggles */}
        <div className="space-y-4">
          {toggleData[selectedTab]?.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div key={index} className="md:!mb-[16px]">
                <button
                  onClick={() => handleToggle(index)}
                  className="rounded-[4px] w-full flex justify-between items-center md:!px-[0] md:!py-[16px] h-[50px] text-left"
                >
                  <span className="!text-[1.8rem] !leading-[24px] font-newtransport !font-semibold leading-[2.2rem] tracking-[0.2px]">
                    {item.title}
                  </span>
                  <img
                    src="/arrow-down.svg"
                    alt="Toggle arrow"
                    className={`transition-transform duration-300 w-[9px] h-[10px] w-[24px] h-[24px] m-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && <div className="toggle-with-tabs">{item.content}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
