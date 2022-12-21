import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import './style.css';

export default function Landing (){
    return(
        <div className="landing">
            <Logo/>
            <div className="start-sec">
                <img className='land-img' src='https://i.imgur.com/mGkHi1e.png' title="maths sticker" alt="maths" />
                <p>The first step to getting your site on Google is to be sure that Google can find it. The best way to do that is to submit a sitemap. A sitemap is a file on your site that tells search engines about new or changed pages on your site. Learn more about how to build and submit a sitemap.</p>
                <Link to={'/calculator'}><button>Let's gooo! 😸</button></Link>
            </div>
        </div>

    )
}