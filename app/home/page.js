'use client'

import { useEffect, useState } from "react";
import { useStore } from "../context/StoreContext";
import { Button, Divider, Form, Input, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { TbMenu } from 'react-icons/tb'
import { BiLink } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const HomePage = () => {
  const { linkData, postLinksUpdate, updateLinksData } = useStore();
  const [formData, setFormData] = useState([])
  const [isDisabled, setisDisabled] = useState(false);
  const [form] = Form.useForm()

  const handleSubmit = (values) => {
    console.log('handle submit has been called with values = ', values)
  }

  useEffect(() => {
    linkData === null ? setisDisabled(true) : setisDisabled(false);
    setFormData(linkData)
  }, [linkData]);

  return (
    <>
      <Form
        className="h-full flex flex-col justify-evenly"
        form={form}
        onFinish={handleSubmit}
      >
        <h1 className='text-xl font-bold'>Customize your links</h1>
        <p className='text-gray-500 text-sm'>Add/edit/remove links below and then share all your profiles with the world!</p>
        <Form.List name="Links" form={form} className="flex flex-col items-start gap-3">
          {(fields, { add, remove }) => {
            return (
              <>
                <Button type="text" onClick={() => add()} block icon={<PlusOutlined />}
                  className='bg-white border border-blue-500 text-blue-500 px-4 py-1 rounded-lg w-full'
                >
                  Add New Link
                </Button>
                <div className="bg-[#fafafa] rounded-xl w-full h-[400px] overflow-y-scroll p-3 mt-1">
                  {linkData && formData?.map((data, index) => (
                    <div className="w-full text-xs flex items-start justify-between mt-1">
                      <div key={index} className='w-full'>
                        <div className='linkform-header flex justify-between items-center'>
                          <span className='flex items-center text-sm'><TbMenu />link#{index +1 }</span>
                          <span className='text-xs text-gray-400' id={index + 1}>Remove</span>
                        </div>
                        <Form.Item
                          label={`Platform`}
                          name={'platform'}
                        >
                          <Select
                            disabled
                            placeholder={data.platform}
                            className='w-full'
                            options={
                              [
                                { label: 'GitHub', value: 'github', icon: <FaGithub /> },
                                { label: 'LinkedIn', value: 'linkedin', icon: <FaLinkedin /> },
                                { label: 'Facebook', value: 'facebook', icon: <FaFacebook /> },
                                { label: 'YouTube', value: 'youtube', icon: <FaYoutube /> }
                              ]
                            }
                          />
                        </Form.Item>
                        <Form.Item
                          name={'link'}
                          label='Link'
                        >
                          <Input
                            disabled
                            placeholder={data.link}
                            defaultValue={data.link}
                            prefix={<BiLink />}
                          />
                        </Form.Item>
                      </div>
                    </div>
                  ))}

                  {fields.map(({ key, name, ...restField }, index) => (
                    <div key={key} className="w-full text-xs flex items-start justify-between mt-1">
                      <div className='linkform flex flex-col w-[90%]'>
                        <div className='linkform-header flex justify-between items-center'>
                          <span className='flex items-center text-sm'><TbMenu />link#{index + (formData?.length || 1)}</span>
                          <span className='text-xs text-gray-400' id={index + (formData?.length || 1)}>Remove</span>
                        </div>
                        <Form.Item
                          {...restField}
                          label='Platform'
                          name={[name, 'platform']}
                          rules={[
                            {
                              required: true,
                              message: 'Please select link platform',
                            },
                          ]}
                        >
                          <Select
                            placeholder={'Select platform'}
                            className='w-full'
                            options={
                              [
                                { label: 'GitHub', value: 'github', icon: <FaGithub /> },
                                { label: 'LinkedIn', value: 'linkedin', icon: <FaLinkedin /> },
                                { label: 'Facebook', value: 'facebook', icon: <FaFacebook /> },
                                { label: 'YouTube', value: 'youtube', icon: <FaYoutube /> }
                              ]
                            }
                          />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'link']}
                          label='Link'
                        >
                          <Input
                            placeholder={'e.g. https://www.platform.com/johnDoe'}
                            prefix={<BiLink />}
                          />
                        </Form.Item>
                      </div>
                      <MinusCircleOutlined label="remove" onClick={() => remove(name)} />
                    </div>
                  ))}
                </div>
              </>
            )
          }}
        </Form.List>

        <Divider style={{ marginBlock: '5px' }} />

        <div className="bg-white flex flex-col gap-4 items-end">
          <Form.Item>
            <Button type="text" disabled={isDisabled} htmlType="submit"
              className='bg-blue-500 text-white px-4 py-2 rounded-lg'
            >
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default HomePage;
