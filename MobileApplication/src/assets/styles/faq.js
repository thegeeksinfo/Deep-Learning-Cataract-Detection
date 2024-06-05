import { StyleSheet } from "react-native";

export default StyleSheet.create({
    faqcontainer: {
      flex: 1,
    },
    container: {
      padding: 20,
    },
    questionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    question: {
      fontSize: 20,
      fontWeight: 'bold',
      width: '90%',
      color: '#333',
    },
    answer: {
      paddingVertical: 10,
      paddingLeft: 10,
      color: '#444',
      textAlign: 'justify',
      marginRight: 10,
    },
    icon: {
      marginLeft: 20,
    },
  });
  