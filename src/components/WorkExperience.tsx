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
          <p>Standard teaching assistant duties for EECS 280 include teaching a two-hour weekly lab, hosting an average of 8 office hours a week, monitoring and answering online forum questions, and proctoring and grading exams. Besides these, I made extra slides about various computer science topics to increase student enthusiasm in computer science, and I practiced pedagogical techniques from my CELTA certification course to enhance the learning experience. This semester, I'm continuing the same duties while taking on an additional mentorship role for a new TA.</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Game || showAllByDefault}>
          <h3>Bungie</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Software engineer, platforms & partnerships</p>
            <p className='fst-italic'>May 2022 - Aug 2022</p>
          </div>
          <p>Working with a stakeholder group of 150+ designers and engineers, I implemented a new WWise Motion-based haptic feedback system for gamepads in the Tiger engine (currently used by the <em>Destiny</em> franchise) that offers 10-100x faster iteration time for designing controller vibration and other haptics. The most valuable part of my internship was mostly non-technical: I took advantage of Bungie's open and supportive engineering culture to chat with and receive advice from some of the most talented software engineers in the games industry. As I wrote on the left sidebar, my internship at Bungie is what convinced me to pursue game engineering.</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Teach || showAllByDefault}>
          <h3>University of Michigan, EECS 545 | Graduate-level Machine Learning</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Graduate student instructor</p>
            <p className='fst-italic'>Jan 2022 - May 2022</p>
          </div>
          <p>The bulk of my work in this position was grading and providing feedback on 15 machine learning research projects throughout the semester; this included ungraded feedback on project proposals, graded feedback on midpoint progress reports, and final grades for poster presentations and final reports at the end of the semester. I also worked with the instructional team to prepare homework assignments, lecture slides, and a midterm exam, and I hosted office hours and answered online forum questions.</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || showAllByDefault}>
          <h3>Ford Motor Company</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Software engineer, autonomous vehicles</p>
            <p className='fst-italic'>May 2021 - Aug 2021</p>
          </div>
          <p>As a full stack engineer, I used Amazon Web Services, Apache Kafka, and React to create a dashboard providing live data updates for a fleet of 200+ vehicles, visible to internal and external customers. The dataflow I set up through Kafka also enabled downstream products to directly read fleet data.</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={props.showWhat === showCategory.SWE || props.showWhat === showCategory.Teach || showAllByDefault}>
          <h3>DEVIATE: Data Elements from Video using Impartial Algorithm Tools for Extraction</h3>
          <div className='d-flex justify-content-between'>
            <p className='fst-italic'>Team lead, research</p>
            <p className='fst-italic'>Jan 2020 - Dec 2021</p>
          </div>
          <p>Working with our group's PI, <a href='https://sites.google.com/umich.edu/carol-flannagan?pli=1'>Carol Flannagan</a>, I managed logistics for the team (agendas, meeting notes, scheduling) and set directions for our research work in representative subsets of medium-sized video datasets that avoid algorithmic bias. I wrote some code myself, including a basic image classification algorithm using keypoint detection, but most technical contributions came from others on the team who at the time had more experience. This position was most analogous to a product management role combined with technical lead, which felt odd at the time but in retrospect provided a useful alternate perspective that I would not have gotten elsewhere.</p>
        </li>
      </ul>
    </li>    
  )
}

export default WorkExperience;