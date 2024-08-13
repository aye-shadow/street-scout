import React from 'react';
import {Container} from "@mui/material";
import {ShowModalButton} from "@/features/modal";
import {Add} from "@mui/icons-material";
import {AddMenuItemForm, DeactivateVendorButton, VendorMenu} from "@/features/vendor";
import {CreateReviewForm} from "@/features/reviews";

interface Props {
  params: { id: number };
}

const VendorIdPage = ({ params }: Props) => {
  const id = params.id;


  return(
    <Container>

      <ShowModalButton
        startIcon={<Add />}
        text={"Add to menu"}>
        <AddMenuItemForm vendorId={id} />
      </ShowModalButton>

      <ShowModalButton
        startIcon={<Add />}
        text={"Create Review"}>
        <CreateReviewForm vendorId={id} />
      </ShowModalButton>

      <DeactivateVendorButton vendorId={id} />

      <VendorMenu vendorId={id} />

    </Container>
    )
};

export default VendorIdPage;
