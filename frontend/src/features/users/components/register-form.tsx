"use client";

import React, {useState} from 'react';
import {useRegisterUser, UserRegistration, UserRole} from "@/features/users";
import {useModalStore} from "@/features/modal";
import {Box, Button, FormControl, FormLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";

interface Props {}

export function RegisterForm (props: Props) {
  const [role, setRole] = useState<UserRole>("VENDOR")

  const hideModal = useModalStore(state => state.hide);
  const userMutation = useRegisterUser(hideModal);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const userInfo: UserRegistration = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      password: formData.get("password") as string,
      role: formData.get("role") as UserRole,
    }

    console.log("⚡️ Adding Vendor", userInfo)
    userMutation.mutate(userInfo)
  };

  const handleRoleChange = (e: SelectChangeEvent<unknown>) => {
    setRole(e.target.value as UserRole);
  };
  return (
    <Box alignItems={"center"}>
      <form onSubmit={e => handleSubmit(e)}>
        <FormControl>
          <FormLabel htmlFor={"name"}>Enter Name</FormLabel>
          <TextField name={"name"} />

          <FormLabel htmlFor={"email"}>Enter Email</FormLabel>
          <TextField id={"email"} name={"email"} type={"email"} />

          <FormLabel htmlFor={"password"}>Enter password</FormLabel>
          <TextField id={"password"} name={"password"} type={"password"} />

          <FormLabel htmlFor={"password-confirm"}>Confirm password</FormLabel>
          <TextField id={"password-confirm"} name={"password-confirm"} type={"password"} />

          <FormLabel htmlFor={"role"}>Select Account type</FormLabel>
          <Select
            labelId="user-role-select-label"
            id="user-role-select"
            name="role"
            value={role}
            label="Select Account Type"
            onChange={handleRoleChange}
          >
            <MenuItem value="CUSTOMER">Customer</MenuItem>
            <MenuItem value="VENDOR">Vendor</MenuItem>
          </Select>

          <Button type="submit">Submit</Button>
        </FormControl>
      </form>
    </Box>
  );
};
