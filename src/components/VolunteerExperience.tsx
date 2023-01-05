import '../Main.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 

const VolunteerExperience = (props: showCategorySpecifier) => {
  const showAllByDefault = props.showWhat === showCategory.All;

  return (
    <li className={'list-group-item list-group-item-fade list-group-item-parent-collapsible ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}>
      <h1 className='text-center p-2'>Volunteering</h1>
      <ul>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.Teach || showAllByDefault}>
          <h3>EngIn</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>English teacher</p>
            <p className='fst-italic'>Aug 2022 - Dec 2022</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Teach || showAllByDefault}>
          <h3>AI4ALL</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Teacher</p>
            <p className='fst-italic'>Jun 2022</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.All}>
          <h3>Meals on Wheels</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Volunteer</p>
            <p className='fst-italic'>Jan 2020 - March 2020</p>
          </div>
          <p>i did this thing</p>
        </li>
      </ul>
    </li>    
  )
}

export default VolunteerExperience;