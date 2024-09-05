import React from 'react';

const Title = ({ text }) => {
  return (
    <h1 class="mb-8 text-2xl/8 font-semibold text-zinc-950 dark:text-white sm:text-xl/8">
      {text}
    </h1>
  );
};

export default Title;
