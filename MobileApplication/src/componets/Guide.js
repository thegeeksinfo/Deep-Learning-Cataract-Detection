import React from 'react';
import { ScrollView, Text, View, StyleSheet, Button, Image } from 'react-native';
import Header from './reusable/Header';
import Bottommenu from './reusable/BottomMenu';

const Guide = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.contents}>

        {/* Getting Started */}
        <View style={styles.section}>
          <Text style={styles.header}>1. Getting Started</Text>
          <Text style={styles.paragraph}>
            Welcome to the Cataract Detection App! This application is designed to help you detect cataracts by analyzing eye images. In this guide, you will learn how to upload an image, capture a new image, view the diagnosis results, and get recommendations for optimal usage.
          </Text>
        </View>

        {/* Image Upload */}
        <View style={styles.section}>
          <Text style={styles.header}>2. Image Upload</Text>

          {/* From Gallery */}
          <View style={styles.subsection}>
            <Text style={styles.subheader}>2.1 From Gallery</Text>
            <Text style={styles.paragraph}>
              Follow these steps to upload an eye image from your device's gallery:
            </Text>
            <Text style={styles.paragraph}>
              1. On the home page, tap the "Choose from Gallery" button.
            </Text>
            <Text style={styles.paragraph}>
              2. Allow the app to access your device's storage if prompted.
            </Text>
            <Text style={styles.paragraph}>
              3. Select an eye image from your gallery.
            </Text>
            <Text style={styles.paragraph}>
              4. The selected image will open in a cropping editor. Adjust the image so that the eye pupil is clear and centered, then tap the "Accept" button.
            </Text>
            <Text style={styles.paragraph}>
              5. The image will be displayed on a new page with two buttons: "Diagnose" and "Take Another Picture".
            </Text>
            <Text style={styles.paragraph}>
              6. Tap the "Diagnose" button to send the image for analysis. Wait for the results to be displayed.
            </Text>
            <Text style={styles.paragraph}>
              7. After viewing the results, tap the "Return" button to go back to the home page.
            </Text>
          </View>

          {/* Capture Image */}
          <View style={styles.subsection}>
            <Text style={styles.subheader}>2.2 Capture Image</Text>
            <Text style={styles.paragraph}>
              Follow these steps to capture a new eye image using your device's camera:
            </Text>
            <Text style={styles.paragraph}>
              1. On the home page, tap the "Capture Image" button.
            </Text>
            <Text style={styles.paragraph}>
              2. Allow the app to access your device's camera if prompted.
            </Text>
            <Text style={styles.paragraph}>
              3. Use the camera to take a clear picture of the eye.
            </Text>
            <Text style={styles.paragraph}>
              4. The captured image will open in a cropping editor. Adjust the image so that the eye pupil is clear and centered, then tap the "Accept" button.
            </Text>
            <Text style={styles.paragraph}>
              5. The image will be displayed on a new page with two buttons: "Diagnose" and "Take Another Picture".
            </Text>
            <Text style={styles.paragraph}>
              6. Tap the "Diagnose" button to send the image for analysis. Wait for the results to be displayed.
            </Text>
            <Text style={styles.paragraph}>
              7. After viewing the results, tap the "Return" button to go back to the home page.
            </Text>
          </View>
        </View>

        {/* Visualizing Results */}
        <View style={styles.section}>
          <Text style={styles.header}>3. Visualizing Results</Text>
          <Text style={styles.paragraph}>
            Once the diagnosis is complete, the results will be displayed on the screen. This includes the analyzed image and a message indicating whether cataracts were detected. If cataracts are detected, further details may be provided.
          </Text>
        </View>

        {/* Recommendations */}
        <View style={styles.section}>
          <Text style={styles.header}>4. Recommendations</Text>
          <Text style={styles.paragraph}>
            For the most accurate results, follow these recommendations:
          </Text>
          <Text style={styles.paragraph}>
            - Use a high-resolution image.
          </Text>
          <Text style={styles.paragraph}>
            - Ensure good lighting conditions without glare or shadows.
          </Text>
          <Text style={styles.paragraph}>
            - Make sure the eye is fully open and the pupil is centered in the image.
          </Text>
          <Text style={styles.paragraph}>
            - Avoid any obstructions or reflections in the image.
          </Text>
        </View>

        {/* Conclusion */}
        <View style={styles.section}>
          <Text style={styles.header}>5. Conclusion</Text>
          <Text style={styles.paragraph}>
            The Cataract Detection App is a powerful tool designed to assist in the early detection of cataracts. By following this guide, you can effectively use the app to monitor eye health and take timely action if cataracts are detected. We hope this app serves as a valuable resource in maintaining your eye health.
          </Text>
        </View>
      </ScrollView>
      <Bottommenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contents: {
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    marginBottom: 50,
  },
  section: {
    marginBottom: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
});

export default Guide;
