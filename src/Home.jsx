import './Home.css'
import './App.css'
import ComponentHeaderHome from './ComponentHeaderHome'

export default function Home() {

    return (<>
        <div className='w-[100vw] min-h-screen flex justify-center my-5 '>
            <div className=' w-4/5'>
                <div className='flex items-center h-[450px] w-full '>
                    <div className=' w-1/2'>
                        <div className='text-left text-white text-4xl font-bold capitalize leading-10'>
                            <h6 className='color-yellow text-sm font-normal my-2'>Build Your Future</h6>
                            <div className='my-2'>
                                <span className="">Let’s build skills with<br />Colman</span>
                                <span className="text-amber-400 ">Dev</span>
                                <span>Club & learn<br />without limits</span>
                            </div>
                            <h4 className='text-lg font-normal'>Take your learning organisation to the next level</h4>
                        </div>

                        <div className="flex items-center justify-between w-60 h-12 bg-amber-400 rounded  pl-3 my-3">
                            <h4>Get Started Now</h4>
                            <button className=" flex justify-center items-center w-20 h-10 bg-gray-950 rounded m-1 ">
                                <img className='w-5 h-3.5' src="../public/arrow_home.png" alt="yellow arrow" />
                            </button>
                        </div>


                    </div>
                    <div className='col-span-1 w-1/2 h-full flex justify-end'>
                        <img className=' h-full' src="../public/home_header.png" alt="" />
                    </div>
                </div>
                <div className='max-w-full my-8'>
                    <div className=' flex flex-row justify-between overflow-scroll '>
                        <ComponentHeaderHome
                            Titel='Visual Studio'
                            p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            srcLogo='../public/visual_studio.png' />

                        <ComponentHeaderHome
                            Titel='Sqlite'
                            p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            srcLogo='../public/jquary.png' />

                        <ComponentHeaderHome
                            Titel='C-Sharp'
                            p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            srcLogo='../public/C-sharp.png' />

                        <ComponentHeaderHome
                            Titel='.NET'
                            p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            srcLogo='../public/dot_net.png' />

                        <ComponentHeaderHome
                            Titel='NuGet'
                            p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            srcLogo='../public/nu_get.png' />

                        <ComponentHeaderHome
                            Titel='MvvmCross'
                            p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                            srcLogo='../public/MvvmCross.png' />
                    </div>

                </div>

            </div>
        </div>


    </>)
}