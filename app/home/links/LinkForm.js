import { Form, Input, Select } from 'antd'
import { TbMenu } from 'react-icons/tb'
import { BiLink } from "react-icons/bi";

const LinkForm = () => {
  return (
    <div>
      <div className='linkform-header flex justify-between items-center'>
        <span className='flex items-center'><TbMenu />link#1</span>
        <span>Remove</span>
      </div>
      <div className='linkform'>
        Platform
        <Select className='w-full' />
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