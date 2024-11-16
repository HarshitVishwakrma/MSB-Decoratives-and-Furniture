import React from 'react';
import Navbar from '../components/Navbar';
import sideimage from '../assets/sideimage1.jpg'


const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className={`bg-[url('/backgroundimage1.jpg')] bg-cover bg-center inset-0  bg-no-repeat h-[91vh] w-full md:flex md:justify-center`}>
        <div className="absolute inset-0 bg-black bg-opacity-20 h-full"></div>

        <div className='w-full z-50'>
          <div className='text-slate-300'>
            <h1 className='font-extrabold text-center text-[3rem]'>MSB DECORATIVES AND FURNITURE</h1>
            <h2 className='font-bold text-center'>To make life luxury for you.</h2>
          </div>
          <div className='flex items-center justify-center relative top-[35%]'>
            <button className='text-3xl bg-gray-800 p-2 text-white rounded-md hover:bg-gray-950 hover:text-2xl ease-in transition-all'>
              Book a call!
            </button>
          </div>
        </div>
      </section>

      <section className=' bg-gray-800 h-[500px]'>
        <h1 className='text-center text-[2rem] font-bold text-slate-50'>Deal with us! Make your business Luxury.</h1>
        <div className='flex justify-between mt-4'>
          <div className='flex-1 p-4'>
            <p>
              MSB Decoratives and Furniture is Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sit sapiente dolorum temporibus aliquid labore, architecto velit cum ut vero blanditiis eaque iusto et aliquam id consectetur numquam! Eos nesciunt error iste deleniti eaque magni nam excepturi autem harum, sit illo aliquam consequuntur veniam asperiores quia voluptate ab repellat assumenda reiciendis adipisci ratione nisi sequi veritatis culpa? Atque autem nihil voluptate accusantium tenetur architecto provident, unde enim, recusandae velit veritatis.
            </p>
          </div>
          <div className='flex-1 p-4'>
            <img src={sideimage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;