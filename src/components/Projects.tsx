import '../Main.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 

const Projects = (props: showCategorySpecifier) => {
  const showAllByDefault = props.showWhat === showCategory.All;

  return (
    <li className={'list-group-item list-group-item-fade list-group-item-parent-collapsible ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person && props.showWhat !== showCategory.Teach}>
      <h1 className='text-center p-2'>Projects</h1>
      <ul>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>Punchline generator with variable-level humor</h3>
            <p className='fst-italic'>Nov 2022 - Dec 2022</p>
          </div>
          <p>With a partner, I created a punchline generator that, given a joke setup and a desired humor level, produces jokes with differing humor levels. We created two models: one that accepts discrete humor levels from a finite range of inputs and one that accepts humor levels from a continuous range of inputs.</p>
          <p><b>Github: </b><a href='https://github.com/ABKor752/Joke-Generator'>https://github.com/ABKor752/Joke-Generator</a></p>
        </li>
        {/* <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>TSS loop tiling enhancement in MLIR</h3>
            <p className='fst-italic'>Nov 2022 - Dec 2022</p>
          </div>
          <p>i did this thing</p>
          <p><b>Github: </b> <a href=''></a></p>
        </li> */}
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Game || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>Basic rust game engine for platforming</h3>
            <p className='fst-italic'>Oct 2022</p>
          </div>
          <p>I worked with a friend during a 48-hour game jam on creating a basic platforming shooter in the Rust programming language. I worked on physics (with a lot of glitches -- it was my first time working with physics so give me some slack :P), player input and movement, and shooting. Plus the art sprites but please ignore those, I'm not an artist.</p>
          <p><b>Github: </b><a href='https://github.com/isaacph/wgputest'>https://github.com/isaacph/wgputest</a></p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>Brilliant Little Fires</h3>
            <p className='fst-italic'>Apr 2022 - Jul 2022</p>
          </div>
          <p>I interviewed 40+ undergraduates, graduate students, and alumni about their experiences with imposter syndrome and burnout, then transcribed and anonymized the interviews, summarized them, and uploaded them to <a href='https://brilliantlittlefires.com/'>a website published here</a>. To date, this is the most determined I've ever worked on a project.</p>
          <p><b>Github: </b><a href='https://github.com/michigan-musicer/bis'>https://github.com/michigan-musicer/bis</a></p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Game || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>Virtual memory manager</h3>
            <p className='fst-italic'>Nov 2021</p>
          </div>
          <p>I worked in a three-person team to create a virtual memory manager mapping from virtual memory to physical memory that correctly handles page faults, memory protection, and eviction with different physical memory sizes.</p>
          <p><b>Github: </b>None; private class project</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Game || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>Threading library</h3>
            <p className='fst-italic'>Oct 2021</p>
          </div>
          <p>I worked in a three-person team to create data structures that simulate threading on a multicore CPU, including functionality like locking, interruption, swapping, and scheduling.</p>
          <p><b>Github: </b>None; private class project</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>Personal website</h3>
            <p className='fst-italic'>Aug 2021</p>
          </div>
          <p>I used ReactJS and CSS to create my original portfolio website. The source code for this website was somewhat lower-level and jankier than the current version, which uses Bootstrap.</p>
          <p><b>Github: </b><a href='https://github.com/michigan-musicer/musicer-website'>https://github.com/michigan-musicer/musicer-website</a></p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Game || showAllByDefault}>
          <div className='d-flex justify-content-between'>
            <h3>Search engine</h3>
            <p className='fst-italic'>Jan 2021 - April 2021</p>
          </div>
          <p>I contributed 4,700 lines of code to three major components and the utility library of a distributed multithreaded search engine, which collected a total of 3 TB of data split across more than 30 machines. Along the way, we designed, wrote, and integrated a solution for collecting and using anchor text in ranking that had never been tackled before in the class. This was the best and worst project I ever worked on.</p>
          <p><b>Github: </b>None for now, but let me see if the professor is okay with a project going public. Unfortunately, we did not save our EC2 or Google Cloud configs.</p>
        </li>
      </ul>
    </li>    
  )
  // put a note about the old website being in pure react
}

export default Projects;