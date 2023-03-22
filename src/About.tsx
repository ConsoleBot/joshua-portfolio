import Technology from './Technology';
import TechnologyIcon from './TechnologyIcon';
import web from './assets/web.png';
import frontend from './assets/frontend.png';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import ts from './assets/ts.png';
import php from './assets/php.png';
import sass from './assets/sass.png';
import git from './assets/git.png';
import vscode from './assets/vscode.png';
import angular from './assets/angular.png';
import bootstrap from './assets/bootstrap.png';
import jquery from './assets/jquery.png';
import laravel from './assets/laravel.png';
import octobercms from './assets/octobercms.png';
import react from './assets/react.png';
import tailwindcss from './assets/tailwindcss.png';
import wordpress from './assets/wordpress.png';
import aos from './assets/aos.png';
import chartjs from './assets/chartjs.png';
import gulp from './assets/gulp.png';
import momentjs from './assets/momentjs.png';
import nunjucks from './assets/nunjucks.png';
import materializecss from './assets/materializecss.png';

function About() {

  return  <div id="about" className="pt-[75px] px-[16px] md:px-[58px] lg:px-[100px] xl:px-[180px] 2xl:px-[300px]  mb-[100px]">
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
                <TechnologyIcon image={html} name="HTML"></TechnologyIcon>
                <TechnologyIcon image={css} name="CSS"></TechnologyIcon>
                <TechnologyIcon image={js} name="JavaScript"></TechnologyIcon>
                <TechnologyIcon image={ts} name="TypeScript"></TechnologyIcon>
                <TechnologyIcon image={sass} name="Sass"></TechnologyIcon>
                <TechnologyIcon image={php} name="PHP"></TechnologyIcon>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div className='text-white text-[16px] font-semibold mb-[20px]'>Development tools i touch</div>
              <div className='flex gap-[20px] flex-wrap'>
                <TechnologyIcon image={git} name="Git"></TechnologyIcon>
                <TechnologyIcon image={vscode} name="VSCode"></TechnologyIcon>
                <TechnologyIcon image={gulp} name="Gulp"></TechnologyIcon>
                <TechnologyIcon image={nunjucks} name="Nunjucks"></TechnologyIcon>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div className='text-white text-[16px] font-semibold mb-[20px]'>CMS technologies</div>
              <div className='flex gap-[20px] flex-wrap'>
                <TechnologyIcon image={octobercms} name="OctoberCMS"></TechnologyIcon>
                <TechnologyIcon image={wordpress} name="Wordpress"></TechnologyIcon>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div className='text-white text-[16px] font-semibold mb-[20px]'>Frameworks</div>
              <div className='flex gap-[20px] flex-wrap'>
                <TechnologyIcon image={tailwindcss} name="TailwindCSS"></TechnologyIcon>
                <TechnologyIcon image={bootstrap} name="Bootstrap"></TechnologyIcon>
                <TechnologyIcon image={materializecss} name="MaterializeCSS"></TechnologyIcon>
                <TechnologyIcon image={angular} name="Angular"></TechnologyIcon>
                <TechnologyIcon image={laravel} name="Laravel"></TechnologyIcon>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div className='text-white text-[16px] font-semibold mb-[20px]'>Javascript Libraries</div>
              <div className='flex gap-[20px] flex-wrap'>
                <TechnologyIcon image={jquery} name="jQUery"></TechnologyIcon>
                <TechnologyIcon image={react} name="React"></TechnologyIcon>
                <TechnologyIcon image={chartjs} name="ChartJS"></TechnologyIcon>
                <TechnologyIcon image={momentjs} name="MomentJS"></TechnologyIcon>
                <TechnologyIcon image={aos} name="AOS"></TechnologyIcon>
              </div>
            </div>
          </div>
}

export default About;