export interface Rating {
    userId: string;
    instructorId: string;
    courseId: string;
    tags: [string];
    overallRating: number;
    difficultyRating: number;
    review: string;
    questions: [{ question: string; answer: string }];
    reactions: { likes: number; dislikes: number };
  }
  