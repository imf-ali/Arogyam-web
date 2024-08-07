import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataContext";
import FaqItem from "./FaqItem";

const Faqs = () => {
  const { faqs } = useSelector(webState);
  return (
    <div>
      <h2>FAQs</h2>
      {faqs.map((data, ind) => <FaqItem key={ind} {...data} />)}
    </div>
  );
}

export default Faqs;