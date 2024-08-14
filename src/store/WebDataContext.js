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
        "_id": "66b7547d7867c8ea5ba8afa7",
        "name": "John Doe",
        "imageUrl": "https://marketplace.canva.com/EAFJZNEDZts/1/0/1600w/canva-before-after-minimal-skincare-instagram-post-rqntQbLvNgI.jpg",
        "desc": "This is a testimonial description.",
        "isTestimonial": true,
        "videoUrls": [
          "https://www.youtube.com/watch?v=TO-_3tck2tg",
          "https://www.youtube.com/watch?v=syFZfO_wfMQ"
        ]
      },
      {
        "_id": "66b754e07867c8ea5ba8afa9",
        "name": "Jack Danielle",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dkjCCekjrJhumHJL4g76mVzDIgkKDg-bhQ&s",
        "desc": "This is another testimonial description.",
        "isTestimonial": false,
        "videoUrls": [
          "https://www.youtube.com/watch?v=I-QfPUz1es8",
          "https://www.youtube.com/watch?v=syFZfO_wfMQ"
        ]
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