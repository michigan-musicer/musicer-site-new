import '../Main.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 

const Ceritications = (props: showCategorySpecifier) => {
  const showAllByDefault = props.showWhat === showCategory.All;
  
  return (
    <li className={'list-group-item list-group-item-fade list-group-item-parent-collapsible ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}>
      <h1 className='text-center p-2'>Certifications</h1>
      <ul>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.Teach || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>Certificate in Teaching English to Speakers of Other Languages</h3>
            <p className='fst-italic'>Completed, to be issued</p>
          </div>
          <p>CELTA is the most frequently requested certification by English language teaching employers. The certificate course includes 120+ hours of pedagogical training with 6+ hours of live teaching practice with real students.</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Game || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>Distributed Systems Design Fundamentals</h3>
            <p className='fst-italic'>Issued Aug 2021</p>
          </div>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>Django for Everybody</h3>
            <p className='fst-italic'>Issued May 2021</p>
          </div>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>Deep Learning</h3>
            <p className='fst-italic'>Issued Sep 2020</p>
          </div>
          <p>I completed this course before satisfying the prerequisites to take the University of Michigan's machine learning course.</p>
        </li>
      </ul>
    </li>    
  )
}

export default Ceritications;