import React from 'react'
import jupiter from './assets/jupiter.jpg'

const App = () => {
  return (
    <div className="flex bg-gray-200 items-start justify-center h-screen h-full w-full">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full border border-blue-500 mt-10 md:mt-20">
        
        <img 
          src={jupiter} 
          alt="Profile Picture" 
          className="mx-auto mb-4 rounded-full h-40 w-40" 
        />

        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-4">
          Fakhir Shaheen
        </h1>

        <p className="text-2xl text-gray-500 mb-4 text-center">
          Welcome to my website.
        </p>

        <p className="mb-2">
          I teach computer science. I try to find details and meaning in seemingly insignificant things.<br/>
        </p>

        <p className="mb-2">
          Visit my blog: <a href="/blog" className="text-blue-500 hover:text-blue-600">Theoretical Tinkerings</a>
        </p>

      </div>
    </div>

  )
}

export default App