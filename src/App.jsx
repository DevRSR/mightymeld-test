import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-full py-24">
        <form className="w-2/3 h-24 mx-auto">
          <div className="text-center text-xl font-semibold p-2">
            Login Page
          </div>
          <div />
        </form>
      </div>
    </>
  );
}

export default App;
