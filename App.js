import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from './assets/colors/colors';

const height = Dimensions.get('window').height;
const QUOTE_API_URL = 'https://api.quotable.io/random';

const App = () => {
  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const randomQuote = () => {
    setIsLoading(true);
    fetch("https://stoicquotesapi.com/v1/api/quotes/random").then(res => res.json()).then(result => {
      // console.log(result.content);
      setQuote(result.body);
      setAuthor(result.author);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/images/racegreen.png')}
        style={styles.backgroundImage}></ImageBackground>
      <View style={styles.quoteWrapper}>
        <Text
          style={styles.logoText}> 'Stoic'
        </Text>
        <Text
          style={styles.quoteText}> {Quote} 
        </Text>
        <Text
          style={styles.quoteAuthor}> {Author} 
        </Text>
      </View>
      <Image style={styles.vectorImage} source={require('./assets/images/vector.png')}></Image>
      <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={randomQuote}>
          <Text style={styles.buttonText}>New Quote</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.3,
  },
  quoteWrapper: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: -20,
    borderRadius: 25,
  },
  vectorImage:{
    height: 220,
    width: 220,
    position: 'absolute',
    left: 90,
    top: 80,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: colors.raceGreen,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 210,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
  },  
  logoText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 40,
    color: colors.black,
    marginTop: 90,
  },
  quoteText: {
    color: colors.black,
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 0.9,
    fontWeight: '400',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  quoteAuthor: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    color: colors.black,
    marginTop: 10,
  },
});

export default App;