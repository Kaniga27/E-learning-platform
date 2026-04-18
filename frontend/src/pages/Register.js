import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      setMessage('Registered successfully! Redirecting...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setMessage('Registration failed. Try again!');
    }
  };

  return (
    <div style={{ maxWidth:'400px', margin:'80px auto', padding:'30px', borderRadius:'12px', boxShadow:'0 0 16px #ccc', fontFamily:'Segoe UI, sans-serif', textAlign:'center' }}>
      <h2>Create Account 🎓</h2>
      <p style={{ color:'#888' }}>Join EduLearn for free</p>
      <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)}
        style={{ display:'block', width:'100%', padding:'10px', margin:'10px 0', borderRadius:'8px', border:'1px solid #ddd', fontSize:'15px' }} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
        style={{ display:'block', width:'100%', padding:'10px', margin:'10px 0', borderRadius:'8px', border:'1px solid #ddd', fontSize:'15px' }} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}
        style={{ display:'block', width:'100%', padding:'10px', margin:'10px 0', borderRadius:'8px', border:'1px solid #ddd', fontSize:'15px' }} />
      {message && <p style={{ color:'green' }}>{message}</p>}
      <button onClick={handleRegister}
        style={{ width:'100%', padding:'12px', background:'#4CAF50', color:'white', border:'none', borderRadius:'8px', fontSize:'16px', cursor:'pointer' }}>
        Sign Up
      </button>
      <p style={{ marginTop:'16px' }}>Already have an account? <span onClick={() => navigate('/login')} style={{ color:'#4CAF50', cursor:'pointer' }}>Login</span></p>
    </div>
  );
}

export default Register;