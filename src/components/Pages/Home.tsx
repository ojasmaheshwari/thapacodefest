import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Review from '../MiniComponents/Review'
import LinkButton from '../MiniComponents/LinkButton'
import Navbar, { navigation } from '../Navbar'


export default function Home() {
  navigation.forEach(element => {
    element.current = false
  });
  navigation[0].current = true
  return (
    <>
      <Navbar />
      <div className="relative bg-white overflow-hidden z-0">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>


              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Log in
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">The best platform for</span>{' '}
                  <span className="block text-indigo-600 xl:inline">Online Education</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Edulantis is the best online educational platform for you, your kid and anybody who
                  is willing to learn!
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Book Free Class
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.theconversation.com/files/339942/original/file-20200604-67393-1dej576.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
            alt=""
          />
        </div>
      </div>
      <div className='mt-8 mb-36'>
        <div>
          <h1 className='text-4xl text-center text-black font-extrabold
        sm:text-5xl'>
            What is <span className='text-indigo-600'>Edu</span>lantis?
          </h1>
          <h2 className='text-xl text-center text-gray-600 font-bold sm:text-md'>
            And why should you use it?
          </h2>
        </div>
        <div className='mt-4'>
          <div>
            <h1 className='mt-2 text-gray-700 text-xl sm:text-2xl italic text-center
          font-bold'>
              " Edulantis is <span>an emotion</span> ... "
            </h1>
          </div>
          <div className='mt-2 sm:mt-7 flex flex-col sm:flex-row items-center justify-center'>
            <div className='h-52 w-full flex items-center justify-center
            sm:border-r-[1px] sm:border-r-gray-500'>
              <ul className='text-md sm:text-lg pl-1'>
                <li className='flex items-center relative'><StarIcon className='w-6 h-6 inline-block
                text-indigo-600 absolute'/><span className='ml-[25px] w-full'>Edulantis is an online learning platform</span></li>
                <li className='flex items-center relative'><StarIcon className='w-6 h-6 inline-block
                text-indigo-600 absolute'/><span className='ml-[25px] w-full'>It is used by over 2 Million students worldwide</span></li>
                <li className='flex items-center relative'><StarIcon className='w-6 h-6 inline-block
                text-indigo-600 absolute'/><span className='ml-[25px] w-full'>It contains both free and premium classes</span></li>
                <li className='flex items-center relative'><StarIcon className='w-6 h-6 inline-block
                text-indigo-600 absolute'/><span className='ml-[25px] w-full'>It has premium live F2F sessions and free recorded lectures</span></li>
                <li className='flex items-center relative'><StarIcon className='w-6 h-6 inline-block
                text-indigo-600 absolute'/><span className='ml-[25px] w-full'>It is the trustworthy brand for both enthusiastic students and teachers</span></li>
              </ul>
            </div>
            <div className='relative w-full grid place-items-center'>
              <div className='w-[96%]
              flex flex-col justify-evenly items-center relative gap-3
              p-1'>
                <Review image="https://randomuser.me/api/portraits/women/85.jpg"
                  message="My son Lee loves his maths classes. He has been performing
                significantly well from the time he was enrolled in Edulantis."
                  author="Jian Hao" country="Japan" />
                <Review image="https://randomuser.me/api/portraits/men/20.jpg"
                  message="I have learnt Machine Learning from free recorded lectures on Edulantis.
                I am currently a ML Engineer at Facebook. All thanks to Edulantis."
                  author="Nick White" country="Switzerland" />
                <Review image="https://randomuser.me/api/portraits/men/35.jpg"
                  message="I am honestly surprised by the quality of content available on
                Edulantis. I would recommend this to everyone."
                  author="Mark Stevens" country="U.S.A" />
              </div>
            </div>
          </div>

          <div>
            <div className='w-full mt-10 grid place-items-center'>
              <img src="https://assets.entrepreneur.com/content/3x2/2000/20190326201928-GettyImages-633710081-edit.jpeg?auto=webp&quality=95&crop=16:9&width=675" alt=""
                className='bg-cover bg-center w-[60%] rounded-md' />
            </div>
            <div className='mt-5'>
              <h1 className='text-2xl sm:text-4xl text-center
              text-slate-800'>
                Go where you want to, Check what you want to!
              </h1>
              <div className='mt-7 flex flex-col sm:flex-row justify-evenly gap-2
              items-center pb-32'>
                <LinkButton content="Features" url="/features#" />
                <LinkButton content="Courses" url="/courses#" />
                <LinkButton content="FAQ'S" url="/faq#" />
                <LinkButton content="Sign Up" url="/signup#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
