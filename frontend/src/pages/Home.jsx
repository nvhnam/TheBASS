import React from "react";
import Main from "../components/Main";

const Home = () => {
  return (
    <div className="w-full h-full min-h-screen bg-slate-100 flex flex-col items-center justify-center mt-[-60px]">
      <Main />
      <div className="w-full h-full min-h-screen max-w-screen-xl flex flex-col items-center px-4">
        <p>Home</p>
      </div>
    </div>
  );
};

export default Home;
