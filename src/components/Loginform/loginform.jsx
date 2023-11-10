import React,  { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../redux/slice';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
  const [formData, setFormData] = useState({ username: '', password: '', role: '' });
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.role === 'admin' && formData.username === 'admin' && formData.password === 'admin') {
      dispatch(setUserDetails(formData));
      navigate('/admin');
    } else if (formData.role === 'sub-admin' && formData.username === 'subadmin' && formData.password === 'subadmin') {
      dispatch(setUserDetails(formData));
      navigate('/sub-admin');
    } else if (formData.role === 'user' && formData.username === 'user' && formData.password === 'user') {
      dispatch(setUserDetails(formData));
      navigate('/user');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  }

  return (
    <div className='container'>
      <h4 className='py-3 text-center'>Loginform</h4>

      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
          <div className="col-sm-10">
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} className="form-control" id="username" placeholder="Username" required/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
          <div className="col-sm-10">
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="form-control" id="password" placeholder="Password" required/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="exampleFormControlSelect1" className="col-sm-2 col-form-label">Role:</label>
          <div className="col-sm-10">
            <select name='role' value={formData.role}  onChange={handleInputChange} className="form-control" id="exampleFormControlSelect1" required>
              <option value="admin">Admin</option>
              <option value="sub-admin">Sub-admin</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>

        <div className='text-center'>
          <button type="submit" className="btn btn-dark px-5">Submit</button>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  )
}

export default Loginform