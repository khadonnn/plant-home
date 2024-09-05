import React from 'react';
import PromotionItem from './PromotionItem';
import { Pagination } from '@mui/material';

const PromotionList = () => {
  return (
    <>
      <ul className="mt-4">
        {Array(4)
          .fill('mock data')
          .map((_, i) => (
            <PromotionItem key={i} />
          ))}
      </ul>
      <div className="mt-4 flex w-full items-center justify-center">
        <Pagination count={3} size="small" />
      </div>
    </>
  );
};

export default PromotionList;
