"use client";

import React from 'react';
import {useModalStore} from "@/features/modal";
import {Box, Modal} from "@mui/material";


interface Props {}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export function BaseModal (props: Props) {
  const showModal = useModalStore(state => state.showing)
  const content = useModalStore(state => state.content)
  const setShowing = useModalStore(state => state.setShowing)

  return (
    <Modal
      open={showModal}
      onClose={() => setShowing(false)}
      aria-labelledby="menu-modal-title"
      aria-describedby="menu-modal-description"
    >
      <Box sx={style}>{content}</Box>
    </Modal>
  );
};
