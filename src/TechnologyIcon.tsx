import './TechnologyIcon.scss';

function TechnlogyIcon({image, name}: {image: string, name: string}) {
  return  <div className='group box2-wrap cursor-pointer relative'>
            <div className="box2 w-[75px] h-[75px] bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${image})`}}>
            </div>
            <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{name}</span>
          </div>
}

export default TechnlogyIcon;