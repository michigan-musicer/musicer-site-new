import React, { useState } from 'react';
import '../Main.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 



const Person = (props: showCategorySpecifier) => {
  const [spinSpeed, setSpinSpeed] = useState(0.75);

  const defaultStyles= {
    transition: 'opacity 300ms ease-in-out',
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };
  

  // switch(props.showWhat) {
  //   case showCategory.All:
  //     return <div/>;
  //   case showCategory.Person:
      return ( 
        <ul className='list-group list-group-flush'>
          {/* <li className={props.showWhat === showCategory.Person ? 'list-group-item list-group-item-fadein' : 'list-group-item list-group-item-fadeout'}>*/}
          <li className='list-group-item list-group-item-fade' aria-expanded={props.showWhat === showCategory.Person}> 
            <h1 className='text-center p-3'>Fun facts!</h1>
            <ul>
              <li>
                <h3>University of Michigan, EECS 280 | Intro to Data Structures and Algorithms</h3>
                <div className='d-flex justify-content-between'>
                  <p className='fst-italic'>Graduate student instructor</p>
                  <p className='fst-italic'>Aug 2022 - present</p>
                </div>
                <p>i did this thing</p>
              </li>
            </ul>
          </li>
          <li className='list-group-item'>
            <h1 className='text-center p-3'>Games I play</h1>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-sm'>
                  <ul>
                    <li>
                      <h3>Elden Ring</h3>
                      <div className='d-flex justify-content-begin'>
                        <p className='fst-italic'>Start</p>
                      </div>
                      <p>My first FromSoftware game! </p>
                    </li>
                  </ul>
                </div>
                <div className='col-sm'>
                  <ul>
                    <li>
                      <h3>Elden Ring</h3>
                      <div className='d-flex justify-content-begin'>
                        <p className='fst-italic'>Start</p>
                      </div>
                      {/* <p>My first FromSoftware game! It's kicking my butt plz help</p> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className='list-group-item list-item-spinout'>
            <h1 className='text-center p-3'>Preferred music genres</h1>
          </li>
          <li className='list-group-item list-item-spinout'>
            <h1 className='text-center p-3'>Statistics</h1>
          </li>
          <li className='list-group-item list-item-spinout'>
            <h1 className='text-center p-3'>Pictures</h1>
          </li>
        </ul>
      );
  //   default:
  //     return <div/>
  // } 
}

export default Person;