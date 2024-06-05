import React, { useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

const sections = [
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'uploading-image', title: 'Uploading Image' },
  { id: 'selecting-from-gallery', title: 'Selecting from Gallery' },
  { id: 'taking-a-picture', title: 'Taking a Picture' },
  { id: 'running-diagnosis', title: 'Running Diagnosis' },
  { id: 'visualizing-results', title: 'Visualizing Results' },
  { id: 'visualizing-results-recommendations', title: 'Visualizing Results and Recommendations' },
];

const Guide = () => {
  const scrollViewRef = useRef();
  const translateX = useSharedValue(300); // Adjust according to the width of the map

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(translateX.value) }],
    };
  });

  const scrollToSection = (sectionId) => {
    const sectionIndex = sections.findIndex((section) => section.id === sectionId);
    if (sectionIndex !== -1) {
      scrollViewRef.current.scrollTo({ y: sectionIndex * 100, animated: true });
      translateX.value = 300;
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView ref={scrollViewRef} style={styles.scrollView}>
          {sections.map((section) => (
            <View key={section.id} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {/* Add section content here */}
            </View>
          ))}
        </ScrollView>

        <PanGestureHandler onGestureEvent={(event) => {
          if (event.nativeEvent.translationX > 0) {
            translateX.value = event.nativeEvent.translationX;
          }
        }}>
          <Animated.View style={[styles.map, animatedStyle]}>
            <TouchableOpacity style={styles.mapIcon} onPress={() => (translateX.value = 0)}>
              <Text style={styles.mapIconText}>⇦</Text>
            </TouchableOpacity>
            {sections.map((section) => (
              <TouchableOpacity key={section.id} onPress={() => scrollToSection(section.id)}>
                <Text style={styles.mapText}>{section.title}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  map: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 300, // Adjust width as needed
    backgroundColor: 'white',
    borderLeftWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
  },
  mapIcon: {
    position: 'absolute',
    left: -30,
    top: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 15,
    padding: 5,
  },
  mapIconText: {
    fontSize: 18,
  },
  mapText: {
    marginVertical: 10,
    fontSize: 16,
  },
});

export default Guide;
