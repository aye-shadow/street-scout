"use server"

import {ReviewDetails, ReviewEdit} from "@/features/reviews";
import axios from "@/features/lib/axios";

export async function editReview(vendorId: number, reviewId: number, payload: ReviewEdit) {
  try {
    const { data , status} = await axios.put<ReviewDetails>(
      `/api/vendors/${vendorId}/reviews/${reviewId}`,
      payload
    );

    console.log("⚡️Updated review", reviewId, status)
    return data;
  } catch (error: any) {
    return error.message;
  }
};
