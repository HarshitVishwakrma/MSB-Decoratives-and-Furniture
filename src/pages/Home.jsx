import React from 'react';
import Navbar from '../components/Navbar';


const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className={`bg-[url('/backgroundimage1.jpg')] bg-cover bg-center inset-0  bg-no-repeat h-[91vh] w-full md:flex md:justify-center`}>
        <div className="absolute inset-0 bg-black bg-opacity-20 h-full"></div>

        <div className='w-full z-50'>
          <div>
            <h1 className='font-extrabold text-center text-[3rem]'>MSB DECORATIVES AND FURNITURE</h1>
            <h2 className='font-bold text-center'>To make life luxury for you.</h2>
          </div>
          <div className='flex items-center justify-center relative top-[35%]'>
            <button className='text-3xl bg-gray-800 p-2 rounded-md hover:bg-gray-950 hover:text-2xl ease-in transition-all'>
              Click me!
            </button>
          </div>
        </div>
      </section>

      <section className=' bg-gray-800 h-[500px]'>
        <h1 className='text-center text-[2rem] font-bold text-slate-50'>Deal with us! Make your business Luxury.</h1>
      </section>
    </>
  );
};

export default HomePage;