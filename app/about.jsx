import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

const About = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            About Us
        </Text>
      <Text style={styles.aboutcontentHead}>
        This is the about us page where you get the chance to know us better.
      </Text>

      <Link href="/" style={styles.link}>Home Page</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0dfe8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    color: '#A020F8',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
  aboutcontentHead:{
    color:'#A020F0',
    marginHorizontal: 20,
  }
})