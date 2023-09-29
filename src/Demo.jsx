import React from 'react';
import img from './assets/Screenshot (66).png'
import { Link } from 'react-router-dom';
import { FaFileVideo } from 'react-icons/fa';
// style={{backgroundImage:`url(${img})`}}
const Demo = () => {
    return (
        <div className='lg:flex'>
            <div className="lg:w-1/5"></div>
            <div className="lg:w-3/5 cover">
<div className="text-center">
    <h1 className='text-pink-800 text-3xl '>Out Fashion Gallary Site</h1>
    <p className='text-center'>_________________________________________</p>
    <img src={img} alt="" />
  <div className="text-center ">
  <Link to='https://6516d2ad8469b4035fa25e54--funny-churros-16a607.netlify.app/'>  <button className='btn bg-pink-800 mt-3 text-white rounded-full'>See Live Preview<FaFileVideo></FaFileVideo></button></Link>
  </div>
</div>
            </div>
            <div className="lg:w-1/5"></div>
        </div>
    );
};

export default Demo;