import React from 'react'

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">
          Fakhir Shaheen
        </h1>

        <p className="text-2xl text-gray-500 mb-4">
          Welcome to my website.
        </p>

        <p className="mb-2">
          I am a computer science professor. <br/>These days I'm experimenting with app development. <br/> Links to a few of my projects:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <a href="https://google.com" className="text-blue-500 hover:text-blue-600">
              Project 1
            </a>
          </li>
          <li>
            <a href="https://google.com" className="text-blue-500 hover:text-blue-600">
              Project 2
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App