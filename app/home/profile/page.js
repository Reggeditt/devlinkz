'use client'

import { Button, Divider, Form, Input, message, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import { useState } from 'react';
import ProfileBanner from '../ProfileBanner';
import { useStore } from '@/app/context/StoreContext';
import { doc, setDoc } from 'firebase/firestore';
import { auth, profilesCollection } from '@/utilities/firebase/firebaseConfig';

const ProfileDetailsPage = () => {
  const [form] = Form.useForm();
  const { linkData } = useStore();
  const [fileList, setFileList] = useState([]);

  const handleSubmit = (values) => {
    console.log(values)
    const docRef = doc(profilesCollection, auth.currentUser.uid)
    setDoc(docRef, {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      profileImage: fileList
    }).then(()=> message.success('profile updated successfully'))
  }

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
    <>
      <div className="flex flex-col items-start gap-3">
        <h1 className='text-xl font-bold'>Profile Details</h1>
        <p className='text-gray-500 text-sm'>Add your details to create a personal touch to your profile</p>
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
                {fileList.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>
            <Divider type='vertical' />
            <p className='text-xs'>Image must be below 1024x1024px. <br /> Use PNG or JPG format</p>
          </div>
          <Divider />
          <Form className='flex flex-col gap-1'
            form={form}
            onFinish={handleSubmit}
          >
            <Form.Item label='First Name' name={'firstName'}>
              <Input className='w-[60%]' placeholder='e.g. John' />
            </Form.Item>
            <Form.Item label='Last Name' name={'lastName'} className='flex justify-between'>
              <Input placeholder='e.g. Appleseed' />
            </Form.Item>
            <Form.Item label='Email' name={'email'} className='flex justify-between'>
              <Input type='email' placeholder='e.g. email@example.com' />
            </Form.Item>
            <div className="bg-white flex flex-col gap-4 items-end pr-3">
              <Divider style={{ marginBlock: '5px' }} />
              <Form.Item>
                <Button htmlType='submit' type='text' className='bg-blue-500 text-white px-4 py-2 rounded-lg' disabled={!linkData}>Save</Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default ProfileDetailsPage
