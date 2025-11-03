import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("https://my-api-i81b.onrender.com/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const getGreeting = async () => {
    const res = await fetch("https://my-api-i81b.onrender.com//api/greet/React Developer");
    const data = await res.json();
    setGreeting(data.greeting);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">{message}</h1>
      <button
        onClick={getGreeting}
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
      >
        Get Greeting
      </button>
      {greeting && <p className="mt-4 text-xl">{greeting}</p>}
    </div>
  );
}

export default App;

