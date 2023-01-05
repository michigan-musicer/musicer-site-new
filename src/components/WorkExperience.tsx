import '../Main.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 

const WorkExperience = (props: showCategorySpecifier) => {
  const showAllByDefault = props.showWhat === showCategory.All;

  return (
    <li className={'list-group-item list-group-item-fade list-group-item-parent-collapsible ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}>
      <h1 className='text-center p-2'>Professional experience</h1>
      <ul>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Teach || showAllByDefault}>
          <h3>University of Michigan, EECS 280 | Intro to Data Structures and Algorithms</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Graduate student instructor</p>
            <p className='fst-italic'>Aug 2022 - present</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Game || showAllByDefault}>
          <h3>Bungie</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Software engineer, platforms & partnerships</p>
            <p className='fst-italic'>May 2022 - Aug 2022</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Teach || showAllByDefault}>
          <h3>University of Michigan, EECS 545 | Intro to Data Structures and Algorithms</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Graduate student instructor</p>
            <p className='fst-italic'>Jan 2022 - May 2022</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>Ford Motor Company</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Software engineer, autonomous vehicles</p>
            <p className='fst-italic'>May 2021 - Aug 2021</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>DEVIATE: Data Elements from Video using Impartial Algorithm Tools for Extraction</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Team lead, research</p>
            <p className='fst-italic'>Jan 2020 - Dec 2021</p>
          </div>
          <p>i did this thing</p>
        </li>
      </ul>
    </li>    
  )
}

export default WorkExperience;