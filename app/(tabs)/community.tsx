import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import anonprofile from "../../assets/images/anonprofile.png"
export default function App() {
  const QuestionCard = () => (
    <View style={styles.card}>
      <View style={styles.userInfo}>
        <Image source={anonprofile} style={{ height: 47, width: 47, objectFit: 'contain' }} />
        <View style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <Text style={styles.anonymousText}>Anonymous</Text>
          <Text style={styles.usernameText}>What is your spy Username</Text>
        </View>
      </View>
      <Text style={styles.questionText}>
        What are your favorite ways to relax and destress
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Type your something..."
        placeholderTextColor="#888"
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.header}>
          <Text style={styles.headerText}>
            We can connect and learn more from various past experiences and journeys
          </Text>
        </View>

        <TextInput style={{ height: 105, marginHorizontal: 15, marginTop: 20, textAlign: 'center', borderWidth: 1, borderColor: '#0EA9DE', borderRadius: 5 }} placeholder='Your message here' />
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
          {[1, 2, 3, 4].map((_, index) => (
            <QuestionCard key={index} />
          ))}
        </ScrollView>
      </ScrollView>

      {/* <View style={{ borderColor: '#E4258F', borderWidth: 1,marginTop:20 }}>
          <Text>
          </Text>
        </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    padding: 20,
    backgroundColor: '#E4258F',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderColor: '#0EA9DE',
    borderWidth: 1
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    gap: 10

  },
  anonymousText: {
    // color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
  },
  usernameText: {
    color: '#E4258F',
    fontSize: 14,
    marginBottom: 5,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E4258F',
    borderRadius: 5,
    padding: 10,
    color: '#333',
  },
});