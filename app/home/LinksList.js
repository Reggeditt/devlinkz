'use client'

import { Input, Select } from 'antd'
import { TbMenu } from 'react-icons/tb'
import { BiLink } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useStore } from '@/app/context/StoreContext';

const LinksList = () => {
  const { linkData, updateLinksData } = useStore()
  const [formData, setFormData] = useState([])

  useEffect(()=>{
    console.log(`linkData = `, linkData ,`formData = `,formData)
    setFormData(linkData)
  },[linkData])

  return (
    <div className='links-list w-full h-full overflow-y-scroll'>
      {formData.map((link, index) => {
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
                defaultSelectedValue={link.platform}
                onSelect={(value) => {
                  console.log('onselect fired : value = ', value, ' linkData currently = ', linkData)
                  if (formData?.length === 0) {
                    setFormData([{ id: index + 1, platform: value, link: '' }])
                  } else {
                    if (formData?.find(data => data.id === index + 1)) {
                      const newData = formData?.filter((data) => data.id !== index + 1)
                      newData.push({ id: index + 1, platform: value, link: '' })
                      setFormData(newData)
                      console.log(newData)
                    }
                  }
                }}
              />
              Link
              <Input
                placeholder={link?.link ? link.link : 'e.g. https://www.platform.com/johnDoe'}
                prefix={<BiLink />}
                disabled={formData?.length === 0}
                onChange={(e) => {
                  if (formData?.length === 0) {
                    setFormData([{ id: index + 1, platform: '', link: value }])
                  } else {
                    if (formData?.find(data => data.id === index + 1)) {
                      const contain = formData.find(data => data.id === index + 1)
                      contain.link = e.target.value
                      const newData = formData?.filter((data) => data.id !== index + 1)
                      newData.push(contain)
                      setFormData(newData)
                      updateLinksData(newData)
                      console.log(newData)
                      console.log(linkData)
                    }
                  }
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LinksList
