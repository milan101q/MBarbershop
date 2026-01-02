
export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  duration: string;
  category: 'Barber' | 'Salon' | 'Treatment';
}

/**
 * ChatMessage defines the structure for interaction between the user and the AI consultant.
 */
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
