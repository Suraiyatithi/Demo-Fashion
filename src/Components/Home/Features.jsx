import React from 'react';
import { FaCss3, FaHtml5, FaIcons, FaJava, FaReact, FaRoute } from 'react-icons/fa';
import { BiLogoJavascript ,BiLogoTailwindCss} from 'react-icons/bi';

const Features = () => {
    return (
        <div className='sm:mt-12 lg:mt-56 md:mt-12 text-center'>
        <div className="text-center mb-10" data-aos="fade-right">
        <h1 className='text-3xl text-pink-800 '>Technologys & Features</h1>
        <p>_________________________________________</p>
       
    
 </div>
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="">
            <div className="card card-compact zoomable-card w-96 bg-base-100"data-aos="fade-right">
<figure> <FaReact className='text-violet-300 text-7xl'></FaReact> </figure>
<div className="card-body">
<h2 className=" text-center   text-lg font-bold">React</h2>
<p>We offer extensive website procedures to outbound & inbound 
    Build with this feature and make the code intesive</p>

</div>
</div>
            </div>
            <div className="">
            <div className="card card-compact zoomable-card w-96 bg-base-100 "data-aos="fade-right">
<figure> <FaCss3 className='text-blue-700 text-7xl'></FaCss3> </figure>
<div className="card-body">
<h2 className=" text-center text-lg font-bold">CSS</h2>
<p>We offer extensive website procedures to outbound & inbound 
    Build with this feature and make the code intesive</p>

</div>
</div>
            </div>
            <div className="">
            <div className="card card-compact zoomable-card w-96 bg-base-100 "data-aos="fade-left">
<figure> <FaIcons className='text-violet-300 text-7xl'></FaIcons> </figure>
<div className="card-body">
<h2 className=" text-center  text-lg font-bold">React Icons</h2>
<p>We offer extensive website procedures to outbound & inbound 
    Build with this feature and make the code intesive.</p>

</div>
</div>
            </div>
            <div className="">
            <div className="card card-compact zoomable-card w-96 bg-base-100 "data-aos="fade-right">
<figure> <BiLogoTailwindCss className='text-blue-700 text-7xl'/> </figure>
<div className="card-body">
<h2 className=" text-center  text-lg font-bold">Tailwind CSS</h2>
<p>We offer extensive website procedures to outbound & inbound 
    Build with this feature and make the code intesive.</p>

</div>
</div>
            </div>
            <div className="">
            <div className="card card-compact zoomable-card w-96 bg-base-100 "data-aos="fade-left">
<figure><FaHtml5 className='text-blue-700 text-7xl'></FaHtml5></figure>
<div className="card-body">
<h2 className=" text-center  text-lg font-bold">HTML5</h2>
<p>We offer extensive website procedures to outbound & inbound 
    Build with this feature and make the code intesive</p>

</div>
</div>
            </div>
            <div className="">
            <div className="card card-compact zoomable-card w-96 bg-base-100 "data-aos="fade-left">
<figure> <BiLogoJavascript className='text-yellow-300 text-7xl'/> </figure>
<div className="card-body">
<h2 className=" text-center  text-lg font-bold">Javascript</h2>
<p>We offer extensive website procedures to outbound & inbound 
    Build with this feature and make the code intesive</p>

</div>
</div>
            </div>
        </div>
    </div>
    );
};

export default Features;