'use client'

import { useEffect, useState } from "react";
import { useStore } from "../context/StoreContext";
import NewUserPage from "./NewUserPage";
import LinksList from "./links/LinksList";
import { Button, Divider } from "antd";

const HomePage = () => {
  const { linkData } = useStore();
  const [ isDisabled, setisDisabled ] = useState(false);
  useEffect(() => {
    linkData=== null ? setisDisabled(true) : setisDisabled(false);
  }, [linkData]);
  return (
    <>
      <div className="w-full h-[300px] overflow-">
        {linkData ? <LinksList /> : <NewUserPage />}
      </div>
      <Divider style={{ margin: '0' }} />
      <div className="flex justify-end pr-3">
        <Button className='bg-blue-500 text-white px-4 py-2 rounded-lg' disabled={isDisabled}>Save</Button>
      </div>
    </>
  );
};

export default HomePage;
