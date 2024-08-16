"use client";

import React from 'react';
import {Box, Button, FormControl, FormLabel, TextField} from "@mui/material";
import {MenuItemRequest, useAddMenuItem, VendorProfile} from "@/features/vendor";
import {useModalStore} from "@/features/modal";

interface Props {
  vendorId: number;
}

export function AddMenuItemForm ({ vendorId }: Props) {
  const hideModal = useModalStore(state => state.hide);
  const {
    mutate: createItem
  } = useAddMenuItem(hideModal);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const payload: MenuItemRequest = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
    }

    console.log("⚡️ Creating menu item", payload)
    createItem({
      vendorId,
      payload
    })

  };

  return (
    <Box component={"form"} onSubmit={e => handleSubmit(e)}>
      <FormControl>
        <FormLabel htmlFor={"name"}>Enter Name</FormLabel>
        <TextField name={"name"} value='' />

        <FormLabel htmlFor={"description"}>Enter description</FormLabel>
        <TextField name={"description"} value='' />

        <FormLabel htmlFor={"price"}>Enter Price</FormLabel>
        <TextField name={"price"} type={"text"} value='' />

        <Button type="submit">Submit</Button>
      </FormControl>
    </Box>
  );
};
