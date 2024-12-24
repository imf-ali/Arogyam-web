import Banner from '../components/HomePage/Banner';
import Faqs from '../components/HomePage/Faqs';
import Feedback from '../components/HomePage/Feedback';
import HomeBody from '../components/HomePage/HomeBody';
import PatientVoice from '../components/HomePage/PatientVoice';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Best Homeopathy Clinic in Manpur, Gaya | Arogyam Clinic</title>
        <meta name="title" content="Best Homeopathy Clinic in Manpur, Gaya | Arogyam Clinic" />
        <meta name="title" content="Natural Healing in Gaya, Bihar | Arogyam Homeopathy Clinic" />
        <meta name="title" content="Homeopathic Treatment in Manpur, Gaya | Arogyam Clinic" />

        <meta name="description" content="Experience safe and effective homeopathic treatments at Arogyam Clinic in Manpur, Gaya. Specializing in natural remedies for holistic health." />
        <meta name="description" content="Discover the power of homeopathy at Arogyam Clinic, Gaya. Treat chronic and acute conditions naturally in Manpur, Bihar." />
        <meta name="description" content="Your trusted homeopathy clinic in Manpur, Gaya. Arogyam Clinic offers natural healing solutions tailored to your health needs." />

        <meta name="keywords" content="Homeopathy Clinic Manpur, Homeopathic Treatment Gaya, Natural Remedies Bihar, Holistic Healing Manpur, Alternative Medicine Gaya, Homeopathic Doctor Manpur, Natural Treatment Gaya, Arogyam Clinic Bihar, Homeopathy Specialist Manpur, Homeopathic Medicine Gaya" />
        <meta name="keywords" content="Homeopathy Clinic in Manpur, Homeopathic Doctor in Gaya, Natural Treatment Clinic in Bihar, Alternative Medicine in Gaya, Holistic Healing in Manpur, Homeopathy Specialist in Gaya, Natural Healing Solutions Bihar, Chronic Illness Treatment in Manpur, Homeopathic Consultation Gaya, Best Homeopathy Clinic Bihar" />
        <meta name="keywords" content="Homeopathy Clinic Near Bodhgaya, Best Homeopathic Doctor in Magadh Region, Natural Healing Center in South Bihar, Alternative Medicine Clinic in Gaya District, Homeopathy for Rural Health in Bihar" />
        <meta name="keywords" content="Affordable homeopathy treatment in Manpur Gaya, Natural remedies for chronic diseases in Gaya, Best homeopathy doctor near Manpur, Bihar, Homeopathic medicine for allergies in Gaya Bihar, Holistic and natural treatments for pain management in Gaya, Homeopathy for children in Manpur, Gaya, Top-rated homeopathic clinic in Gaya Bihar, Homeopathy for women’s health issues in Manpur, Safe alternative to allopathy in Gaya Bihar, Homeopathy for stress and anxiety in Manpur" />

        <meta property="og:title" content="Best Homeopathy Clinic in Manpur, Gaya | Arogyam Clinic" />
        <meta property="og:description" content="Experience safe and effective homeopathic treatments at Arogyam Clinic in Manpur, Gaya. Specializing in natural remedies for holistic health." />
      </Helmet>
      <Banner />
      <HomeBody />
      <PatientVoice />
      <Faqs />
      <Feedback />
    </>
  );
}

export default Home;