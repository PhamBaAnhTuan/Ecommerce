import { StyleSheet, Text, View } from 'react-native'
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

  const updateBooks = async () => {
    try {
      const response = await axios.patch('http://192.168.14.106:8000/books/${id}')
      setBooks(response.data);
      console.log('Updated Data: ', books);
    } catch (error) {
      console.error('Updating books fail', error);
    }
  }
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <DataContext.Provider value={{ books, bookId, setBookId }}>
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