import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../assets/styles/faq';
import Header from './reusable/Header';
import BotoomMenu from './reusable/BottomMenu';


const faqs = [
  {
    question: "What is a cataract detection system?",
    answer: "A cataract detection system is a technology that uses image processing and deep learning algorithms to identify the presence of cataracts in the eye by analyzing photographs of the eye."
  },
  {
    question: "How does the AI model detect cataracts?",
    answer: "The AI model is trained on a large dataset of eye images with and without cataracts. It learns to identify patterns and features associated with cataracts and uses this knowledge to detect them in new images."
  },
  {
    question: "What type of images does the system use?",
    answer: "The system uses high-resolution images of the eye, specifically focusing on the lens where cataracts form. These images are typically captured using specialized cameras or smartphones equipped with suitable lenses."
  },
  {
    question: "Is the cataract detection system accurate?",
    answer: "The accuracy of the system depends on the quality of the training data and the sophistication of the deep learning model. State-of-the-art models can achieve high accuracy, often comparable to human experts."
  },
  {
    question: "Can this system replace an eye doctor?",
    answer: "While the system can assist in detecting cataracts, it is not intended to replace a comprehensive examination by an eye doctor. It serves as a diagnostic aid to help identify potential cases that need further medical evaluation."
  },
  {
    question: "How long does it take for the system to analyze an image?",
    answer: "The analysis is usually quick, often taking just a few seconds to a minute, depending on the processing power and the size of the image."
  },
  {
    question: "What happens if a cataract is detected?",
    answer: "If the system detects a cataract, it will typically flag the image for further review by a medical professional, who can confirm the diagnosis and recommend appropriate treatment options."
  },
  {
    question: "Is the system safe to use?",
    answer: "Yes, the system is safe to use as it involves non-invasive image capture. It does not emit any harmful radiation or require contact with the eye."
  },
  {
    question: "Who can use the cataract detection system?",
    answer: "The system can be used by healthcare providers, optometrists, ophthalmologists, and in some cases, directly by patients in a telemedicine setup with proper guidance."
  },
  {
    question: "Do I need any special equipment to use this system?",
    answer: "You need a high-resolution camera capable of capturing clear images of the eye. Some systems may have specific hardware requirements, such as particular camera models or lenses."
  },
  {
    question: "How is patient data protected?",
    answer: "Patient data is protected through encryption and secure storage practices. The system complies with relevant data protection regulations, such as HIPAA, to ensure patient confidentiality."
  },
  {
    question: "Can the system detect other eye conditions?",
    answer: "While this particular system is designed to detect cataracts, similar AI-based systems can be trained to identify other eye conditions, such as glaucoma, diabetic retinopathy, and macular degeneration."
  },
  {
    question: "How can I get access to this cataract detection system?",
    answer: "Access depends on the provider of the system. It may be available through medical institutions, clinics, or as part of telehealth services. Some systems might also offer apps for direct use by patients."
  },
  {
    question: "What training is required to use the system?",
    answer: "Minimal training is required for basic use, such as capturing and uploading images. However, understanding the results and integrating them into a clinical workflow may require some training for healthcare professionals."
  },
  {
    question: "Is the system available for commercial use?",
    answer: "Yes, many AI-based cataract detection systems are available for commercial use by healthcare providers, and some may offer licensing options for broader deployment."
  },
];


const FAQItem = ({ faq, isOpen, onPress }) => (
  <View>
    <TouchableOpacity onPress={onPress} style={styles.questionContainer}>
      <Text style={styles.question}>{faq.question}</Text>
      <Icon
        name={isOpen ? 'chevron-up' : 'chevron-down'}
        color='#000'
        size={20}
        style={styles.icon}

      />
    </TouchableOpacity>
    {isOpen && <Text style={styles.answer}>{faq.answer}</Text>}
  </View>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handlePress = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <View style={styles.faqcontainer}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onPress={() => handlePress(index)}
          />
        ))}
      </ScrollView>
      <BotoomMenu />
    </View>
  );
};


export default FAQ;
