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
            <div data-aos="fade-right" data-aos-duration="1500" className="text-white text-[16px] font-semibold">INTRODUCTION</div>
            <div data-aos="fade-down" data-aos-duration="1500"  className="text-white text-[26px] font-bold tracking-wide mb-[20px]">OVERVIEW</div>
            <p  data-aos="fade-up" data-aos-duration="1500" className="text-white mb-[10px]">
              I am an experienced Front End Web Developer with expertise in HTML, CSS, Sass, Javascript, jQuery, Ajax, DataTables, ChartJS, and MomentJS. I hold a Bachelor's degree in Information and Communications Technology from the University of San Carlos and has worked as a Full-Time Front End Web Developer at Seditio Asia Inc., gaining experience in React, AngularJS, PHP, SQL, REST API, Laravel, and TypeScript. I am currently a part-time Front End Web Developer at the same company.
            </p>
            <p data-aos="fade-up" data-aos-duration="1500" className="text-white mb-[70px]">
              I am proficient in integrating REST API's in front-end development and has an advanced skills in Git, Wordpress, OctoberCMS, Terminal, TailwindCSS, Bootstrap, and Nunjucks.  I am passionate about web development and technology, always seeks to expand my knowledge and skills in this field.
            </p>
            <div className='grid sm:grid-cols-techonolgy-layout gap-[50px] mb-[100px]'>
              <div data-aos="fade-up-right" data-aos-duration="1000">
                <Technology title="Web Developer" image={web} ></Technology>
              </div>
              <div data-aos="fade-up-left" data-aos-duration="2000">
                <Technology title="Frontend Web Developer" image={frontend} ></Technology>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div data-aos="fade-right" data-aos-duration="1000" className='text-white text-[16px] font-semibold mb-[20px]'>Languages i speak</div>
              <div className='flex gap-[20px] flex-wrap'>
                <div data-aos="fade-up" data-aos-duration="500">
                  <TechnologyIcon image={html} name="HTML"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="600">
                  <TechnologyIcon image={css} name="CSS"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="700">
                  <TechnologyIcon image={js} name="JavaScript"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                  <TechnologyIcon image={ts} name="TypeScript"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="900">
                  <TechnologyIcon image={sass} name="Sass"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <TechnologyIcon image={php} name="PHP"></TechnologyIcon>
                </div>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div data-aos="fade-right" data-aos-duration="1000" className='text-white text-[16px] font-semibold mb-[20px]'>Development tools i touch</div>
              <div className='flex gap-[20px] flex-wrap'>
                <div data-aos="fade-up" data-aos-duration="500">
                  <TechnologyIcon image={git} name="Git"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="600">
                  <TechnologyIcon image={vscode} name="VSCode"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="700">
                  <TechnologyIcon image={gulp} name="Gulp"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                  <TechnologyIcon image={nunjucks} name="Nunjucks"></TechnologyIcon>
                </div>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div data-aos="fade-right" data-aos-duration="1000" className='text-white text-[16px] font-semibold mb-[20px]'>CMS technologies</div>
              <div className='flex gap-[20px] flex-wrap'>
                <div data-aos="fade-up" data-aos-duration="500">
                  <TechnologyIcon image={octobercms} name="OctoberCMS"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="600">
                  <TechnologyIcon image={wordpress} name="Wordpress"></TechnologyIcon>
                </div>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div data-aos="fade-right" data-aos-duration="1000" className='text-white text-[16px] font-semibold mb-[20px]'>Frameworks</div>
              <div className='flex gap-[20px] flex-wrap'>
                <div data-aos="fade-up" data-aos-duration="500">
                  <TechnologyIcon image={tailwindcss} name="TailwindCSS"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="600">
                  <TechnologyIcon image={bootstrap} name="Bootstrap"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="700">
                  <TechnologyIcon image={materializecss} name="MaterializeCSS"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                  <TechnologyIcon image={angular} name="Angular"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                  <TechnologyIcon image={laravel} name="Laravel"></TechnologyIcon>
                </div>
              </div>
            </div>
            <div className='mb-[60px]'>
              <div data-aos="fade-right" data-aos-duration="1000" className='text-white text-[16px] font-semibold mb-[20px]'>Javascript Libraries</div>
              <div className='flex gap-[20px] flex-wrap'>
                <div data-aos="fade-up" data-aos-duration="500">
                  <TechnologyIcon image={jquery} name="jQUery"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="600">
                  <TechnologyIcon image={react} name="React"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="700">
                  <TechnologyIcon image={chartjs} name="ChartJS"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                  <TechnologyIcon image={momentjs} name="MomentJS"></TechnologyIcon>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                  <TechnologyIcon image={aos} name="AOS"></TechnologyIcon>
                </div>
              </div>
            </div>
          </div>
}

export default About;