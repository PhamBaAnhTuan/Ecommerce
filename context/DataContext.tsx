import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
// Context
import { useAuth } from './AuthContext';

export const DataContext = createContext<any>(null);

export const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // API url
  const {API_URL} = useAuth();
  // Get data
  const [bookId, setBookId] = useState('');
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      const response = await axios.get(`${API_URL}/books/`)
      setBooks(response.data);
      // console.log('Data: ', books);
    } catch (error) {
      console.error('Fetching books fail', error);
    }
  }

  // POST
  const initialState = {
    title: '',
    author: '',
    img: '',
    price: 0,
    type: '',
    discount: 0,
    description: '',
  }
  const [data, setData] = useState(initialState)
  // handle change
  const handleChange = (name:any, value:any) => {
    setData({
      ...data,
      [name]: value
    });
  };
  
  const addBookMethod = async () => {
    try {
      const response = await axios.post(`${API_URL}/books/`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('Added book: ', response.data);
      ToastAndroid.show('Add book successfully!', ToastAndroid.SHORT);
      setData(initialState);
    } catch (error:any) {
      let err;
      if (error.response) {}
      // console.error('Add books fail', error.response ? error.response.data : error.message);
    }
  }
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <DataContext.Provider value={{ books, bookId, setBookId, data, setData, handleChange, addBookMethod }}>
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