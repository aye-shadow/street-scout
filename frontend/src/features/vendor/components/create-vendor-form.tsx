"use client";

import React from 'react';
import {Box, Button, FormControl, FormLabel, Modal, TextField} from "@mui/material";
import {MenuItemRequest} from "@/features/vendor";

interface Props {}

export function CreateVendorForm (props: Props) {

  // const menuItemMutation = useCreateMenuItem(setOpen);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const payload: MenuItemRequest = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
    }

    console.log("⚡️ Creating Vendor", payload)
    // menuItemMutation.mutate({
    //   vendorId: vendor.id,
    //   payload
    // })
  };

  return (
    <Box alignItems={"center"}>
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
