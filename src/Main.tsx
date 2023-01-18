import React, { useState } from 'react';
import Kevin from './imgs/kevin.jpg'
import './Main.scss'
import { showCategory } from './include/showCategory'; 

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import Person from './components/Person';
import WorkExperience from './components/WorkExperience';
import StudentOrganizations from './components/StudentOrganizations';
import VolunteerExperience from './components/VolunteerExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import Ceritications from './components/Certifications';
import Failures from './components/Failures';

function Main() {
  const [showWhat, setShowWhat] = useState(showCategory.All);
  let categoryColor;
  switch(showWhat) {
    case showCategory.All: {
      // just use the default background color
      categoryColor = 'color-default';
      break;
    }
    case showCategory.SWE: {
      categoryColor = 'color-swe';
      break;
    }
    case showCategory.Game: {
      categoryColor = 'color-game';
      break;
    }
    case showCategory.Teach: {
      categoryColor = 'color-teach';
      break;
    }
    case showCategory.Person: {
      categoryColor = 'color-person';
      break;
    }
    default: {
      categoryColor = 'color-default';
      break;
    }
  }

  const props = {
    categoryColor: categoryColor,
    showWhat: showWhat,
  }


  return (
    <div>
      <header>
      </header>
      <body>
        {/* split intro and portfolio 1:3, horizontally if possible and vertical otherwise */}
        <div className='container-fluid'>
          <div className='row justify-content-md-center'>
            <div className='col-md-4 main-bio'>
              {/* put a sick logo with staff and musicer thing in the middle */}
              <div className='pt-2 pb-1 sticky-top'>
                <img src={Kevin} className='img-fluid rounded-circle w-75 mx-auto d-block m-3 portrait-settings' alt="Kevin Wang's portrait picture"/>
                <div className='d-flex justify-content-center mt-4 mb-2'>
                  <a className='main-spaced-links' href='https://www.linkedin.com/in/kevin-wang-978627196/'><LinkedInIcon fontSize='large'/></a>
                  <a className='main-spaced-links' href='mailto:musicer@umich.edu'><EmailIcon fontSize='large'/></a>
                  <a className='main-spaced-links' href='https://www.brilliantlittlefires.com/'><WhatshotIcon fontSize='large'/></a>
                  {/* put a link here to jekyll blog once that's set up... */}
                  {/* <a className='main-spaced-links' href=''><ArticleIcon fontSize='large'/></a> */}
                </div>
                <p className='text-left'>
                  Hey there! I'm <b>Kevin Wang</b>, welcome to my homepage!
                </p>
                <p className='text-left'>
                  I'm finishing my master's degree in computer science at the University of Michigan. Previously, I completed my bachelor's degree here in computer science alongside a minor in music. <b>Currently, I'm looking for a one-year English teaching position in Japan.</b> Long-term, I'm hoping to find work in the Seattle area as a game engineer.
                </p>
                <p className='text-left'>
                  Owing to an excellent internship at <a href='https://www.bungie.net/'>Bungie</a>, <b>I'm most interested in high-performance, infrastructure-level engineering</b> needed for video games. However, I am a generalist software engineer and can adapt to a variety of problem domains. I am passionate about teaching and putting down a ladder for younger folks; I have held teaching or leadership positions in some form since my second semester at university.
                </p>
              </div>
              {/* put a sick logo with staff and musicer thing in the middle */}
              {/* but like, on the bottom now lol */}
            </div>
            <div className='col-md-8 pl-4 pr-4 pb-4'>
              <div className='container-fluid p-0'>
                <div className='container-fluid pt-3 bg-secondary border-bottom border-start border-end border-2 border-primary rounded-bottom'>
                  <h1 className='text-center'>I am...</h1>
                  <p className='text-center fst-italic'>click a button to filter my portfolio down to what you're interested in!</p>
                  <div className='btn-group-md w-100 text-center' role={'group'} >
                    <button type='button' onClick={() => {showWhat === showCategory.SWE ? setShowWhat(showCategory.All) : setShowWhat(showCategory.SWE)}} className='btn color-swe btn-color-swe m-1'>...a software generalist</button>
                    <button type='button' onClick={() => {showWhat === showCategory.Game ? setShowWhat(showCategory.All) : setShowWhat(showCategory.Game)}} className='btn color-game btn-color-game m-1'>...a game engineer</button>
                    <button type='button' onClick={() => {showWhat === showCategory.Teach ? setShowWhat(showCategory.All) : setShowWhat(showCategory.Teach)}} className='btn color-teach btn-color-teach m-1'>...a teacher</button>
                    <button type='button' onClick={() => {showWhat === showCategory.Person ? setShowWhat(showCategory.All) : setShowWhat(showCategory.Person)}} className='btn color-person btn-color-person m-1'>...a person :)</button>
                  </div>
                  <p className='text-center fst-italic m-0 mt-2 mb-2 main-game-note' aria-expanded={showWhat === showCategory.Game}>Given the nature of modern AAA game engineering, I'm including my work exploring generalist high-performance applications alongside my actual game-specific engineering work.</p>
                </div>
                <ul className='list-group list-group-flush border-primary border border-2 rounded'>
                  <WorkExperience {...props}/>
                  <Projects {...props}/>
                  <StudentOrganizations {...props}/>
                  <VolunteerExperience {...props}/>
                  <Failures {...props}/>
                  <Person {...props}/>
                  <Education {...props}/>
                  <Ceritications {...props}/>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="anonymous"></script>
      </body>
    </div>
  );
} 

export default Main;