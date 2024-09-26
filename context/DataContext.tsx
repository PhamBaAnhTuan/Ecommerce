import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
// Context
import { useAuth } from './AuthContext';

export const DataContext = createContext<any>(null);

export const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // API url
  const { API_URL } = useAuth();
  // Get data
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      const response = await axios.get(`${API_URL}/books/`)
      setBooks(response.data);
      console.log('Get books successfully');
    } catch (error) {
      console.error('Fetching books fail', error);
    }
  }

  // POST
  const initialState = {
    title: '',
    author: '',
    img: null,
    price: null,
    type: '',
    discount: null,
    description: '',
    is_free: false,
  }
  const [data, setData] = useState(initialState)
  // handle change
  const handleChange = (name: any, value: any) => {
    setData({
      ...data,
      [name]: value
    });
  };

  // Add book method
  const addBookMethod = async () => {
    try {
      const response = await axios.post(`${API_URL}/books/`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('Added book: ', response.data.title);
      ToastAndroid.show('Add book successfully!', ToastAndroid.SHORT);
      setData(initialState);
      getBooks();
    } catch (error: any) {
      // console.error('Add books fail', error.response ? error.response.data : error.message);
    }
  }

  const updateBookMethod = async (id: number) => {
    try {
      const response = await axios.patch(`${API_URL}/books/${id}/`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('Updated book: ', response.data.title);
      ToastAndroid.show('Updated book successfully!', ToastAndroid.SHORT);
      setData(initialState);
      getBooks();
    } catch (error: any) {
      if (error.response) { }
      console.error('Update books fail', error.response ? error.response.data : error.message);
    }
  }

  // Remove book method
  const removeBookMethod = async (id: number, title:string) => {
    try {
      await axios.delete(`${API_URL}/books/${id}/`);
      console.log('Removed book: ', title);
      ToastAndroid.show('Delete book successfully!', ToastAndroid.SHORT);
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Delete books fail', error);
    }
  }
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <DataContext.Provider value={{
      books, data, setData, handleChange,
      addBookMethod, updateBookMethod, removeBookMethod
    }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const value = useContext(DataContext);
  if (!value) {
    throw new Error('useData must be used within a DataContextProvider');
  }
  return value;
}