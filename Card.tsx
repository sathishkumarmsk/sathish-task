import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

interface props {
  title: string;
  rate: string;
}

const Card = ({title, rate}: props) => {
  const [discountCode, setDiscountCode] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const validateDiscountCode = (code: any) => {
    return code.trim() !== '';
  };

  const handleTextChange = (text: any) => {
    setDiscountCode(text);
    setIsValid(validateDiscountCode(text));
  };
  const handleCardPress = () => {
    setIsSelected(!isSelected);
  };
  return (
    <View
      style={[styles.card, isSelected && styles.selectedCard]}
      onTouchStart={handleCardPress}>
      <View style={styles.cardContent}>
        <View style={styles.details}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>${rate}/mo</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.details}>
          <Text style={styles.text}>Subscription Details</Text>
          <Text style={styles.text}>^</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.details}>
          <Text style={styles.text}>What about my family members</Text>
          <Text style={styles.text}>i</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.details}>
          <Text style={styles.text}>Discount Code</Text>
          <View>
            <TextInput
              style={[styles.input, {borderColor: isValid ? 'green' : 'red'}]}
              placeholder="Enter Discount Code"
              onChangeText={handleTextChange}
              value={discountCode}
            />
            {!isValid && (
              <Text style={styles.errorText}>Invalid Discount Code</Text>
            )}
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.details}>
          <Text style={styles.text}>
            Are you active veteran or dependant(spouse or chaild)
          </Text>
          <Text style={styles.text}>i</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  card: {
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 10,
  },
  cardContent: {
    margin: 16,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  selectedCard: {
    backgroundColor: '#604141', // Change the color as needed
  },
});

export default Card;
