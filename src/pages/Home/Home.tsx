import Button from '../../components/Button/Button';
import LoginButton from '../../components/Login/Login';
import './Home.css';

const Home = () => {
    return (
        <div className={'home'}>
            <h1>Spotifly</h1>
            <p className={'subtitle'}>Spotifly is a Spotify integration that allows you to see to your favorite songs and artists of the plateform.</p>
            <LoginButton text="Login with Spotify" link="/profile"/>
        </div>
    );
};

export default Home;