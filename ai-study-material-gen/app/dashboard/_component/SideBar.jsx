"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from "../../../components/ui/button";
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Progress } from "../../../components/ui/progress";
import Link from 'next/link';
function SideBar() {
    const MenuList=[
        {
            name:'Dashboard',
            icon:LayoutDashboard,
            path:'/dashboard'
        },
        {
            name:'Upgrade',
            icon:Shield,
            path:'/dashboard/upgrade'
        },
        {
            name:'Profile',
            icon:UserCircle,
            path:'/dashboard/profile'
        }

    ]
    const path=usePathname();
  return (
    <div className="h-screen shadow-md p-5"> {/* Added padding for better layout */}
      <div className="flex gap-2 items-center"> {/* Corrected flex-gap-2 */}
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <h2 className="font-bold text-2xl">AI Exam Prep</h2> {/* Changed text-2 to text-2xl */}
      </div>
      <div className="mt-10">
      <Link href={'/create'} className="w-full">
        <Button className="w-full">+ Create New</Button>
        </Link>
        <div>
            {MenuList.map((item, index) => (
                <div key={index} className={`flex items-center gap-5 p-3 hover:bg-slate-200 rounded-lg cursor-pointer mt-3 ${path==item.path && 'bg-slate-200'}`}> {/* Corrected flex-gap-5 */}
                <item.icon size={24} />
                <span>{item.name}</span>
                </div>
            ))}
        </div>
      </div>
      <div className='border p-5 bg-slate-100 rounded-lg absolute bottom-10 w-[85%]'> {/* Corrected bg-slate-100 */}
        <h2 className='text-lg mb-2'>Available Credits: 5</h2>
        <Progress value={30} />
        <h2 className='text-sm'>1 out of 5 credits used</h2>
        <Link href={'/dashboard/upgrade'} className='text-primary text-xs mt-3'>Upgrade to create more</Link>
      </div>
    </div>
  );
}

export default SideBar;
