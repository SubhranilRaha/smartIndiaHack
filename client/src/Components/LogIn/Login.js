import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Login() {
  let [categories] = useState({
    Student: [
      {
        id: 1,
        title: 'Student',
      },
    ],
    Teacher: [
      {
        id: 1,
        title: 'Teacher',
      },
    ],
    School: [
      {
        id: 1,
        title: 'School',
      },
    ],
  })

  return (
   
         <div className="min-w- sm:px-0 h-screen bg-gradient-to-r from-orange-500 to-yellow-500 pt-10 flex flex-col lg:pt-20 lg:pl-10  items-center">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-orange-900/20 p-1 mb-5 mx-2 w-96">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-orange-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-96">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
            >
              <div>
                {posts.map((post) => (
                  <main class="bg-white max-w-lg p-8 md:p-12 mx-5 rounded-lg shadow-2xl">
                  <section>
                          <h3 class="font-bold text-2xl">WELCOME</h3>
                          <p class="text-gray-600 pt-2">Log in to your <span className="font-bold">{post.title}</span> account.</p>
                      </section>
              
                      <section class="mt-10">
                          <form class="flex flex-col" method="POST" action="#">
                              <div class="mb-6 pt-3 rounded ">
                                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Phone</label>
                                  <input type="tel" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-1 pt-2"/>
                              </div>
                              <div class="mb-6 pt-3 rounded">
                                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                                  <input type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-orange-600 transition duration-500 px-3 pb-1 pt-2"/>
                              </div>
                              <div class="flex justify-end">
                                  <a href="#" class="text-sm text-orange-600 hover:text-orange-700 hover:underline mb-6">Forgot your password?</a>
                              </div>
                              <button class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="button"><Link to={'/'+post.title+'_D'}>Log In</Link></button>
                          </form>
                      </section>
                  </main>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <div class="max-w-lg text-center mt-6 mb-6">
        <p class="text-white">Don't have an account? <a href="#" class="font-bold hover:underline">Sign up</a>.</p>
    </div>
    </div>
    
   
  )
}
