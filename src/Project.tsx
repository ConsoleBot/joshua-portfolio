import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

function Project(data: {background: string, link: string, header: string, image: string}) {
  let backgroundStyle = data.background.indexOf('.') !== -1  ? {backgroundImage: `url(${data.background})`} : {backgroundColor: data.background}
 
  return  <div className="bg-secondary h-[280px] rounded-[9px] relative overflow-hidden group">
            <div className="opacity-100 group-hover:opacity-0 bg-cover sm:bg-center bg-no-repeat pointer-events-none rounded-inherit transition-opacity absolute top-0 left-0 bottom-0 right-0 border border-primary" style={backgroundStyle}>
            </div>
            <div className="opacity-100 group-hover:opacity-0 w-[50%] h-[50%] rounded-[9px] bg-center bg-no-repeat bg-contain m-auto transition-opacity  absolute pointer-events-none top-0 bottom-0 right-0 left-0" style={{backgroundImage: `url(${data.image})`}}></div>
            <div className="opacity-0 group-hover:opacity-100 px-[20px] sm:px-[35px] py-[25px] transition-opacity flex flex-col justify-center h-[100%] pointer-events-none">
              <div className="text-[18px] text-white mb-[20px] text-center pointer-events-none">{data.header}
              </div>
              <div>
                <a href={data.link} target="_blank"
                  className="group-hover:pointer-events-auto block px-[20px] py-[10px] text-[18px] cursor-pointer text-white font-semibold rounded-[50px] pointer-events-none visible">Visit Site Demo
                  <FontAwesomeIcon className="text-primary text-[20px] ml-[5px]" icon={ faChevronRight } />
                </a>
              </div>
            </div>
          </div>
}

export default Project;