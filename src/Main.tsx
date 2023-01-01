import React, { useState } from 'react';
import Kevin from './imgs/kevin.jpg'
import './Main.scss'
// import {  } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Main() {
  enum showCategory {
    All,
    SWE,
    Game,
    Teach,
    Person 
  }
  const [showWhat, setShowWhat] = useState(showCategory.All);

  let person;
  if (showWhat === showCategory.Person) {
    person = 
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'>
        <h1 className='text-center p-3'>Fun facts!</h1>
      </li>
      <li className='list-group-item'>
        <h1 className='text-center p-3'>Games I play</h1>
      </li>
      <li className='list-group-item'>
        <h1 className='text-center p-3'>Preferred music genres</h1>
      </li>
      <li className='list-group-item'>
        <h1 className='text-center p-3'>Statistics</h1>
      </li>
      <li className='list-group-item'>
        <h1 className='text-center p-3'>Pictures</h1>
      </li>
    </ul>
  }
  else {
    person = <div/>
  }

  return (
    <div>
      <header>

      {/* this imports bootstrap css styling */}
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous"
      /> */}
      {/* style sheet for social media buttons */}
      {/* <link rel="stylesheet" href="../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css"></link> */}
      </header>
      <body>
        {/* split intro and portfolio 1:3, horizontally if possible and vertical otherwise */}
        <div className='container-fluid'>
          <div className='row justify-content-md-center'>
            <div className='col-md-4 main-bio'>
              {/* put a sick logo with staff and musicer thing in the middle */}
              <img src={Kevin} className='img-fluid rounded-circle w-75 mx-auto d-block m-3 portrait-border' alt='Kevin Wang'/>
              <div className='btn-group text-center' role={'group'} >
                {/* just do this with matui...no need to make things complicated */}
                {/* <FontAwesomeIcon icon={faLinkedin}/> */}
                {/* <i className='fa-brands fa-github-square'></i> */}
                {/* <button type='button' className='btn color-game m-1'>a game developer</button>
                <button type='button' className='btn color-teach m-1'>a teacher</button>
                <button type='button' className='btn color-person m-1'>a person :)</button> */}
                <LinkedInIcon/>
              </div>
              <p className='text-left'>
                Hey there! I'm Kevin Wang, welcome to my homepage!
              </p>
              {/* put a sick logo with staff and musicer thing in the middle */}
              {/* but like, on the bottom now lol */}
            </div>
            <div className='col-md-8 pl-4 pr-4'>
              <div className='container-fluid p-0'>
                <div className='container-fluid pt-5 pb-3'>
                  <h1 className='text-center'>I am...</h1>
                  <p className='text-center fst-italic'>click a button to filter my portfolio items down to what you're looking for!</p>
                  <div className='btn-group-md w-100 text-center' role={'group'} >
                    <button type='button' onClick={(/* should take in two parameters for set all, set this thing */) => {}} className='btn color-swe m-1'>a software engineer</button>
                    <button type='button' className='btn color-game m-1'>a game developer</button>
                    <button type='button' className='btn color-teach m-1'>a teacher</button>
                    <button type='button' className='btn color-person m-1'>a person :)</button>
                  </div>
                </div>
                {/* this below should only show if person is not selected */}
                <ul className='list-group list-group-flush border-primary'>
                  <li className='list-group-item'>
                    <h1 className='text-center border-top p-2'>Professional experience</h1>
                    <ul>
                      <li>
                        <h3>University of Michigan, EECS 280 | Intro to Data Structures and Algorithms</h3>
                        <div className='d-flex justify-content-between'>
                          <p className='fst-italic'>Graduate student instructor</p>
                          <p className='fst-italic'>Aug 2022 - present</p>
                        </div>
                        <p>i did this thing</p>
                      </li>
                      <li>
                        <h3>Bungie</h3>
                        <div className='d-flex justify-content-between'>
                          <p className='fst-italic'>Software engineer, platforms & partnerships</p>
                          <p className='fst-italic'>May 2022 - Aug 2022</p>
                        </div>
                        <p>i did this thing</p>
                      </li>
                      <li>
                        <h3>a thing i did</h3>
                        <p>i did this thing</p>
                      </li>
                    </ul>
                  </li>
                  <li className='list-group-item'>
                    <h1 className='text-center p-3'>Projects</h1>
                  </li>
                  <li className='list-group-item'>
                    <h1 className='text-center p-3'>Where I've failed</h1>
                  </li>
                  <li className='list-group-item'>
                    <h1 className='text-center p-3'>Education</h1>
                  </li>
                </ul>
                {/* this below should only show if person IS selected */}
                {person}
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