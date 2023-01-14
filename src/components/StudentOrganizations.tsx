import '../Main.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 

const StudentOrganizations = (props: showCategorySpecifier) => {
  const showAllByDefault = props.showWhat === showCategory.All;

  return (
    <li className={'list-group-item list-group-item-fade list-group-item-parent-collapsible ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}>
      <h1 className='text-center p-2'>Student organizations</h1>
      <ul>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Game || showAllByDefault}>
          <h3>WolverineSoft</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Member</p>
            <p className='fst-italic'>Aug 2022 - present</p>
          </div>
          <p>I participated in the Fall 2022 48-Hour Pumpkin Game Jam with some friends, creating a custom mini-game engine in Rust and making a simple platformer.</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>WolvSec</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Member</p>
            <p className='fst-italic'>Aug 2022 - present</p>
          </div>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>University of Michigan Machine Learning Theory Reading Group</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Founder</p>
            <p className='fst-italic'>Jan 2022 - May 2022</p>
          </div>
          <p>I created, advertised, presented papers for, and helped lead discussions on research papers in machine learning theory for the Winter 2022 semester. "Machine learning theory" is a bit vacuous; in practice most papers focused on optimization, generalization, and in general the statistical side of machine learning.</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>University of Michigan Computer Vision Reading Group</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Member</p>
            <p className='fst-italic'>Sep 2021 - May 2022</p>
          </div>
          <p>Besides participating in weekly presentations, I presented two papers (<em>Contrastive Learning with Hard Negative Samples</em> and <em>Scaling Neural Tangent Kernels via Sketching and Random Features</em>) to PhD students and professors in the University of Michigan's computer vision labs.</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Teach || showAllByDefault}>
          <h3>Michigan Student Artificial Intelligence Lab</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Team lead, education</p>
            <p className='fst-italic'>May 2020 - May 2021</p>
          </div>
          <p>I kickstarted an education initiative for the organization by creating and revising a curriculum of introductory machine learning lessons; my work is visible at <a href='http://msail.github.io/education/'>msail.github.io/education/</a> as of Jan 2023. I continued to participate as a member until May 2022.</p>
        </li>
      </ul>
    </li>    
  )
}

export default StudentOrganizations;