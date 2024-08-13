import React from 'react';
import {Container, Paper} from "@mui/material";
import {ShowModalButton} from "@/features/modal";
import {Add} from "@mui/icons-material";
import {AddMenuItemForm, DeactivateVendorButton, DataTable, MenuData, MenuPagination} from "@/features/vendor";
import {CreateReviewForm} from "@/features/reviews";
import {menuItemKeys} from "@/features/lib";

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

      <Paper sx={{width: '100%', mb: 2}}>
        <DataTable header={"Menu"} columns={menuItemKeys}>
          <MenuData vendorId={id} />
        </DataTable>
        <MenuPagination vendorId={id} />
      </Paper>
    </Container>
    )
};

export default VendorIdPage;
