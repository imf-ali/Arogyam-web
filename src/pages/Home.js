import Banner from '../components/HomePage/Banner';
import Faqs from '../components/HomePage/Faqs';
import Feedback from '../components/HomePage/Feedback';
import HomeBody from '../components/HomePage/HomeBody';
import PatientVoice from '../components/HomePage/PatientVoice';

const Home = () => {
  return (
    <>
      <Banner />
      <HomeBody />
      <PatientVoice />
      <Faqs />
      <Feedback />
    </>
  );
}

export default Home;