"use client";

import React, { ReactNode } from 'react';
import {Box, Button, FormControl, FormLabel, TextField} from "@mui/material";
import {signIn} from "next-auth/react";

interface Props {}

export function LoginForm (props: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
    })
  };

  return (
    <Box alignItems={"center"}>
      <form onSubmit={e => handleSubmit(e)}>
        <FormControl>
          <FormLabel htmlFor={"email"}>Enter Email</FormLabel>
          <TextField id={"email"} name={"email"} type={"email"} />

          <FormLabel htmlFor={"password"}>Enter password</FormLabel>
          <TextField id={"password"} name={"password"} type={"password"} />

          <Button type="submit">Submit</Button>
        </FormControl>
      </form>
    </Box>
  );
};
