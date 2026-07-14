import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

const coreCourses = [
  'CS 504 Software Engineering',
  'CS 506 Programming for Computing',
  'CS 519 Cloud Computing Overview',
  'CS 533 Computer Architecture',
  'CS 547 Secure Systems and Programs',
  'CS 622 Discrete Math and Algorithms for Computing',
  'DS 510 Artificial Intelligence for Data Science',
  'DS 620 Machine Learning & Deep Learning',
];

const depthOfStudyCourses = [
  'CS 624 Full-Stack Development - Mobile App',
  'CS 628 Full-Stack Development - Web App',
];

const capstoneCourse = 'CS 687 Computer Science Capstone';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.icon}
        />
      </View>

      <Text style={styles.label}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>
          Core Requirements (24 credits)
        </Text>
      </View>
      <View style={styles.courseList}>
        {coreCourses.map((course) => (
          <Text key={course} style={styles.courseText}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>
          Depth of Study (6 Credits)
        </Text>
      </View>
      <View style={styles.courseList}>
        {depthOfStudyCourses.map((course) => (
          <Text key={course} style={styles.courseText}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Capstone (3 Credits)</Text>
      </View>
      <View style={styles.courseList}>
        <Text style={styles.courseText}>{capstoneCourse}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    width: 250,
    height: 250,
  },
  label: {
    fontSize: 16,
    marginHorizontal: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 4,
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
  },
  sectionHeader: {
    backgroundColor: '#ffff00',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  sectionHeaderText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  courseList: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  courseText: {
    fontSize: 16,
    marginBottom: 6,
  },
});

export default CoreComponents;