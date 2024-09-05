import { AlignLeft, ArrowLeft, ArrowRightCircle, Eye } from 'lucide-react';
import React from 'react';

const PromotionItem = () => {
  return (
    <li>
      <hr
        role="presentation"
        className="w-full border-t border-zinc-950/10 dark:border-white/10"
      />
      <div className="flex items-center justify-between">
        <div className="flex gap-6 py-6">
          <div className="w-32 shrink-0">
            <a aria-hidden="true" data-headlessui-state href="/events/1000">
              <img
                className="aspect-[3/3] rounded-lg shadow"
                src="https://assets.grab.com/wp-content/uploads/sites/9/2020/04/07173445/MEX-RecoPromo_Icon-01.png"
              />
            </a>
          </div>
          <div className="space-y-1.5">
            <div className="text-base/6 font-semibold">
              <a data-headlessui-state href="/events/1000">
                Bear Hug: Live in Concert
              </a>
            </div>
            <div className="text-xs/6 text-zinc-500">
              May 20, 2024 at 10 PM <span aria-hidden="true">·</span> Harmony
              Theater, Winnipeg, MB
            </div>
            <div className="text-xs/6 text-zinc-600">350/500 tickets sold</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-x-1.5 rounded-md bg-lime-400/20 px-1.5 py-0.5 text-sm/5 font-medium text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15 max-sm:hidden sm:text-xs/5 forced-colors:outline">
            On Sale
          </span>
        </div>
      </div>
    </li>
  );
};

export default PromotionItem;
