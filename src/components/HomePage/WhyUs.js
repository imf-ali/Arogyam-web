import { useSelector } from "react-redux";
import { webState } from "../../store/WebDataContext";

const WhyUs = () => {
  const { whyUsData } = useSelector(webState);

  return (
    <div>
      <h2>Why Arogyam</h2>
      {whyUsData.map((data, ind) => <div key={ind}>{data}</div>)}
    </div>
  );
}

export default WhyUs;