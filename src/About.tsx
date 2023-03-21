import Technology from './Technology';
import TechnologyIcon from './TechnologyIcon';
import web from './assets/web.png'
import frontend from './assets/frontend.png'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import ts from './assets/ts.png'
import php from './assets/php.png'
import sass from './assets/sass.png'

import git from './assets/git.png'
import vscode from './assets/vscode.png'

import angular from './assets/angular.png'
import bootstrap from './assets/bootstrap.png'

import jquery from './assets/jquery.png'
import laravel from './assets/laravel.png'
import octobercms from './assets/octobercms.png'
import react from './assets/react.png'
import tailwindcss from './assets/tailwindcss.png'
import wordpress from './assets/wordpress.png'

function About() {

  return  <div className="px-[16px] md:px-[58px] lg:px-[200px] xl:px-[300px]">
            <div className="text-white text-[16px] font-semibold">INTRODUCTION</div>
            <div className="text-white text-[26px] font-bold tracking-wide mb-[20px]">OVERVIEW</div>
            <div className="text-white mb-[70px]">
              I'm a skilled Frontend Developer with experties of HTML, CSS and Javacsript Techonologies and experience of React, Angular frameworks. 
              I also have backend development experiences. I am also seeking to bring more than my expertise in developing responsive web applications and in 
              translating UX designs into interactive front-end design.
            </div>
            <div className='grid sm:grid-cols-techonolgy-layout gap-[50px] mb-[100px]'>
              <Technology title="Web Developer" image={web} ></Technology>
              <Technology title="Frontend Web Developer" image={frontend} ></Technology>
            </div>
            <div className='mb-[60px]'>
              <div className='text-white text-[16px] font-semibold mb-[20px]'>Languages i speak</div>
              <div className='flex gap-[20px] flex-wrap'>
                <TechnologyIcon image={html}></TechnologyIcon>
                <TechnologyIcon image={css}></TechnologyIcon>
                <TechnologyIcon image={js}></TechnologyIcon>
                <TechnologyIcon image={jquery}></TechnologyIcon>
                <TechnologyIcon image={ts}></TechnologyIcon>
                <TechnologyIcon image={sass}></TechnologyIcon>
                <TechnologyIcon image={php}></TechnologyIcon>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div className='text-white text-[16px] font-semibold mb-[20px]'>Development tools i touch</div>
              <div className='flex gap-[20px] flex-wrap'>
                <TechnologyIcon image={git}></TechnologyIcon>
                <TechnologyIcon image={vscode}></TechnologyIcon>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div className='text-white text-[16px] font-semibold mb-[20px]'>CMS technologies</div>
              <div className='flex gap-[20px] flex-wrap'>
                <TechnologyIcon image={octobercms}></TechnologyIcon>
                <TechnologyIcon image={wordpress}></TechnologyIcon>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div className='text-white text-[16px] font-semibold mb-[20px]'>Frameworks</div>
              <div className='flex gap-[20px] flex-wrap'>
                <TechnologyIcon image={tailwindcss}></TechnologyIcon>
                <TechnologyIcon image={bootstrap}></TechnologyIcon>
                <TechnologyIcon image={react}></TechnologyIcon>
                <TechnologyIcon image={angular}></TechnologyIcon>
                <TechnologyIcon image={laravel}></TechnologyIcon>
              </div>
            </div>
          </div>
}

export default About;