import '../Main.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 

const Education = (props: showCategorySpecifier) => {
  const alwaysShowEducation = true;
  
  return (
    <li className={'list-group-item list-group-item-fade list-group-item-parent-collapsible ' + props.categoryColor} aria-expanded={alwaysShowEducation}>
      <h1 className='text-center p-2'>Education</h1>
      <ul>
        <li className='list-group-item-fade' aria-expanded={alwaysShowEducation}>
          <h3>University of Michigan - Ann Arbor</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Master's of Science and Engineering, Computer Science and Engineering</p>
            <p className='fst-italic'>Jan 2022 - expected May 2023</p>
          </div>
          <p><b>GPA:</b> 4.00</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={alwaysShowEducation}>
          <h3>University of Michigan - Ann Arbor</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Bachelor's of Science and Engineering, Computer Science and Engineering</p>
            <p className='fst-italic'>Sep 2019 - Dec 2021</p>
          </div>
          <p><b>GPA:</b> 3.95, <em>summa cum laude</em></p>
        </li>
      </ul>
      <h2 className='text-center p-1'>Academic awards</h2>
      <ul>
        <li className='list-group-item-fade' aria-expanded={alwaysShowEducation}>
          <div className='d-flex justify-content-between'>
            <h4>Fulbright Scholar - semifinalist</h4>
            {/* <p className='fst-italic'>Jan 2023</p> */}
          </div>
        </li>
        <li className='list-group-item-fade' aria-expanded={alwaysShowEducation}>
          <div className='d-flex justify-content-between'>
            <h4>James B. Angell Scholar</h4>
            {/* <p className='fst-italic'>2019 - 2021</p> */}
          </div>
        </li>
        <li className='list-group-item-fade' aria-expanded={alwaysShowEducation}>
          <div className='d-flex justify-content-between'>
            <h4>Dean's List</h4>
            {/* <p className='fst-italic'>2019 - 2021</p> */}
          </div>
        </li>
        <li className='list-group-item-fade' aria-expanded={alwaysShowEducation}>
          <div className='d-flex justify-content-between'>
            <h4>University Honors</h4>
            {/* <p className='fst-italic'>2019 - 2021</p> */}
          </div>
        </li>
        <li className='list-group-item-fade' aria-expanded={alwaysShowEducation}>
          <div className='d-flex justify-content-between'>
            <h4>William J. Branstrom Freshman Prize</h4>
            {/* <p className='fst-italic'>Jan 2023</p> */}
          </div>
        </li>
      </ul>
    </li>    
  )
}

export default Education;