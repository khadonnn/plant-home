import React from 'react';
import UserTable from '../../components/app/account/UserTable';
import Title from '../../components/app/Title';

export default function Account() {
  return (
    <section id="account">
      <Title text="User Accounts" />
      <UserTable />
    </section>
  );
}
