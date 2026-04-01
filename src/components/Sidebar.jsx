import React from 'react'

const Sidebar = () => {
    return (
        <div className='min-w-58 md:min-w-66 bg-[#232E3C] text-white'>
            <div class="p-4.5 pl-5 space-y-8">
                <div class="relative w-fit select-none cursor-pointer">
                    <h2 class="text-xl font-semibold">AdminKit</h2>
                    <span class="text-[10px] bg-[#1c52a1] p-1 py-0.5 pb-0 font-bold uppercase rounded absolute top-0 -right-9">Pro</span>
                </div>
                <div class="flex items-center gap-3">
                    <div class="size-10 rounded-sm">
                        <img alt="avatar" class="object-cover rounded-sm" src="https://demo.adminkit.io/img/avatars/avatar.jpg"></img>
                    </div>
                    <div class="text-sm">
                        <p>Charles</p>
                        <p class="text-neutral-400">Developer</p>
                    </div>
                </div>
            <div className=''>Pages</div>


            </div>
        </div>
    )
}

export default Sidebar