import React from 'react';
import Title from '../../components/app/Title';
import PromotionList from '../../components/app/promotion/PromotionList';

export default function Promotion() {
  return (
    <section id="promotion">
      <Title text="Promotion" />
      <div className="scrollbar-none h-full w-full overflow-auto md:px-12 lg:px-32">
        <PromotionList />
      </div>
    </section>
  );
}
