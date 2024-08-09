"use client";

import React from 'react';
import {Box, Button, FormControl, FormLabel, TextField} from "@mui/material";
import {MenuItemRequest, useCreateMenuItem, VendorProfile} from "@/features/vendor";
import {useModalStore} from "@/features/modal";

interface Props {
  vendor: VendorProfile;
}

export function AddMenuItemForm ({ vendor }: Props) {
  const hideModal = useModalStore(state => state.hide);
  const menuItemMutation = useCreateMenuItem(hideModal);

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
  );
};
