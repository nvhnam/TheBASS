import React from "react";
import Main from "../components/Main";
import Popular from "../components/Popular";
import Welcome from "../components/Welcome";
import HomeProducts from "../components/HomeProducts";

const Home = () => {
  return (
    <div className="w-full h-full min-h-screen bg-stone-100 flex flex-col items-center justify-center mt-[-60px]">
      <Main />
      <div className="w-full h-full min-h-screen max-w-screen-xl flex flex-col items-center px-4">
        <Popular />
        <Welcome />
        <HomeProducts title={"Presets"} />
        <HomeProducts title={"Courses"} />
      </div>
    </div>
  );
};

export default Home;
