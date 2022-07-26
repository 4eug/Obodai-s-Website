/* eslint-disable react/jsx-no-undef */
const Contacts = () => { 
    return (
        <div className='w-full flex items-start justify-center flex-wrap pb-4 sm:pb-10 md:pb-12 lg:pb-16 px-4 lg:pl-10'>
          <div className='w-full sm:w-1/3 pb-8 sm:pb-0 sm:pl-0 lg:pl-10'>
            <h1 className='text-left text-[64px] lg:text-[96px] font-bold leading-snug'>
            Hello,
            </h1>
    
            <h5 className='text-[24px] pl-1 w-full md:w-3/4 leading-[29px]'>
            Ready to create some
            beautiful magic together? 
            Schedule a brief consult 
            <br className="hidden md:flex" />
            with us.
              </h5>

            <h5 className="mt-[35px] text-[24px] leading-[29px] pl-1">
            Do you have a general <br />
            question?
            <p className="mt-[20px] pl-1">
              <a href="mailto:hello@obodai.com">
              <span className="font-bold">Email us</span> instead.
              </a>
            </p>
            </h5>

    
          </div>
          <div className='w-full sm:w-2/3 lg:pr-20'>
            <form
            >
                <h1 className="text-obodai-header-h3 font-bold">WORK WITH US</h1>
              <div className='mt-1 w-full flex justify-between flex-wrap mb-6'>
                <div className='w-full sm:w-1/2 sm:pr-3'>
                  <input
                    type='text'
                    id='subject'
                    className='block w-full p-3 mt-4 border border-black '
                    placeholder='Full Name'
                    required
                  />
                </div>
                <div className='w-full sm:w-1/2 pt-4 sm:pl-3 sm:pt-0'>
                  <input
                    type='text'
                    id='fullname'
                    className='block w-full p-3 mt-4 border border-black'
                    placeholder='Email'
                    required
                  />
                </div>
              </div>
              <div className='w-full flex justify-between flex-wrap mb-6'>
                <div className='w-full sm:w-1/2 sm:pr-3'>
                  <input
                    type='number'
                    min={10}
                    id='phone'
                    className='block w-full p-3 mt-4 border border-black'
                    placeholder='Phone Number'
                    required
                  />
                </div>
                <div className='w-full sm:w-1/2 pt-4 sm:pl-3 sm:pt-0'>
                  <input
                    type='email'
                    id='email'
                    className='block w-full p-3 mt-4 border border-black '
                    placeholder='Company/Organization Name'
                    req
                  />
                </div>
              </div>
              <div className='w-full flex justify-between flex-wrap mb-6'>
                <div className='w-full sm:w-1/2 sm:pr-3'>
                  <input
                    type='number'
                    min={10}
                    id='phone'
                    className='block w-full p-3 mt-4 border border-black'
                    placeholder='Location'
                    required
                  />
                </div>
                <div className='w-full sm:w-1/2 pt-4 sm:pl-3 sm:pt-0'>
                  <input
                    type='email'
                    id='email'
                    className='block w-full p-3 mt-4 border border-black '
                    placeholder='How did you hear about us?'
                    req
                  />
                </div>
              </div>
    
              <div className='w-full flex justify-between flex-wrap mb-6'>
                <div className='w-full mt-5'>
                  <textarea
                    rows={5}
                    type='text'
                    id='message'
                    className='text-left w-full p-3 mt-2 border border-black '
                    placeholder='Tell us a bit about your project, timeline and budget.'
                  />
                </div>
              </div>
    
              <div className='my-5'>
              
            <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-black">
            <a href="" className="mt-2">
            <span className="text-2xl font-light">Submit</span>

            <svg width="72" height="24" viewBox="0 0 72 24" className="inline-block pb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71.0607 13.0607C71.6464 12.4749 71.6464 11.5251 71.0607 10.9393L61.5147 1.3934C60.9289 0.807611 59.9792 0.807611 59.3934 1.3934C58.8076 1.97919 58.8076 2.92893 59.3934 3.51472L67.8787 12L59.3934 20.4853C58.8076 21.0711 58.8076 22.0208 59.3934 22.6066C59.9792 23.1924 60.9289 23.1924 61.5147 22.6066L71.0607 13.0607ZM0 13.5H70V10.5H0V13.5Z" fill="white"/>
        </svg>
  
            </a>
          </button>
              </div>
            </form>
          </div>
        </div>
      )
};

export default Contacts;