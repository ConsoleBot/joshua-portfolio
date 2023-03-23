import './Technology.scss';

function Technology({title, image}: {title: string, image: string}) {

  return  <div className="box1 h-full flex flex-col justify-center items-center py-[80px] px-[30px] border border-primary rounded-[16px] min-w-[100%] sm:min-w-[300px]">
            <div className='w-[100px] h-[100px] bg-contain bg-no-repeat bg-center mb-[25px]' style={{backgroundImage: `url(${image})`}}></div>
            <div className="text-white text-[16px] w-[100px] text-center">{title}</div>
          </div>
}

export default Technology;