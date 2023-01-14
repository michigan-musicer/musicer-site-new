import '../Main.scss';
import './Person.scss';
import { showCategory, showCategorySpecifier } from '../include/showCategory'; 
import Apex from '../imgs/Apex_legends_cover.jpg'
import Elden from '../imgs/Elden_Ring.jpg'
import Age2 from '../imgs/age2.jpg'
import FTL from '../imgs/multiverse.jpg'
import Coeur from '../imgs/coeur.jpg'
import Korb from '../imgs/korb.jpg'
import Yorushika from '../imgs/yorushika.jpg'
import Hu from '../imgs/hu.jpg'
import Beach from '../imgs/beach.png'
import Dog from '../imgs/dog.png'
import Dumpling from '../imgs/dumpling.jpg'
import Wii from '../imgs/wii.jpg'

const Person = (props: showCategorySpecifier) => {
  const showPerson = props.showWhat === showCategory.Person;
  return ( 
    <div className='person-group border-primary rounded' aria-expanded={showPerson}>
      {/* <li className={props.showWhat === showCategory.Person ? 'list-group-item list-group-item-fadein' : 'list-group-item list-group-item-fadeout'}>*/}
      <li className={'list-group-item list-group-item-fade ' + props.categoryColor} aria-expanded={showPerson}> 
        <h1 className='text-center p-3'>Fun facts!</h1>
        <ul>
          <li>
            <p>I started university as a clarinet performance major! I don't play as much anymore, but I still listen to a range of different genres of music.</p>
          </li>
          <li>
            <p>I once biked around the south of Michigan in a 400-something mile loop. It started to feel kind of long at the end...</p>
          </li>
          <li>
            <p>I got a PS5 for free! Thanks Bungie :D</p>
          </li>
          <li>
            <p>My preferred method of fixing my sleep schedule is staying up later and later until I overlap to the right hours. Falling asleep responsibly is not one of my strong suites :]</p>
          </li>
          <li>
            <p>I got <a href='https://www.amazon.com/MINISO-Marshmallow-Stuffed-Plushies-Children/dp/B09FSWG46Z'>this plushie</a> on a visit to California and it now sits on my desk. His name is sushi cat and he is my precious son</p>
          </li>
        </ul>
      </li>
      <li className={'list-group-item list-group-item-fade ' + props.categoryColor} aria-expanded={showPerson}>
        <h1 className='text-center p-3'>Some favorite video games</h1>
        <div className='row'>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={FTL}/>
            <em className='person-image-caption mx-auto d-block text-center'>FTL: Faster than Light (Multiverse mod)</em>
            <p className='person-image-caption mx-auto d-block text-center'>My favorite space ethics simulator (with a side of big dakka). Multiverse mod is ESSENTIAL for veteran players!</p>
          </div>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={Elden} />
            <em className='person-image-caption mx-auto d-block text-center'>Elden Ring</em>
            <p className='person-image-caption mx-auto d-block text-center'>My first FromSoft game! Pretty hard. Why is it always pickle?</p>
          </div>
          <div className='w-100'/>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={Age2} />
            <em className='person-image-caption mx-auto d-block text-center'>Age of Empires II</em>
            <p className='person-image-caption mx-auto d-block text-center'>My first game series ever! Still love champ flooding the AI</p>
          </div>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={Apex} />
            <em className='person-image-caption mx-auto d-block text-center'>Apex Legends</em>
            <p className='person-image-caption mx-auto d-block text-center'>Best battle royale game to play at 1am with your friends on Friday night when none of you have any brain cells left and you cry-laugh messing with the random-queue sweaty Wraith player</p>
          </div>
        </div>
      </li>
      <li className={'list-group-item list-group-item-fade ' + props.categoryColor} aria-expanded={showPerson}>
        <h1 className='text-center p-3'>Some favorite musicians</h1>
        <div className='row'>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={Korb}/>
            <em className='person-image-caption mx-auto d-block text-center'>Darren Korb</em>
            <p className='person-image-caption mx-auto d-block text-center'>There are so many awesome video game soundtracks, but Darren consistently produces some of my favorite work. </p>
          </div>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={Yorushika} />
            <em className='person-image-caption mx-auto d-block text-center'>Yorushika</em>
            <p className='person-image-caption mx-auto d-block text-center'>I've been falling in love with a lot of J-pop. Yorushika is probably my favorite if I had to pick one -- <em>Hitchcock</em> is a perfect song.</p>
          </div>
          <div className='w-100'/>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={Coeur} />
            <em className='person-image-caption mx-auto d-block text-center'>Cœur de pirate</em>
            <p className='person-image-caption mx-auto d-block text-center'>Cœur de pirate does the same thing as a lot of Japanese artists where the lyrics are a bit depressing but the beat is an absolute bop...not sure what that says about me 🤪</p>
          </div>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={Hu} />
            <em className='person-image-caption mx-auto d-block text-center'>The Hu</em>
            <p className='person-image-caption mx-auto d-block text-center'>MONGOLIAN THROAT SINGING METAL WOOOOOOOOOOOOOOOOOOOO</p>
          </div>
        </div>
      </li>
      {/* <li className={'list-group-item list-group-item-fade ' + props.categoryColor} aria-expanded={props.showWhat !== showCategory.Person}>
        <h1 className='text-center p-3'>Statistics</h1>
      </li> */}
      <li className={'list-group-item list-group-item-fade ' + props.categoryColor} aria-expanded={showPerson}>
        <h1 className='text-center p-3'>Me having fun</h1>
        <div className='row'>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={Wii}/>
            <p className='person-image-caption mx-auto d-block text-center'>My cursed Mii on my friend's console. He wasn't supposed to look like a cat-man thing, I just wanted to put his eyes somewhere stupid</p>
          </div>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={Dog} />
            <p className='person-image-caption mx-auto d-block text-center'>Not my dog but my friend's. We were dropping her off at someone else's place on the way to the airport and she apparently gets carsick, so it was my job to pat her head and keep her comfortable :D</p>
          </div>
          <div className='w-100'/>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={Dumpling} />
            <p className='person-image-caption mx-auto d-block text-center'>For my graduation party in 2021, I made dumplings with my friends. We did not practice making dumplings beforehand. Very tiring.</p>
          </div>
          <div className='col-sm'>
            <img className='mx-auto d-block' src={Beach} />
            <p className='person-image-caption mx-auto d-block text-center'>Seeing the Pacific for the first time!</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Person;