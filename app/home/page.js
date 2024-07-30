'use client'

import { useEffect } from "react";
import { useStore } from "../context/StoreContext";
import NewUserPage from "./NewUserPage";
import LinksList from "./links/LinksList";

const HomePage = () => {
  const { linkData } = useStore();

  useEffect(() => {
    console.log(linkData);
  }, [linkData]);
  return (
    <div className="w-full h-full">
      {linkData? <LinksList />: <NewUserPage />}
    </div>
  );
};

export default HomePage;
