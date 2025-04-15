import { useState } from 'react';

export const useFormVisibility = (initialState = false) => {
  const [showForm, setShowForm] = useState(initialState);
  
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const toggleForm = () => setShowForm(prev => !prev);
  
  return { showForm, openForm, closeForm, toggleForm };
};