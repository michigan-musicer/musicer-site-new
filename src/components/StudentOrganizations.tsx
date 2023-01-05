import '../Main.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 

const StudentOrganizations = (props: showCategorySpecifier) => {
  const showAllByDefault = props.showWhat === showCategory.All;

  return (
    <li className={'list-group-item list-group-item-fade list-group-item-parent-collapsible ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}>
      <h1 className='text-center p-2'>Student organization participation</h1>
      <ul>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Game || showAllByDefault}>
          <h3>WolverineSoft</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Member</p>
            <p className='fst-italic'>Aug 2022 - present</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>WolvSec</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Member</p>
            <p className='fst-italic'>Aug 2022 - present</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>University of Michigan Machine Learning Theory Reading Group</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Founder</p>
            <p className='fst-italic'>Jan 2022 - May 2022</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>University of Michigan Computer Vision Reading Group</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Member</p>
            <p className='fst-italic'>Sept 2021 - May 2022</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Teach || showAllByDefault}>
          <h3>Michigan Student Artificial Intelligence Lab</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Team lead, education</p>
            <p className='fst-italic'>May 2020 - May 2021</p>
          </div>
          <p>i did this thing. I continued to participate as a member until May 2022.</p>
        </li>
      </ul>
    </li>    
  )
}

export default StudentOrganizations;