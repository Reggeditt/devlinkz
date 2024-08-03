'use client'

import { useEffect, useState } from "react";
import { useStore } from "../context/StoreContext";
import NewUserPage from "./NewUserPage";
import LinksList from "./LinksList";
import { Button, Divider } from "antd";
import AddLinkBanner from "./AddLinkBanner";

const HomePage = () => {
  const { linkData, postLinksUpdate } = useStore();
  const [isDisabled, setisDisabled] = useState(false);
  useEffect(() => {
    linkData === null ? setisDisabled(true) : setisDisabled(false);
  }, [linkData]);
  return (
    <>
      <div className="flex flex-col items-start gap-3">
        <AddLinkBanner />
        <div className="page-content-container w-full h-full p-5">
          <div className="bg-[#fafafa] rounded-xl w-full h-[300px] overflow-y-scroll p-3">
            {linkData ? <LinksList /> : <NewUserPage />}
          </div>
          <div className="bg-white flex flex-col gap-4 items-end pr-3">
            <Divider style={{ marginBlock: '5px' }} />
            <Button 
              className='bg-blue-500 text-white px-4 py-2 rounded-lg'
              disabled={isDisabled}
              onClick={postLinksUpdate}
              >
                Save
                </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
