const Contacts = () => { 
    return (
        <div className='w-full flex items-start justify-center flex-wrap pb-4 sm:pb-10 md:pb-12 lg:pb-16 px-4 lg:pl-10'>
          <div className='w-full sm:w-1/3 pb-8 sm:pb-0 sm:pl-0 lg:pl-10'>
            <h1 className='text-left text-obodai-header-h1 lg:text-obodai-header-h2 font-bold leading-snug'>
            Hello,
            </h1>
    
            <h5 className='text-obodai-header-h5 leading-loose'>Ready to create some beautiful magic together? Let’s Talk.</h5>
    
          </div>
          <div className='w-full sm:w-2/3 lg:pr-20'>
            <form
            >
                <h1 className="text-obodai-header-h3 font-bold">START PROJECT</h1>
              <div className='mt-5 w-full flex justify-between flex-wrap mb-6'>
                <div className='w-full sm:w-1/2 sm:pr-3'>
                  <input
                    type='text'
                    id='subject'
                    className='block w-full p-3 mt-4 border border-black '
                    placeholder='Message Subject '
                    required
                  />
                </div>
                <div className='w-full sm:w-1/2 pt-4 sm:pl-3 sm:pt-0'>
                  <input
                    type='text'
                    id='fullname'
                    className='block w-full p-3 mt-4 border border-black'
                    placeholder='Enter full name'
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
                    placeholder='Enter phone number'
                    required
                  />
                </div>
                <div className='w-full sm:w-1/2 pt-4 sm:pl-3 sm:pt-0'>
                  <input
                    type='email'
                    id='email'
                    className='block w-full p-3 mt-4 border border-black '
                    placeholder='Enter Email Address'
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
                    placeholder='Enter phone number'
                    required
                  />
                </div>
                <div className='w-full sm:w-1/2 pt-4 sm:pl-3 sm:pt-0'>
                  <input
                    type='email'
                    id='email'
                    className='block w-full p-3 mt-4 border border-black '
                    placeholder='Enter Email Address'
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
                    placeholder='Write your message here'
                  />
                </div>
              </div>
    
              <div className='my-5'>
                <button
                  type='submit'
                  className='w-full sm:w-1/3 xl:w-1/4 bg-black text-obodai-header-h6 rounded-md py-2 text-white'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )
};

export default Contacts;