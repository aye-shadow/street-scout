"use client";

import React, {useState} from 'react';
import {useModalStore} from "@/features/modal";
import {ReviewCreation, useCreateReview} from "@/features/reviews";
import {Box, Button, FormControl, FormLabel, Rating, TextField} from "@mui/material";

interface Props {
  vendorId: number;
}

export function CreateReviewForm ({ vendorId }: Props) {
  const [rating, setRating] = useState(5);
  const hideModal = useModalStore(state => state.hide)

  const {
    mutate: createReview
  } = useCreateReview(hideModal);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const review: ReviewCreation = {
      text:formData.get("text") as string,
      rating,
    }

    console.log("⚡️ Creating review", review)
    createReview({
      vendorId,
      review
    })
  };
  return (
    <Box>
      <form onSubmit={e => handleSubmit(e)}>
        <FormControl>

          <FormLabel htmlFor={"rating"}>Enter Rating</FormLabel>
          <Rating
            name={"rating"}
            value={rating}
            max={5}
            onChange={(event, value) => setRating(value)}
          />


          <FormLabel htmlFor={"text"}>Enter review</FormLabel>
          <TextField name={"text"} multiline />


          <Button type="submit">Submit</Button>
        </FormControl>
      </form>
    </Box>
  );
};
