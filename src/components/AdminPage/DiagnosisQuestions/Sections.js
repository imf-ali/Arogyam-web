import ExpandableItem from "../../../utils/ExpandableItem";
import SectionItem from "./SectionItem";

const Sections = ({ diagnosisJsonConfig, handleChange, formData }) => {
  return (
    <div>
      {diagnosisJsonConfig?.sections.map((section) => (
        <ExpandableItem title={section.sectionTitle}>
          <SectionItem 
            key={section.sectionId}
            section={section}
            handleChange={handleChange} 
            formData={formData} 
          />
        </ExpandableItem>
      ))}
    </div>
  );
}

export default Sections;