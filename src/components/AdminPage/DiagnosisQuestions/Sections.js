import SectionItem from "./SectionItem";

const Sections = ({ diagnosisJsonConfig, handleChange, formData }) => {
  return (
    <div>
      {diagnosisJsonConfig?.sections.map((section) => (
        <SectionItem 
          section={section}
          handleChange={handleChange} 
          formData={formData} 
        />
      ))}
    </div>
  );
}

export default Sections;