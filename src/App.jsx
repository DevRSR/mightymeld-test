import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen py-24 bg-yellow-700">
        <form className="w-2/3 h-auto mx-auto">
          <div className="text-center text-xl font-semibold p-2 text-white ">
            Login Page
          </div>

          <div className="my-4">
            <label className="block text-lg mb-2 text-white font-serif">
              Name
            </label>
            <input
              type="text"
              id="input"
              className="block w-full px-3 py-2 text-slate-900 border border-slate-300 rounded outline-none bg-slate-100 opacity-70"
            />
          </div>
          <div className="my-4">
            <label className="block text-lg mb-2 text-white font-serif">
              Password
            </label>
            <input
              type="password"
              id="input"
              className="block w-full px-3 py-2 text-slate-900 border border-slate-300 rounded outline-none bg-slate-100 opacity-70"
            />
          </div>
          <button
            className="bg-sky-600 transition duration-150 ease-in-out hover:opacity-80 lg:text-xl rounded text-white px-10 py-2 text-sm w-full mt-4 shadow-md"
            onClick={() => alert("hi")}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
