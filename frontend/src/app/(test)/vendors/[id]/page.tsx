import React from 'react';
import {VendorIdClient} from "@/features/vendor";

interface Props {
  params: { id: number };
}

const VendorIdPage = ({ params }: Props) => {
  return <VendorIdClient id={params.id}/>;
};

export default VendorIdPage;
