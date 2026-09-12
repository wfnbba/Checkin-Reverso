import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { Plus, Minus } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-3">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden bg-black transition-colors"
          >
            <button
              onClick={() => toggle(item.id)}
              className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors font-medium text-base md:text-lg select-none ${
                isOpen
                  ? 'bg-[#FF4002] text-black font-semibold'
                  : 'bg-black text-white/90 hover:bg-[#FF4002] hover:text-black'
              }`}
            >
              <span className="pr-4 leading-snug">{item.question}</span>
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                {isOpen ? (
                  <Minus className="w-5 h-5 text-black stroke-[3]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#FF4002] hover:text-black stroke-[2.5]" />
                )}
              </span>
            </button>

            {isOpen && (
              <div className="px-6 py-5 bg-black text-white/80 text-sm md:text-base leading-relaxed border-t border-neutral-800">
                <p className="whitespace-pre-line">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
