import Project from './Project';
import biologitlogo from './assets/biologit-logo.svg'
import biologitbackground from './assets/biologit-background.png'
import bahiavistarestortlogo from './assets/bahia-vista-restort-logo.svg'
import smartchoiceslogo from './assets/smartchoices-logo.svg'
import smartchoicesbackground from './assets/smartchoices-background.png'
import rpmbackground from './assets/rpm-background.png'
import rpmlogo from './assets/rpm-logo.svg'
import managedpmologo from './assets/managedpmo-logo.svg'
import cebuswimmingpoollogo from './assets/cebuswimmingpool-logo.svg'

function Work() {
  const projects = {
    biologit: {
      header: 'Artificial Intelligence Solutions for Pharmacovigilance & Clinical Safety.',
      techonologies: ['html', 'css', 'javascript', 'gulp', 'nunjucks', 'sass', 'materializecss', 'jquery'],
      background: biologitbackground,
      image: biologitlogo,
      link: 'https://www.biologit.com/#comp-l89yfvnt1'
    },
    bahiavistarestort: {
      header: 'Bahia Vista Resort booking and branding website with activities and amenities located in Masbate Philippines..',
      techonologies: ['html', 'css', 'javascript', 'gulp', 'nunjucks', 'sass', 'tailwindcss', 'jquery'],
      background: '#FFFFFF',
      image: bahiavistarestortlogo,
      link: 'https://bahiavistaresort.com/'
    },
    rpm: {
      header: 'RPM is an efficient way to monitor patients in their homes, or in a Facility. RPMs let healthcare providers obtain data from patients from the comfort of their place by using RPM devices to monitor.',
      techonologies: ['html', 'css', 'javascript', 'gulp', 'nunjucks', 'sass', 'materializecss', 'jquery', 'momentjs', 'chartjs', 'php', 'laravel'],
      background: rpmbackground,
      image: rpmlogo,
      link: 'https://www.zoomrpm.com/'
    },
    smartchoices: {
      header: 'Provides access Labour Market Information and analysis, Further Education & Training information, and resources.',
      techonologies: ['html', 'css', 'javascript', 'sass', 'octobercms', 'jquery', 'momentjs', 'php', 'laravel'],
      background: smartchoicesbackground,
      image: smartchoiceslogo,
      link: 'https://www.smartchoices.ie/'
    },
    managedpmo: {
      header: 'ManagedPMO’s cloud capabilities and feature set will allow you to keep your residents and staff well-informed. Your staff will be able to communicate remotely, and make compliance reports with ease.',
      techonologies: ['html', 'css', 'javascript', 'sass', 'gulp', 'nunjucks', 'materializecss', 'jquery', 'momentjs', 'chartjs'],
      background: '#004D73',
      image: managedpmologo,
      link: 'https://managedpmo.com/'
    },
    cebuswimmingpools: {
      header: 'Cebu Swimming Pool branding and supplier website for swimming pools equipments located in Cebu Philippines.',
      techonologies: ['html', 'css', 'javascript', 'sass', 'wordpress', 'jquery', 'momentjs',],
      background: '#FFFFFF',
      image: cebuswimmingpoollogo,
      link: 'http://cebuswimmingpools.com/'
    }
  }


  return  <div id="work" className="pt-[75px] px-[16px] md:px-[58px] lg:px-[100px] xl:px-[180px] 2xl:px-[300px]  mb-[100px]">
            <div className="text-white text-[26px] font-bold tracking-wide mb-[10px]">Work</div>
            <div className="text-white">
              Here are some projects I've worked. Build from scratch as a Frontend and some CMS freelance works.
            </div>
            <div className='py-[50px] grid grid-cols-techonolgy-layout gap-[20px]'>
              <Project {... projects.biologit}></Project>
              <Project {... projects.smartchoices}></Project>
              <Project {... projects.rpm}></Project>
              <Project {... projects.bahiavistarestort}></Project>
              <Project {... projects.managedpmo}></Project>
              <Project {... projects.cebuswimmingpools}></Project>
            </div>
          </div>
}

export default Work;