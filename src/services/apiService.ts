// services/apiService.ts

const BASE_URL = 'http://localhost:3000'; // Reemplaza con la URL de tu API

export const apiService = {
  getBooks: async () => {
    const response = await fetch(`${BASE_URL}/books`);
    return response.json();
  },

  getBook: async (id: string) => {
    const response = await fetch(`${BASE_URL}/books/${id}`);
    return response.json();
  },

  createBook: async (bookData: any) => {
    const response = await fetch(`${BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });
    return response.json();
  },

  updateBook: async (id: string, bookData: any) => {
    const response = await fetch(`${BASE_URL}/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });
    return response.json();
  },

  deleteBook: async (id: string) => {
    const response = await fetch(`${BASE_URL}/books/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
};
