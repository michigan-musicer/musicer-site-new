import '../Main.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 

const Failures = (props: showCategorySpecifier) => {
  const alwaysShowFailures = false;
  const showFailures = props.showWhat === showCategory.Person || props.showWhat === showCategory.All;

  return (
    <li className={'list-group-item list-group-item-fade list-group-item-parent-collapsible ' + props.categoryColor} aria-expanded={showFailures}>
      <h1 className='text-center p-2'>Where I've failed</h1>
      <p className='fst-italic'>This is an idea I borrowed from Courtney Brousseau, <a href='https://courtneybrousseau.github.io/'>whose personal page can be found here</a>. I read a story about his life and ended up at his page, where he had a section describing some of his failures. It struck me at the time because I was dealing with serious self-esteem issues relating to perfectionism and imposter syndrome; even though I never knew him, it helped to see someone share their imperfections so openly. In hope of giving others that same reassurance and keeping Courtney's ideas alive, I want to share some of my failures as well.</p>
      <p><b>Original description from Courtney:</b> <em>Quick note: All too often, especially at places like Berkeley, people highlight their successes and hide their failures. I believe this contributes to impostor syndrome and a toxic culture of one-upmanship. I personally have failed many times at many things. I hope by sharing some of my failures here, I can help change the perception about failure both for myself and others.</em></p>
      <ul>
        <li className='list-group-item-fade' aria-expanded={showFailures}>
          <h3>Failing to publicize <em>Brilliant Little Fires</em></h3>
          <p>My project <a className='fst-italic' href='https://www.brilliantlittlefires.com/'>Brilliant Little Fires</a> took about 150 hours and my first ever all-nighter to complete. Those 150 hours were mostly spent on carefully crafting interview questions, conducting interviews, and putting everything together in a website. However, I had zero social media presence to back up my work and did not make an effort to build one before releasing the project. I believe the project had a significant impact on me and my interviewees; however, owing to the lack of effort put into publicity as well as the difficult-to-digest format of the website, it did next to nothing to bring awareness or impact the student culture of the university like I had hoped.</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={showFailures}>
          <h3>Failing to sustain interest for the University of Michigan Machine Learning Theory Reading Group</h3>
          <p>I did a fairly good job at starting Michigan's Machine Learning Theory Reading Group, getting buy-in from both graduate students and professors. However, participation fell off sharply after the first two meetings, as I had not presented material that aligned with attendees' interests. More importantly, I had no way of making students present weekly papers. Most reading groups are run by a professor who can make their students present; as a master's student, I did not have that same authority. I was already overloading myself that semester, and I failed to address these shortcomings in time to keep the group active into future semesters.</p>
        </li>
        <li className='list-group-item-fade' aria-expanded={showFailures}>
          <h3>Creating a COVID podcast without researching how podcasting works</h3>
          <p>When the COVID-19 pandemic hit, I felt compelled to do something to help my peers cope with social isolation, so I took it upon myself to start podcasting. I did not and still do not know how to run a podcast, and instead of doing some research and talking with people, I went ahead and uploaded YouTube videos of slightly edited clips of me talking for one hour. Needless to say, this didn't gain much traction (except from the YouTube bots, thanks jerry0219!) and I stopped after five episodes.</p>
        </li>
      </ul>
    </li>    
  )
}

export default Failures;