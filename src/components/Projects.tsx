import '../Main.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 

const Projects = (props: showCategorySpecifier) => {
  const showAllByDefault = props.showWhat === showCategory.All;

  return (
    <li className={'list-group-item list-group-item-fade list-group-item-parent-collapsible ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}>
      <h1 className='text-center p-2'>Projects</h1>
      <ul>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>Punchline generator with variable-level humor</h3>
          <div className='d-flex justify-content-end'>
            <p className='fst-italic'>Nov 2022 - Dec 2022</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>TSS loop tiling enhancement in MLIR</h3>
          <div className='d-flex justify-content-end'>
            <p className='fst-italic'>Nov 2022 - Dec 2022</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>Basic rust game engine for platforming</h3>
          <div className='d-flex justify-content-end'>
            <p className='fst-italic'>Nov 2022 - Dec 2022</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>Virtual memory manager</h3>
          <div className='d-flex justify-content-end'>
            <p className='fst-italic'>Nov 2021</p>
          </div>
          <p>i did this thing</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>Threading library</h3>
          <div className='d-flex justify-content-end'>
            <p className='fst-italic'>Oct 2021</p>
          </div>
          <p>i did this thing</p>
        </li>
      </ul>
    </li>    
  )
  // put a note about the old website being in pure react
}

export default Projects;