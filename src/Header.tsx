import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import logo from './assets/joshua-logo.svg'
import { useState } from 'react';
import './Header.scss';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
    console.log('hello', isActive)
  };
  return  <div className="h-[70px] relative z-50">
            <nav
              className="fixed top-0 h-[70px] w-full bg-secondary transition ease-in-out duration-500 flex flex-col border-b border-b-secondary shadow-md">
              <div className="h-full w-full px-[16px] justify-between flex items-center mx-auto lg:px-[120px] gap-x-[28px]">
                <a href="" className="min-h-[40px] min-w-[120px] bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${logo})`}}></a>
                <div className= {isActive ? 'bg-secondary navigation items-center lg:flex block w-full h-full fixed top-0 bottom-0 right-0 left-0' : 'navigation items-center hidden lg:flex' } >
                  <ul role="list"
                    className={isActive ? 'items-center justify-center gap-[50px] flex gap-x-[24px] text-[18px] font-semibold mr-[24px] uppercase flex-wrap justify-end flex-col h-full' : 'flex gap-x-[24px] text-[18px] font-semibold mr-[24px] uppercase flex-wrap justify-end'}>
                    <li className="{% if page_title == 'home' %}text-primary{% endif %}">
                      <a href="" className="text-primary font-light cursor-poiinter" data-target="home">About Me</a>
                    </li>
                    <li className="">
                      <a href="#" className="text-primary font-light cursor-poiinter" data-target="about">Work</a>
                    </li>
                    <li className="">
                      <a href="#" className="text-primary font-light cursor-poiinter" data-target="services">My Projects</a>
                    </li>
                    <li className="">
                      <a href="#" className="text-primary font-light cursor-poiinter" data-target="activities">Contact</a>
                    </li>
                    <li className={isActive ? 'list-item' : 'hidden'}>
                      <a href="#"  className="text-primary font-light cursor-poiinter" data-target="activities" onClick={handleClick}>Back</a>
                    </li>
                  </ul>
                </div>
                <FontAwesomeIcon className="mobile-navigation-trigger-open text-[26px] text-primary cursor-pointer lg:hidden" icon={ faBars } onClick={handleClick} />
              </div>
            </nav>
          </div>
}

export default Header;