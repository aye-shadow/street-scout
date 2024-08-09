"use client";

import React from 'react';
import {useModalStore} from "@/features/modal";
import {Box, Modal} from "@mui/material";

interface Props {}

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
      <>{content}</>
    </Modal>
  );
};
