export interface ReviewCreation {
  rating: number;
  text: string;
}

export interface ReviewDetails {
  id: number;
  reviewerId: number;
  reviewerName: string
  vendorId: number
  vendorName: string;
  rating: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}
