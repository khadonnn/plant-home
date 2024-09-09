import React from 'react';
import Title from '../../components/app/Title';
import PromotionList from '../../components/app/promotion/PromotionList';

export default function Promotion() {
  return (
    <section id="promotion">
      <Title text="Promotion" />
      <div className="h-[80vh] w-full overflow-y-auto scrollbar-none">
        <PromotionList />
      </div>
    </section>
  );
}
