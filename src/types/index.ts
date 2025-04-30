export interface User {
  id: string;
  email: string;
  role: 'student' | 'expert';
  full_name?: string;
  avatar_url?: string;
  expertise?: string;
  bio?: string;
  created_at: string;
}

export interface Class {
  id: string;
  expert_id: string;
  title: string;
  description: string;
  image_url?: string;
  created_at: string;
}

export interface Enrollment {
  id: string;
  class_id: string;
  student_id: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export interface Partner {
  id: string;
  name: string;
  logo_url?: string;
  website?: string;
  description?: string;
}