import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {HiOutlineXMark} from 'react-icons/hi2';

type DialogComponentProps={
  isVisible:boolean,
  onClose:()=>void,
  children:React.ReactNode
}

export default function DialogComponent(
  {isVisible,onClose,children}:DialogComponentProps
) {

  return (
    <>
      <Transition appear show={isVisible} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-300 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex flex-col w-64 h-full bg-white relative z-10">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="overflow-y-auto flex-1 transition-all">
                   <div className='flex justify-end mt-3'>
                     <button className='p-2 rounded-full outline-none bg-gray-200 text-gray-500 hover:bg-green-200 hover:text-green-600' onClick={onClose}>
                        <HiOutlineXMark size={28} className='cursor-pointer'/>
                     </button>
                   </div>
                   {children }
                </Dialog.Panel>
              </Transition.Child>
            </div>

          </div>
        </Dialog>
      </Transition>
    </>
  )
}
