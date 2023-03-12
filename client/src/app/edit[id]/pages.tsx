import Link from 'next/link';
import React from 'react';
import { Edit } from '../components/Edit/Edit';

const EditPage = ({params}: {params:any}) => {
  const { id } = params;
  return (
    <div>
      <Link href={`/edit/${id}`} >
        <Edit id={id} />
      </Link>
    </div>
  );
}

export default EditPage;