import React from 'react';

const AdminLayout = ({ header, sidebar, content, footer, children }) => {
  return (
    <div className="admin-layout relative h-screen overflow-hidden bg-cus-white pb-2 pl-6 pr-2 pt-2 text-base font-medium">
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
        <div className="grow bg-white p-6 md:rounded-lg">{content}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
