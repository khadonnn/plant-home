import React from 'react';

const AdminLayout = ({ header, sidebar, content, footer, children }) => {
  return (
    <div className="admin-layout relative h-screen overflow-hidden bg-cus-dark pb-2 pl-6 pr-2 pt-2 text-base font-medium">
      <div className="flex h-full">
        <div>
          <div className="p-4 text-white">{header}</div>
          <div className="min-w-[256px] overflow-hidden">
            <hr className="-ml-6 border-t-[1px] border-gray-800 pt-3" />
            {sidebar}
          </div>
          <div className="absolute bottom-10 min-w-[256px] text-white dark:text-zinc-950">
            <hr className="-ml-6 border-t-[1px] border-gray-800 pt-3" />
            {footer}
          </div>
        </div>
        <div className="grow p-6 text-white md:rounded-lg md:bg-cus-brown lg:rounded-lg lg:bg-cus-brown lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-800 dark:lg:bg-zinc-800 dark:lg:ring-white/10">
          {content}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
