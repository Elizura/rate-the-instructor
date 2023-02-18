import { Document } from 'mongoose';

export interface IInstructor extends Document {
  firstName: string;
  lastName: string;
  courses: string[];
  totalRating: Number;
  overallRating: Number;
  difficultyRating: Number;
  ratings: string[];
  department: string;
  ratingDistribution: object;
  tagCounter: string;
}
