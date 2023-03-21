import './TechnologyIcon.scss';

function TechnlogyIcon({image}: {image: string}) {

  return <div className='box2-wrap'><div className="box2 w-[75px] h-[75px] bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${image})`}}></div></div>
}

export default TechnlogyIcon;