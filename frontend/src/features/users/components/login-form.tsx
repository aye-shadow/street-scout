"use client"

import React from 'react';
import {Box, Button, FormControl, FormLabel, TextField} from "@mui/material";
import {useSignIn} from "@/features/users";

interface Props {}

export function LoginForm (props: Props) {
  const { mutate: signIn } = useSignIn();
  return (
    <Box alignItems={"center"}>
      <form action={signIn}>
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
