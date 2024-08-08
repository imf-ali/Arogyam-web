import { createSlice } from "@reduxjs/toolkit";

const web = createSlice({
  name: 'webdata',
  initialState: {
    whyUsData: [
      'Expertise in Homeopathy',
      'Natural and Holistic Treatments',
      'Personalized Care',
      'Comprehensive Health Solutions',
      'Modern Facilities and Technology',
      'Educational Resources',
      'Positive Patient Experiences',
      'Accessibility and Convenience'
    ],
    testimonials: [
      {
        name: "John Doe",
        testimonial: "I've been using their services for over a year now, and I can confidently say they never disappoint. The team is incredibly professional and always goes the extra mile to ensure I'm satisfied. I highly recommend them to anyone looking for top-tier service.",
        image_url: "https://pyxis.nymag.com/v1/imgs/4e5/1f7/a917c50e70a4c16bc35b9f0d8ce0352635-14-tom-cruise.rsquare.w400.jpg"
      },
      {
        name: "Jane Smith",
        testimonial: "My experience with this company has been nothing short of exceptional. From the moment I reached out, they were responsive and attentive to my needs. The level of expertise they bring to the table is impressive, and they consistently deliver results that exceed my expectations. I appreciate their dedication to customer satisfaction and look forward to continuing our partnership.",
        image_url: "https://pyxis.nymag.com/v1/imgs/4e5/1f7/a917c50e70a4c16bc35b9f0d8ce0352635-14-tom-cruise.rsquare.w400.jpgg"
      },
      {
        name: "Alex Johnson",
        testimonial: "Working with this team has been a game-changer for my business. They have a keen understanding of the market and always provide valuable insights that help me stay ahead of the competition. Their innovative approach and commitment to excellence have significantly improved my operations. I'm grateful for their support and highly recommend their services.",
        image_url: "https://pyxis.nymag.com/v1/imgs/4e5/1f7/a917c50e70a4c16bc35b9f0d8ce0352635-14-tom-cruise.rsquare.w400.jpg"
      },
      {
        name: "Maria Garcia",
        testimonial: "I had the pleasure of collaborating with this company on several projects, and each time, they have exceeded my expectations. Their creative solutions and strategic thinking have been instrumental in driving our success. The team is always professional, approachable, and willing to go above and beyond to ensure we achieve our goals. It's been a fantastic experience, and I highly recommend them.",
        image_url: "https://pyxis.nymag.com/v1/imgs/4e5/1f7/a917c50e70a4c16bc35b9f0d8ce0352635-14-tom-cruise.rsquare.w400.jpg"
      },
      {
        name: "Michael Brown",
        testimonial: "The level of service I received from this company is unparalleled. They took the time to understand my specific needs and delivered tailored solutions that perfectly addressed my challenges. Their expertise and dedication to quality are evident in everything they do. I couldn't be happier with the results and look forward to working with them again in the future.",
        image_url: "https://pyxis.nymag.com/v1/imgs/4e5/1f7/a917c50e70a4c16bc35b9f0d8ce0352635-14-tom-cruise.rsquare.w400.jpg"
      }
    ],
    faqs: [
      {
        question: "What services do you offer?",
        answer: "We offer a wide range of services including graphic design, social media management, digital marketing, SEO, and advertising campaigns on platforms like Google and Facebook."
      },
      {
        question: "How can I contact customer support?",
        answer: "You can contact our customer support team via email at support@example.com or call us at (123) 456-7890. We are available Monday to Friday from 9 AM to 6 PM."
      },
      {
        question: "What is your pricing structure?",
        answer: "Our pricing varies depending on the specific services and scope of the project. We offer customized quotes based on your needs. Please contact us for a detailed proposal."
      },
      {
        question: "Do you offer any guarantees?",
        answer: "Yes, we offer a satisfaction guarantee. If you're not happy with our services, we will work with you to make it right or provide a refund according to our terms and conditions."
      },
      {
        question: "How long does it take to complete a project?",
        answer: "The timeline for project completion depends on the complexity and size of the project. Typically, small projects take 1-2 weeks, while larger projects can take up to 1-3 months. We always aim to meet your deadlines."
      },
    ],
  },
  reducers: {},
})

export const webReducer = web.reducer;

export const webState = state => state.webReducer;