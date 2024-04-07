import React from 'react';

function ThemeMode() {

   const checkedTheme = () => {
      document.body.classList.toggle("dark");
   }

   return (
      <form>
         <input
            type="checkbox"
            className="peer sr-only opacity-0"
            id='toggle'
            onChange={checkedTheme} />
         <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-blue-200 px-0.5 outline-gray-400 transition-colors before:h-5 before:z-10 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-zinc-600 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
            <svg className="absolute right-0.5 w-5 fill-violet-700 block  dark:hidden" fill="currentColor" viewBox="0 0 20 20">
               <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg className="absolute left-0.5 w-5 fill-yellow-500 hidden  dark:block" fill="currentColor" viewBox="0 0 20 20">
               <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
         </label>
      </form>
   );
}

export default ThemeMode;