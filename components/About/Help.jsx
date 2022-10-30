const Help = () => { 
    return (
        <div className='w-full flex items-start mt-10 justify-center flex-wrap pb-4 sm:pb-10 md:pb-12 lg:pb-16 px-4 lg:pl-10'>
          <div className='w-full sm:w-1/3 pb-8 sm:pb-0 sm:pl-0 lg:pl-10'>
            <h1 className='ml-0 md:ml-0 text-left text-3xl lg:text-4xl font-bold leading-snug'>
            How we can help
            </h1>
          </div>
          <div className='w-full sm:w-2/3 lg:pr-20'>
           <p className='ml-0 md:ml-32 text-left text-xl lg:text-2xl leading-snug'>
           Our clients are mostly going through brand changes, entering
          new markets, launching new products, or are just confounded.
          We work directly with founders, CEOs & CMOs, and their direct
          teams to align business goals to brand strategy.
          Our work encompasses strategy & positioning, naming &
          messaging, logo & visual identity, products & packaging.
           </p>
          </div>
        </div>
      )
};

export default Help;