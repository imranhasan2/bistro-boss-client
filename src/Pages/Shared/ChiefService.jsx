

const ChiefService = ({img,bgColor,title,color,description,textColor}) => {
    return (
        <div className='mb-12 bg-fixed flex justify-center items-center'
            style={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100vh'
            }}

        >
            <div style={{background: bgColor}} className='  w-[1000px] h-[333px] '>
                <div className='flex justify-center items-center flex-col  h-full text-center'>
                    <h2 style={{color: color}} className='uppercase text-4xl'>{title}</h2>
                    <h3 style={{color:textColor}} className=' '>{description}</h3>
                </div>
            </div>
            

        </div>
    );
};

export default ChiefService;