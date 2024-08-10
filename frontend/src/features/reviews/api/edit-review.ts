"use server"

import axios from "axios";
import {BACKEND_API_URL} from "@/features/vendor";
import {ReviewDetails, ReviewEdit} from "@/features/reviews";

export async function editReview(vendorId: number, reviewId: number, payload: ReviewEdit) {
  try {
    const { data , status} = await axios.put<ReviewDetails>(
      `${BACKEND_API_URL}/api/vendors/${vendorId}/reviews/${reviewId}`,
      payload
    );

    console.log("⚡️Updated review", reviewId, status)
    return data;
  } catch (error: any) {
    return error.message;
  }
};
