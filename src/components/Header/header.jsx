import React from 'react'
import { useSelector } from 'react-redux';

const header = () => {
  const userDetails = useSelector((state) => state.userDetails);

  return (
    <div>
      {userDetails && (
        <header>
          <h1>Welcome, {userDetails.username}!</h1>
          <nav>
            {userDetails.role === 'admin' && <a href="/admin">Admin Dashboard</a>}
            {userDetails.role === 'sub-admin' && <a href="/sub-admin">Sub-Admin Dashboard</a>}
            {userDetails.role === 'user' && <a href="/user">User Dashboard</a>}
            <a href="/login">Logout</a>
          </nav>
        </header>
      )}
    </div>
  )
}

export default header;