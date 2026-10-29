
import React from 'react'

const Student = ({ data }) => {
  return (
    <>
      <div className='bg-blue-200 p-10 flex flex-wrap justify-center items-center gap-6'>

        {data.map((u, i) => (
          <div
            key={i}
            className='bg-white p-6 text-2xl rounded-xl shadow-lg w-64'
          >
            <h3 className='bg-emerald-500 text-white p-2 rounded'>
              {u.Name}
            </h3>

            <h3 className='mt-4'>{u.Subject}</h3>

            <h3 className='mt-4'>{u.Course}</h3>

            <button className='bg-blue-600 text-white text-lg px-4 py-2 mt-4 rounded-lg'>
              Click me
            </button>
          </div>
        ))}

      </div>
    </>
  )
}

export default Student

