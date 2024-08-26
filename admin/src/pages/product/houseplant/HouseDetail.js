import React from 'react';
import { useParams } from 'react-router-dom';
export default function HouseDetail() {
  const { id } = useParams();
  return (
    <div>
      HouseDetail
      <p>ID: {id}</p>
    </div>
  );
}
