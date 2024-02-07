import React, { useEffect, useState } from 'react'
import { Logo } from '../assets/Logo'
import { NavLink } from 'react-router-dom'
import img from '../assets/image1.png'
import { toast } from 'react-toastify';



export const NavbarH = () => {

    var [upload, setUpload] = useState(false);

    var [uploaded, setUploaded] = useState(false);

    const [drawerOpen, setDrawerOpen] = useState(true);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };


    useEffect(()=>{
        const handleResize = () => {
            setDrawerOpen(true)
        };


        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])

    return (
        <div class='flex justify-end'>

            <div class="w-full lg:w-[82%] bg-[#f8faff] border">
                <div class='flex justify-between bg-white p-4'>
                    <div class='flex'>

                        <div className="text-center flex lg:hidden">
                            <button
                                className="text-white font-medium rounded-lg text-sm px-5 py-2.5"
                                onClick={toggleDrawer}
                                aria-controls="drawer-navigation"
                            >
                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1H17M1 13H17M1 7H17" stroke="#231F20" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </button>

                            <div class="flex gap-2 items-center lg:hidden" >
                                <Logo width={'40px'} height={'40px'} />
                                <h2 className="text-base font-semibold"> Base</h2>
                            </div>
                        </div>



                        <h2 className="text-3xl font-bold hidden lg:block">Upload CSV</h2>

                    </div>



                    <div class='flex gap-[10%] justify-end items-center'>
                        <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3862 13.3255V9.20108C16.3862 5.5011 14.2012 2.38423 11.2412 1.44687C10.9482 0.59807 10.2322 0 9.38623 0C8.54023 0 7.82423 0.59807 7.53123 1.44687C4.57123 2.38538 2.38623 5.5011 2.38623 9.20108V13.3255L0.679231 15.2887C0.586189 15.3954 0.512401 15.5221 0.462116 15.6617C0.411831 15.8012 0.386041 15.9508 0.386232 16.1019V18.4022C0.386232 18.7072 0.491588 18.9997 0.679125 19.2154C0.866661 19.4311 1.12102 19.5523 1.38623 19.5523H17.3862C17.6514 19.5523 17.9058 19.4311 18.0933 19.2154C18.2809 18.9997 18.3862 18.7072 18.3862 18.4022V16.1019C18.3864 15.9508 18.3606 15.8012 18.3103 15.6617C18.2601 15.5221 18.1863 15.3954 18.0932 15.2887L16.3862 13.3255ZM16.3862 17.252H2.38623V16.578L4.09323 14.6148C4.18627 14.5081 4.26006 14.3814 4.31035 14.2419C4.36063 14.1023 4.38642 13.9527 4.38623 13.8016V9.20108C4.38623 6.03016 6.62923 3.45041 9.38623 3.45041C12.1432 3.45041 14.3862 6.03016 14.3862 9.20108V13.8016C14.3862 14.1076 14.4912 14.3997 14.6792 14.6148L16.3862 16.578V17.252ZM9.38623 23.0027C10.0055 23.0036 10.6097 22.7826 11.1147 22.3703C11.6198 21.9581 12.0006 21.3751 12.2042 20.7024H6.56823C6.77189 21.3751 7.15271 21.9581 7.65774 22.3703C8.16277 22.7826 8.76693 23.0036 9.38623 23.0027Z" fill="black" />
                        </svg>
                        <img src={img} class='rounded-full' alt="" />
                    </div>

                </div>


                <h2 className="text-3xl mt-[50px] ml-[16px] font-bold lg:hidden">Upload CSV</h2>

                <div class='flex justify-center items-center h-screen' >

                    <div class="w-full h-[50%] flex flex-col justify-between max-w-sm p-4 bg-white border border-gray-200 rounded-lg">


                        <div class="w-full h-[80%] max-w-sm flex justify-center items-center p-4 bg-white border border-gray-200 rounded-lg border-dotted">

                            <div class='flex flex-col items-center w-full'>
                                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_22_2724)">
                                        <path d="M22.7801 17.2998L10.9556 15.1998V30.7167C10.9556 31.4253 11.5264 31.9998 12.2305 31.9998H32.6341C33.3382 31.9998 33.9091 31.4253 33.9091 30.7167V24.9998L22.7801 17.2998Z" fill="#185C37" />
                                        <path d="M22.7802 4H12.2306C11.5264 4 10.9556 4.57446 10.9556 5.2831V11L22.7802 18L29.0402 20.1L33.9091 18V11L22.7802 4Z" fill="#21A366" />
                                        <path d="M10.9556 11H22.7802V18H10.9556V11Z" fill="#107C41" />
                                        <path opacity="0.1" d="M19.4185 9.60049H10.9556V27.1005H19.4185C20.1216 27.0982 20.6911 26.5251 20.6934 25.8174V10.8836C20.6911 10.1759 20.1216 9.60279 19.4185 9.60049Z" fill="black" />
                                        <path opacity="0.2" d="M18.7229 10.3002H10.9556V27.8002H18.7229C19.4261 27.7979 19.9956 27.2248 19.9978 26.5171V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z" fill="black" />
                                        <path opacity="0.2" d="M18.7229 10.3002H10.9556V26.4002H18.7229C19.4261 26.3979 19.9956 25.8248 19.9978 25.1172V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z" fill="black" />
                                        <path opacity="0.2" d="M18.0273 10.3002H10.9556V26.4002H18.0273C18.7305 26.3979 19.3 25.8248 19.3023 25.1172V11.5833C19.3 10.8757 18.7305 10.3025 18.0273 10.3002Z" fill="black" />
                                        <path d="M5.27496 10.3002H18.0274C18.7315 10.3002 19.3023 10.8747 19.3023 11.5833V24.4171C19.3023 25.1258 18.7315 25.7002 18.0274 25.7002H5.27496C4.57082 25.7002 4 25.1258 4 24.4171V11.5833C4 10.8747 4.57082 10.3002 5.27496 10.3002Z" fill="url(#paint0_linear_22_2724)" />
                                        <path d="M7.94867 22.1706L10.6307 17.9881L8.17334 13.8287H10.1501L11.4912 16.4887C11.615 16.7414 11.6998 16.929 11.7457 17.0529H11.7631C11.8512 16.8513 11.944 16.6555 12.0413 16.4656L13.4749 13.8301H15.2896L12.7696 17.965L15.3536 22.1706H13.4227L11.8737 19.2509C11.8008 19.1267 11.7388 18.9962 11.6887 18.861H11.6658C11.6204 18.9934 11.5602 19.1203 11.4863 19.239L9.89138 22.1706H7.94867Z" fill="white" />
                                        <path d="M32.6342 4H22.7802V11H33.9091V5.2831C33.9091 4.57446 33.3383 4 32.6342 4Z" fill="#33C481" />
                                        <path d="M22.7802 18H33.9091V25H22.7802V18Z" fill="#107C41" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_22_2724" x1="6.65832" y1="9.29766" x2="16.7396" y2="26.6473" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#18884F" />
                                            <stop offset="0.5" stop-color="#117E43" />
                                            <stop offset="1" stop-color="#0B6631" />
                                        </linearGradient>
                                        <clipPath id="clip0_22_2724">
                                            <rect width="29.9091" height="28" fill="white" transform="translate(4 4)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <p class='text-[#9A9AA9] flex flex-col items-center  w-full '> {upload ? <span class='flex flex-col items-center  w-full'>upload-template.xlsx <p class='text-[red]' >Remove</p> </span> : <span>Drop your excel sheet here or <span class='text-[#605BFF]'>browse</span> </span>} </p>
                            </div>

                        </div>

                        <button type="button" class="text-white bg-[#605BFF] disabled:opacity-25 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" onClick={() => {

                            setUpload(!upload);

                            if (upload) {
                                setUploaded(true);
                                toast.success('File Uploaded successfully!');

                            }


                        }} disabled={uploaded}  >

                            {
                                upload ?
                                    <svg width="564" height="20" viewBox="0 0 564 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="269.5" y="19.5" width="17" height="17" rx="8.5" stroke="url(#paint0_angular_22_3040)" stroke-width="2" />
                                        <defs>
                                            <radialGradient id="paint0_angular_22_3040" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(278 28) rotate(90) scale(9.5)">
                                                <stop offset="0.482539" stop-color="white" />
                                                <stop offset="0.482639" stop-color="white" stop-opacity="0" />
                                                <stop offset="0.612852" stop-color="white" stop-opacity="0" />
                                                <stop offset="0.612952" stop-color="white" />
                                            </radialGradient>
                                        </defs>
                                    </svg>


                                    :

                                    <>


                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Upload
                                    </>

                            }



                        </button>
                    </div>
                </div>


                {!uploaded ? "" : <div>
                    <div>
                        <h2 className="text-3xl font-bold mb-10">Uploads</h2>
                    </div>




                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-[#f8faff]">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class='bg-[#f8faff]' >
                                <tr class="bg-white border-b mb-10">
                                    <th scope="row" class="px-6 py-4 font-medium">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">
                                        White
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                        Black
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>

                }


            </div>

            <div
                id="drawer-navigation"
                className="fixed border lg:w-[18%] top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white "
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label"
                style={{ transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)' }}
            >

                <div class="flex gap-2 items-center lg:hidden" >
                    <Logo width={'40px'} height={'40px'} />
                    <h2 className="text-base font-semibold"> Base</h2>

                    <button
                        type="button"
                        onClick={toggleDrawer}
                        aria-controls="drawer-navigation"
                        className="rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 flex items-center "
                    >
                        <svg aria-hidden="true" className="w-5 h-5 m-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>



                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <div class="hidden lg:flex items-center justify-center gap-2 my-7" >
                            <Logo />
                            <div class='text-[24px] font-semibold '>

                                <h2 className="text-3xl font-bold"> Base</h2>

                            </div>
                        </div>

                        <div class="h-full px-3 py-4 overflow-y-auto">
                            <ul class="space-y-2 font-medium">
                                <li>

                                    <NavLink to={'/'} className={({ isActive }) => { return isActive ? 'text-blue-400 flex p-2' : 'text-[#9A9AA9] flex p-2' }}  >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53991 2H7.91991C9.32991 2 10.4599 3.15 10.4599 4.561V7.97C10.4599 9.39 9.32991 10.53 7.91991 10.53H4.53991C3.13991 10.53 1.99991 9.39 1.99991 7.97V4.561C1.99991 3.15 3.13991 2 4.53991 2ZM4.53991 13.4697H7.91991C9.32991 13.4697 10.4599 14.6107 10.4599 16.0307V19.4397C10.4599 20.8497 9.32991 21.9997 7.91991 21.9997H4.53991C3.13991 21.9997 1.99991 20.8497 1.99991 19.4397V16.0307C1.99991 14.6107 3.13991 13.4697 4.53991 13.4697ZM19.46 2H16.08C14.67 2 13.54 3.15 13.54 4.561V7.97C13.54 9.39 14.67 10.53 16.08 10.53H19.46C20.86 10.53 22 9.39 22 7.97V4.561C22 3.15 20.86 2 19.46 2ZM16.08 13.4697H19.46C20.86 13.4697 22 14.6107 22 16.0307V19.4397C22 20.8497 20.86 21.9997 19.46 21.9997H16.08C14.67 21.9997 13.54 20.8497 13.54 19.4397V16.0307C13.54 14.6107 14.67 13.4697 16.08 13.4697Z" fill="#9A9AA9" />
                                        </svg>

                                        <span class="ms-3">Dashboard</span>
                                    </NavLink>
                                </li>

                                <li>

                                    <NavLink to={'/upload'} className={({ isActive }) => { return isActive ? 'text-blue-400 flex  p-2' : 'text-[#9A9AA9] flex p-2' }}  >
                                        <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33003 0H14.669C18.07 0 19.99 2.1243 20 5.86962V16.1552C20 19.8994 18.07 22.0248 14.669 22.0248H5.33003C1.92903 22.0248 3.05176e-05 19.8994 3.05176e-05 16.1552V5.86962C3.05176e-05 2.1243 1.92903 0 5.33003 0ZM10.049 17.4657C10.48 17.4657 10.839 17.1133 10.879 16.6398V5.41811C10.919 5.07672 10.77 4.73424 10.5 4.54813C10.219 4.36092 9.87903 4.36092 9.61003 4.54813C9.33903 4.73424 9.19003 5.07672 9.21903 5.41811V16.6398C9.27003 17.1133 9.62903 17.4657 10.049 17.4657ZM14.65 17.4657C15.07 17.4657 15.429 17.1133 15.48 16.6398V13.0277C15.509 12.6742 15.36 12.3449 15.089 12.1577C14.82 11.9705 14.48 11.9705 14.2 12.1577C13.929 12.3449 13.78 12.6742 13.82 13.0277V16.6398C13.86 17.1133 14.219 17.4657 14.65 17.4657ZM6.21902 16.6398C6.17902 17.1133 5.82002 17.4657 5.38902 17.4657C4.95902 17.4657 4.59902 17.1133 4.56002 16.6398V9.03018C4.53002 8.6877 4.67902 8.34741 4.95002 8.1602C5.21902 7.97299 5.56002 7.97299 5.83002 8.1602C6.09902 8.34741 6.25002 8.6877 6.21902 9.03018V16.6398Z" fill="#605BFF" />
                                        </svg>

                                        <span class="ms-3">Upload</span>
                                    </NavLink>
                                </li>

                                <li>

                                    <NavLink to={'/'} className={({ isActive }) => { return isActive ? 'text-blue-400 flex p-2' : 'text-[#9A9AA9] flex p-2' }}  >
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7872 7.47423C21.6518 7.61908 21.4681 7.70185 21.2747 7.70185C20.559 7.70185 19.9787 8.32263 19.9787 9.07792C19.9787 9.83838 20.5522 10.4561 21.2611 10.4643C21.6605 10.4685 22 10.7664 22 11.1938V13.8476C22 16.0814 20.3075 17.893 18.2186 17.893H15.0658C14.7398 17.893 14.4758 17.6106 14.4758 17.2619V15.0271C14.4758 14.5925 14.1567 14.2511 13.7505 14.2511C13.354 14.2511 13.0251 14.5925 13.0251 15.0271V17.2619C13.0251 17.6106 12.7611 17.893 12.4362 17.893H5.78143C3.70213 17.893 2 16.0824 2 13.8476V11.1938C2 10.7664 2.33946 10.4685 2.73888 10.4643C3.44874 10.4561 4.02128 9.83838 4.02128 9.07792C4.02128 8.34333 3.46035 7.78462 2.72534 7.78462C2.53191 7.78462 2.34816 7.70185 2.21277 7.557C2.07737 7.41215 2 7.21557 2 7.00865V4.32894C2 2.09826 3.706 0.273159 5.7911 0.273159H12.4362C12.7611 0.273159 13.0251 0.555615 13.0251 0.904288V3.55296C13.0251 3.97716 13.354 4.32894 13.7505 4.32894C14.1567 4.32894 14.4758 3.97716 14.4758 3.55296V0.904288C14.4758 0.555615 14.7398 0.273159 15.0658 0.273159H18.2186C20.3075 0.273159 22 2.08377 22 4.31859V6.92587C22 7.1328 21.9226 7.32938 21.7872 7.47423ZM13.7505 12.2439C14.1567 12.2439 14.4758 11.8921 14.4758 11.4679V7.32938C14.4758 6.90518 14.1567 6.55341 13.7505 6.55341C13.354 6.55341 13.0251 6.90518 13.0251 7.32938V11.4679C13.0251 11.8921 13.354 12.2439 13.7505 12.2439Z" fill="#030229" />
                                            </g>
                                        </svg>

                                        <span class="ms-3">Invoice</span>
                                    </NavLink>
                                </li>

                                <li>

                                    <NavLink to={'/'} className={({ isActive }) => { return isActive ? 'text-blue-400 flex p-2' : 'text-[#9A9AA9] flex p-2' }}  >
                                        <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81 2.47565H16.191C19.28 2.47565 21 4.43586 21 7.79464V19.1705C21 22.5843 19.28 24.5005 16.191 24.5005H7.81C4.77 24.5005 3 22.5843 3 19.1705V7.79464C3 4.43586 4.77 2.47565 7.81 2.47565ZM8.07999 7.60743V7.59642H11.069C11.5 7.59642 11.85 7.98185 11.85 8.45429C11.85 8.93993 11.5 9.32537 11.069 9.32537H8.07999C7.64899 9.32537 7.29999 8.93994 7.29999 8.4664C7.29999 7.99287 7.64899 7.60743 8.07999 7.60743ZM8.07999 14.303H15.92C16.35 14.303 16.7 13.9176 16.7 13.444C16.7 12.9705 16.35 12.5839 15.92 12.5839H8.07999C7.64899 12.5839 7.29999 12.9705 7.29999 13.444C7.29999 13.9176 7.64899 14.303 8.07999 14.303ZM8.07999 19.3357H15.92C16.319 19.2916 16.62 18.9161 16.62 18.4767C16.62 18.0252 16.319 17.6508 15.92 17.6067H8.07999C7.77999 17.5737 7.48999 17.7278 7.32999 18.0142C7.16999 18.2895 7.16999 18.6529 7.32999 18.9392C7.48999 19.2145 7.77999 19.3797 8.07999 19.3357Z" fill="#030229" />
                                            </g>
                                        </svg>

                                        <span class="ms-3">Schedule</span>
                                    </NavLink>
                                </li>

                                <li>

                                    <NavLink to={'/'} className={({ isActive }) => { return isActive ? 'text-blue-400 flex p-2' : 'text-[#9A9AA9] flex p-2' }}  >
                                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4109 3.75186L16.4119 4.57738C19.1665 4.81513 20.9862 6.88222 20.9891 10.0522L21 19.331C21.0039 22.7872 19.0322 24.9137 15.8718 24.9192L8.15188 24.9302C5.01119 24.9346 3.01482 22.7575 3.01087 19.2914L3.00001 10.1216C2.99606 6.93065 4.75153 4.86906 7.50617 4.59059L7.50518 3.76507C7.5042 3.28076 7.83001 2.91644 8.26444 2.91644C8.69886 2.91533 9.02468 3.27856 9.02567 3.76287L9.02666 4.53335L14.8914 4.52454L14.8904 3.75406C14.8894 3.26976 15.2152 2.90653 15.6497 2.90543C16.0742 2.90433 16.4099 3.26756 16.4109 3.75186ZM4.52146 10.4617L19.4696 10.4396V10.0544C19.4272 7.68792 18.349 6.44634 16.4138 6.26143L16.4148 7.10896C16.4148 7.58226 16.0801 7.95759 15.6556 7.95759C15.2211 7.95869 14.8943 7.58446 14.8943 7.11116L14.8933 6.2196L9.02862 6.22841L9.0296 7.11887C9.0296 7.59326 8.70477 7.9675 8.27035 7.9675C7.83592 7.9686 7.50912 7.59547 7.50912 7.12107L7.50813 6.27354C5.58284 6.48597 4.51751 7.73195 4.52048 10.1193L4.52146 10.4617ZM15.2399 15.4643V15.4764C15.2498 15.9827 15.625 16.3669 16.0801 16.3559C16.5244 16.3438 16.8789 15.9244 16.869 15.4181C16.8483 14.9338 16.4918 14.5386 16.0485 14.5397C15.5943 14.5507 15.2389 14.958 15.2399 15.4643ZM16.0554 20.4064C15.6013 20.3954 15.235 19.9782 15.234 19.4719C15.2241 18.9656 15.5884 18.5462 16.0426 18.5341H16.0525C16.5165 18.5341 16.8927 18.9513 16.8927 19.4686C16.8937 19.9859 16.5185 20.4053 16.0554 20.4064ZM11.1721 15.4819C11.1919 15.9882 11.568 16.3834 12.0222 16.3614C12.4665 16.3382 12.821 15.92 12.8012 15.4137C12.7903 14.9184 12.425 14.5331 11.9807 14.5342C11.5266 14.5562 11.1711 14.9756 11.1721 15.4819ZM12.0261 20.3569C11.572 20.3789 11.1968 19.9837 11.176 19.4774C11.176 18.9711 11.5305 18.5528 11.9847 18.5297C12.429 18.5286 12.7953 18.9139 12.8051 19.4081C12.8259 19.9155 12.4704 20.3338 12.0261 20.3569ZM7.1043 15.5204C7.12405 16.0268 7.50022 16.423 7.95439 16.3999C8.39869 16.3779 8.75314 15.9585 8.73241 15.4522C8.72253 14.9569 8.35722 14.5716 7.91194 14.5727C7.45777 14.5948 7.10332 15.0141 7.1043 15.5204ZM7.95836 20.3624C7.50419 20.3855 7.12901 19.9892 7.10827 19.4829C7.10728 18.9766 7.46272 18.5572 7.91689 18.5352C8.36119 18.5341 8.72749 18.9194 8.73736 19.4147C8.7581 19.921 8.40365 20.3404 7.95836 20.3624Z" fill="#030229" />
                                            </g>
                                        </svg>

                                        <span class="ms-3">Calendar</span>
                                    </NavLink>
                                </li>

                                <li>

                                    <NavLink to={'/'} className={({ isActive }) => { return isActive ? 'text-blue-400 flex p-2' : 'text-[#9A9AA9] flex p-2' }}  >
                                        <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 9.81964C18.7071 11.2027 19.039 12.0179 19.7695 12.9574C20.3231 13.6495 20.5 14.5379 20.5 15.5017C20.5 16.4644 20.2128 17.3784 19.6373 18.1204C18.884 19.0099 17.8215 19.5778 16.7372 19.6765C15.1659 19.824 13.5937 19.9482 12.0005 19.9482C10.4063 19.9482 8.83505 19.8739 7.26375 19.6765C6.17846 19.5778 5.11602 19.0099 4.36367 18.1204C3.78822 17.3784 3.5 16.4644 3.5 15.5017C3.5 14.5379 3.6779 13.6495 4.23049 12.9574C4.98384 12.0179 5.29392 11.2027 5.29392 9.81964V9.35048C5.29392 7.49823 5.71333 6.28706 6.577 5.1014C7.86106 3.37227 9.91935 2.33524 11.9558 2.33524H12.0452C14.1254 2.33524 16.2502 3.42218 17.5125 5.22563C18.3314 6.38688 18.7071 7.54703 18.7071 9.35048V9.81964ZM9.07367 22.2246C9.07367 21.67 9.53582 21.416 9.96318 21.3073C10.4631 21.1909 13.5093 21.1909 14.0092 21.3073C14.4365 21.416 14.8987 21.67 14.8987 22.2246C14.8738 22.7525 14.5926 23.2206 14.204 23.5178C13.7001 23.9504 13.1087 24.2243 12.4906 24.323C12.1487 24.3718 11.8128 24.3729 11.4828 24.323C10.8636 24.2243 10.2723 23.9504 9.76937 23.5167C9.37978 23.2206 9.09852 22.7525 9.07367 22.2246Z" fill="#030229" />
                                            </g>
                                        </svg>

                                        <span class="ms-3">Notification</span>
                                    </NavLink>
                                </li>

                                <li>

                                    <NavLink to={'/'} className={({ isActive }) => { return isActive ? 'text-blue-400 flex p-2' : 'text-[#9A9AA9] flex p-2' }}  >
                                        <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.4">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4023 15.5175C20.7599 15.7268 21.0359 16.0572 21.23 16.3875C21.6082 17.0703 21.5775 17.9072 21.2096 18.6451L20.4942 19.9666C20.1161 20.6714 19.411 21.1119 18.6854 21.1119C18.3277 21.1119 17.9291 21.0017 17.6021 20.7815C17.3364 20.5943 17.0298 20.5282 16.7028 20.5282C15.691 20.5282 14.8428 21.4422 14.8121 22.5325C14.8121 23.7989 13.8719 24.79 12.6967 24.79H11.3068C10.1214 24.79 9.18116 23.7989 9.18116 22.5325C9.16072 21.4422 8.3125 20.5282 7.30076 20.5282C6.96351 20.5282 6.65693 20.5943 6.40144 20.7815C6.07441 21.0017 5.66563 21.1119 5.31816 21.1119C4.58235 21.1119 3.8772 20.6714 3.49908 19.9666L2.79393 18.6451C2.4158 17.9293 2.39536 17.0703 2.77349 16.3875C2.937 16.0572 3.24359 15.7268 3.59106 15.5175C3.8772 15.3634 4.06116 15.1101 4.23489 14.8128C4.74587 13.8657 4.43928 12.6213 3.57062 12.0596C2.55888 11.4319 2.23185 10.0334 2.81437 8.94313L3.49908 7.64367C4.09181 6.55344 5.35904 6.168 6.381 6.80672C7.2701 7.33532 8.42491 6.98292 8.94611 6.04687C9.10962 5.73852 9.2016 5.40815 9.18116 5.07777C9.16072 4.64829 9.27314 4.24083 9.46731 3.91046C9.84543 3.22769 10.5301 2.78719 11.2762 2.76517H12.7171C13.4734 2.76517 14.1581 3.22769 14.5362 3.91046C14.7202 4.24083 14.8428 4.64829 14.8121 5.07777C14.7917 5.40815 14.8837 5.73852 15.0472 6.04687C15.5684 6.98292 16.7232 7.33532 17.6225 6.80672C18.6343 6.168 19.9117 6.55344 20.4942 7.64367L21.1789 8.94313C21.7717 10.0334 21.4447 11.4319 20.4227 12.0596C19.554 12.6213 19.2474 13.8657 19.7686 14.8128C19.9322 15.1101 20.1161 15.3634 20.4023 15.5175ZM9.10962 13.7886C9.10962 15.5176 10.4075 16.8941 12.012 16.8941C13.6165 16.8941 14.8837 15.5176 14.8837 13.7886C14.8837 12.0597 13.6165 10.6721 12.012 10.6721C10.4075 10.6721 9.10962 12.0597 9.10962 13.7886Z" fill="#030229" />
                                            </g>
                                        </svg>


                                        <span class="ms-3">Settings</span>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    )
}
