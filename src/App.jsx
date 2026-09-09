import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import Dashboard from './features/dashboard/Dashboard.jsx'
import StudentRecords from './features/students/StudentRecords.jsx'
import StudentRegistration from './features/students/StudentRegistration.jsx'
import Analytics from './features/analytics/Analytics.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="students" element={<StudentRecords />} />
        <Route path="students/register" element={<StudentRegistration />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

    </Routes>
  )
}

export default App;