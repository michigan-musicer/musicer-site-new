import React, { useState } from 'react';
import '../Main.scss';
import './Person.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 
import { preProcessFile } from 'typescript';



const Person = (props: showCategorySpecifier) => {
  return ( 
    <div className='list-group list-group-flush border-primary rounded'>
      {/* <li className={props.showWhat === showCategory.Person ? 'list-group-item list-group-item-fadein' : 'list-group-item list-group-item-fadeout'}>*/}
      <li className={'list-group-item list-group-item-fade ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}> 
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
      <li className={'list-group-item list-group-item-fade ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}>
        <h1 className='text-center p-3'>Some favorite games</h1>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm'>
              <ul className='person-game-list'>
                <li>
                  <img src='' />
                  <p>My favorite space ethics simulator (with a side of big dakka)</p>
                </li>
                <li>
                  <img src='' />
                  <p>My first FromSoft game! it's kicking my butt plz halp</p>
                </li>
              </ul>
            </div>
            <div className='col-sm'>
              <ul className='person-game-list'>
                <li>
                  <img src='' />
                  <p>My first game series ever! Still love champ flooding the AI</p>
                </li>
                <li>
                  <img src='' />
                  <p>Best battle royale game to play at 1am with your friends on Friday night when none of you have any brain cells left</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className={'list-group-item list-group-item-fade ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}>
        <h1 className='text-center p-3'>Some favorite music</h1>
      </li>
      {/* <li className={'list-group-item list-group-item-fade ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}>
        <h1 className='text-center p-3'>Statistics</h1>
      </li> */}
      <li className={'list-group-item list-group-item-fade ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}>
        <h1 className='text-center p-3'>Pictures</h1>
      </li>
    </div>
  );
}

export default Person;