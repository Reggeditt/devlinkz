'use client'

import { Button, Divider, Input, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import { useState } from 'react';
import ProfileBanner from '../ProfileBanner';

const ProfileDetailsPage = () => {
  const [fileList, setFileList] = useState([
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <><div className="flex flex-col items-start gap-3">
      <ProfileBanner />
      <div className="page-content-container w-full h-full p-5">
        <div className='flex gap-5 items-center'>
          <ImgCrop rotationSlider>
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && '+ Upload'}
            </Upload>
          </ImgCrop>
          <Divider type='vertical' />
          <p className='text-xs'>Image must be below 1024x1024px. <br /> Use PNG or JPG format</p>
        </div>
        <Divider />
        <div className='flex flex-col gap-1'>
          <label className='flex justify-between'>
            First Name
            <Input className='w-[60%]' placeholder='e.g. John' />
          </label>
          <label className='flex justify-between'>
            Last Name
            <Input className='w-[60%]' placeholder='e.g. Appleseed' />
          </label>
          <label className='flex justify-between'>
            Email
            <Input className='w-[60%]' placeholder='e.g. email@example.com' />
          </label>
        </div>
      </div>
    </div>
      <div className="bg-white flex flex-col gap-4 items-end pr-3">
            <Divider style={{ marginBlock: '5px' }} />
            <Button className='bg-blue-500 text-white px-4 py-2 rounded-lg' disabled={true}>Save</Button>
          </div>
    </>
  )
}

export default ProfileDetailsPage
