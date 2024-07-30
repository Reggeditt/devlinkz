'use client'

import { Input, Select } from 'antd'
import { TbMenu } from 'react-icons/tb'
import { BiLink } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';
import { useStore } from '@/app/context/StoreContext';

const LinksList = () => {
  const { linkData } = useStore()
  const [formData, setFormData] = useState({})


  return (
    <div className='links-list w-full h-full overflow-y-scroll'>
      {linkData.map((link) => {
        return (
          <div key={link.id}>
            <div className='linkform-header flex justify-between items-center'>
              <span className='flex items-center text-sm'><TbMenu />link#{link.id}</span>
              <span className='text-xs text-gray-400' id={link.id}>Remove</span>
            </div>
            <div className='linkform text-xs mt-1'>
              Platform
              <Select className='w-full' options={
                [
                  { label: 'GitHub', value: 'github', icon: <FaGithub /> },
                  { label: 'LinkedIn', value: 'linkedin', icon: <FaLinkedin /> },
                  { label: 'Facebook', value: 'facebook', icon: <FaFacebook /> },
                  { label: 'YouTube', value: 'youtube', icon: <FaYoutube /> }
                ]
              }
                defaultValue={link.platform}
                onChange={(value) => setFormData({ ...formData, platform: value })}
              />
              Link
              <Input
                placeholder={link?.link ? link.link : 'e.g. https://www.platform.com/johnDoe'}
                prefix={<BiLink />}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LinksList
