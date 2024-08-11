export default function Home() {
    return (

        <div className=" h-screen w-full  box text-white  ">

            <header className="h-[10vh] w-full flex ">

                <div className="w-[25vw] flex  justify-center items-center">Nike</div>
                <div className="flex w-[50vw] justify-evenly items-center">
                    <span>NEW RELEASE</span>
                    <span>MEN</span>
                    <span>WOMEN</span>
                    <span>KIDS</span>
                    <span>CUSTOMIZE</span>

                </div>
                <div className="flex w-[25vw] justify-end items-center">
                    <div className="flex w-[10vw] justify-around items-center">
                        <i className="fa-regular fa-user"></i>
                        <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>

            </header>

            <div className="h-[90vh] w-full flex ">
                <div className="h-[90vh] w-[33.33vw] flex flex-col items-center justify-end">

                    <div className="h-[70vh] flex flex-col justify-around items-end ">

                        <div className="w-56">
                            <h2>Jordan Red</h2>


                            <div>
                                <p>Release Date</p>
                                <p>2016-10-06 </p>
                                <p>Color Way</p>
                                <p>SAILS/STARFISH BLACK</p>
                            </div>

                        </div>

                        <div>

                            <h2>SELECT SIZE(US)</h2>


                            <div className="grid grid-cols-4 grid-rows-4 w-56 mt-2">
                                <div>8</div>
                                <div>8.5</div>
                                <div>9</div>
                                <div>9.5</div>
                                <div>10</div>
                                <div>10.5</div>
                                <div>11</div>
                                <div>11.5</div>
                            </div>
                        </div>


                        <div className="w-56">
                            <h2>SELECT COLOR</h2>
                            <div className="flex gap-1 mt-4">
                                <div className="h-10 w-10 rounded-[50%] bg-red-600"></div>
                                <div className="h-10 w-10 rounded-[50%] bg-blue-700"></div>
                                <div className="h-10 w-10 rounded-[50%] bg-sky-400"></div>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="h-[90vh] w-[33.33vw] flex  justify-center " >

                    <h1 className="text-[300px] z-10 font-bold">NIKE</h1>

                </div>
                <div className="h-[90vh] w-[33.33vw] flex flex-col justify-end">

                    <div className="h-[70vh] w-full flex flex-col justify-end items-center ">
                        <div className="h-36">
                            <p>The quality is excellent,packed <br />
                                reliably,and the color is a dream.The <br />
                                USS Store is excellent.Thank You ! <br />
                                We strike to earn and keep your trust.</p>
                        </div>

                        <div className="flex gap-1 h-44">
                            <div className="h-10 w-10 rounded-[50%] border-[1px] flex justify-center items-center"><i class="fa-solid fa-arrow-left-long"></i></div>
                            <div className="h-10 w-10 rounded-[50%] border-[1px] flex justify-center items-center"><i class="fa-solid fa-arrow-right-long"></i></div>

                        </div>


                    </div>




                </div>



            </div>

            {/* <div className="w-full h-[30vh] flex">

                <div className="w-[49.99vw] h-[35vh] ">

                    <div></div>
                    <div></div>
                </div>
                <div className="w-[49.99vw] h-[35vh] "></div>

            </div> */}


        </div>
    );
}