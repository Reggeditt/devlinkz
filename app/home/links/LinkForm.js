import { Form, Input, Select } from 'antd'
import { TbMenu } from 'react-icons/tb'
import { BiLink } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const LinkForm = () => {
  return (
    <div>
      <div className='linkform-header flex justify-between items-center'>
        <span className='flex items-center text-sm'><TbMenu />link#1</span>
        <span className='text-xs text-gray-400'>Remove</span>
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
        }/>
        Link
        <Input
          placeholder="https://www.github.com/johnDoe"
          prefix={<BiLink />}
        />
      </div>
    </div>
  )
}

export default LinkForm