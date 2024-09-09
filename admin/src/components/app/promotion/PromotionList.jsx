import React, { useRef } from 'react';
import PromotionItem from './PromotionItem';
import { Pagination } from '@mui/material';

const PromotionList = () => {
  return (
    <>
      <ul className="mt-4 grid gap-8 overflow-auto lg:grid-cols-2 2xl:grid-cols-3">
        {Array(10)
          .fill('Promotion')
          .map((name, i) => (
            <PromotionItem
              key={i}
              name={`${name} ${++i}`}
              href={`/events/${i}`}
              imgUrl="/img/user1.jpg"
            />
          ))}
      </ul>
      <div className="mt-4 flex w-full items-center justify-center">
        <Pagination count={3} size="small" />
      </div>
    </>
  );
};

export default PromotionList;
