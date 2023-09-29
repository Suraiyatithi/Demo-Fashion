import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-10">
                <div className="">
                    <h1 className='lg:text-5xl text-pink-800 sm:text-xl font-bold lg:mt-36 mb-8'>Let's KnoW About <br /> The Project</h1>
                   <p>______________________________________</p>
                    <p>The Project Is a Business website, where a admin can <br /> Do his work properly can monitor all the things that is  happening with his business all <br /> the profit and losses .He can get the update of all the customer or all the employee</p>

                </div>
                <div className="">
                    <div style={{height:"20rem",width:"25rem"}} className="bg-violet-300 text-center p-12 lg:ml-96 shadow-xl">
                        <h1>Well to Known</h1>
                        <p>Most Important Feature is that this Website will notify the admin with all the recent activity that is happenning with his business.Also He or she can login with it .</p>
                    </div>
                    <div style={{height:"20rem",width:"25rem"}} className="bg-violet-300 text-center p-12 lg:-mt-24  lg:ml-24 shadow-xl">
                        <h1>Gives Best Security</h1>
                        <p>A website buil with high security also Admin can add the product by adding in the api .Here API Is also attached to the website as a local folder so he can add his desire product.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;