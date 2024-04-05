import React from 'react';

function Loader() {
   return (
      <div className='h-screen flex items-center justify-center'>
         <div className="inline-block h-10 w-10 mr-3 animate-spin rounded-full border-4 border-solid border-blue-700 dark:border-blue-500 border-e-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
         </div>
         <span className='text-lg font-semibold text-black dark:text-white'>Loading...</span>
      </div>
   );
}

export default Loader;