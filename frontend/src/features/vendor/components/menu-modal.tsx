"use client";

import React, {useState} from 'react';
import {Box, Button, FormControl, FormLabel, Modal, TextField} from "@mui/material";
import {MenuItemRequest, useCreateMenuItem, VendorProfile} from "@/features/vendor";

interface Props {
  vendor: VendorProfile;
}

export function MenuModal ({ vendor }: Props) {
  const [open, setOpen] = useState(false);
  const menuItemMutation = useCreateMenuItem(setOpen);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const payload: MenuItemRequest = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
    }

    console.log("⚡️ Creating menu item", payload)
    menuItemMutation.mutate({
      vendorId: vendor.id,
      payload
    })

  };

  return (
    <Box alignItems={"center"}>
      <Button onClick={handleOpen}>Add menu item</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="menu-modal-title"
        aria-describedby="menu-modal-description"
      >
        <Box>
          <form onSubmit={e => handleSubmit(e)}>
            <FormControl>
              <FormLabel htmlFor={"name"}>Enter Name</FormLabel>
              <TextField name={"name"} />

              <FormLabel htmlFor={"description"}>Enter description</FormLabel>
              <TextField name={"description"} />

              <FormLabel htmlFor={"price"}>Enter Price</FormLabel>
              <TextField name={"price"} type={"text"} />

              <Button type="submit">Submit</Button>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};
