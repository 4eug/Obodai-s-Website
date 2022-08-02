/* eslint-disable @next/next/no-img-element */
const Message = () => {
    return ( 
        <section className="relative flex justify-center items-center">
        <div className=" text-center md:w-3/4 px-5 -mt-8">
        <div className="flex flex-wrap justify-center">
            <div>
                <img src="/Logo 1.png" alt="..." className="mt-8 max-w-full h-auto align-middle " />
            </div>
            </div>
  
          <p className="mt-10 text-3xl md:text-5xl font-bold w-10/12 mx-auto">
            We help build memorable brands that
            create a meaningful impact in the world.
          </p>

          <button className="h-10 w-40 mt-10 font-medium text-white border border-black bg-black"> START A PROJECT </button>
          
        </div>
      </section>
     );
}
 
export default Message;