const Testimonial = ({ name, testimonial, image_url }) => {
  return (
    <div>
      <div>{testimonial}</div>
      <div>{name}</div>
      <img src={image_url} alt='testimonial' />
    </div>
  );
}

export default Testimonial;