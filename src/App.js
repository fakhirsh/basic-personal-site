import React from 'react'
import jupiter from './assets/jupiter.jpg'

const App = () => {
  return (
    <div className="flex items-center justify-center h-screenh-full w-full pt-10 md:pt-20">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full border border-blue-500">
        
        <img 
          src={jupiter} 
          alt="Profile Picture" 
          className="mx-auto mb-4 rounded-full h-40 w-40" 
        />

        <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
          Fakhir Shaheen
        </h1>

        <p className="text-2xl text-gray-500 mb-4">
          Welcome to my website.
        </p>

        <p className="mb-2">
          I teach computer science.<br/>Links to my projects:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <a href="https://google.com" className="text-blue-500 hover:text-blue-600 block">
              <span className="block">Project 1</span>
            </a>
          </li>
          <li>
            <a href="https://google.com" className="pt-2 text-blue-500 hover:text-blue-600 block">
              <span className="block">Project 2</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default App