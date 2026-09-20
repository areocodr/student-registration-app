import {createContext, useContext, useState} from 'react';
import mockStudents from '../data/mockStudents';

const StudentsContext = createContext(null);

export function StudentsProvider({children}) {
  const [students, setStudents] = useState(mockStudents);

  function addStudent(newStudent) {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  }

  const value = { students, addStudent };
  return (
    <StudentsContext.Provider value={value}>
      {children}
    </StudentsContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentsContext);
  if (!context) {
    throw new Error('useStudents must be used within a StudentsProvider');
  }
  return context;
}
    