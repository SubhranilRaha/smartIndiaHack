import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home/Home';
import Login from './Components/LogIn/Login';
import Student_D from './Components/Student_D/Student_D';
import Teacher_D from './Components/Teacher_D/Teacher_D';
// import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {THome,TPath,TContact,TAddUser} from './Components/Teacher_D/Teacher_D'

const root = ReactDOM.createRoot(document.getElementById('root'));

const wrapper = (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
      		<Route path="/Student_D" element={<Student_D />} />
      		<Route path="/Teacher_D" element={<Teacher_D />} />
			<Route path="/Thome" element={<THome />} />
			<Route path="/Tpath" element={<TPath />} />
			<Route path="/Tcontact" element={<TContact />} />
			<Route path="/Tadduser" element={<TAddUser />} />
		</Routes>
	</BrowserRouter>
);

root.render(wrapper);

/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */



