"use server"

import axios from "axios";
import {ReviewCreation, ReviewDetails} from "@/features/reviews";
import {BACKEND_API_URL} from "@/features/vendor";

export async function createReview(vendorId: number, review: ReviewCreation) {
  try {

    const { data, status } = await axios.post<ReviewDetails>(
      `${BACKEND_API_URL}/api/vendors/${vendorId}/reviews`,
      review
    );

    console.log("⚡️Created review", status)
    return data;
  } catch (error: any) {
    return error.message;
  }
};
