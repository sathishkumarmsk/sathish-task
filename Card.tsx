import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

interface props {
  title: string;
  rate: string;
}

const Card = ({title, rate}: props) => {
  const [discountCode, setDiscountCode] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateDiscountCode = (code: any) => {
    return code.trim() !== '';
  };

  const handleTextChange = (text: any) => {
    setDiscountCode(text);
    setIsValid(validateDiscountCode(text));
  };
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.details}>
          <Text>{title}</Text>
          <Text>${rate}/mo</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.details}>
          <Text>Subscription Details</Text>
          <Text>^</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.details}>
          <Text>What about my family members</Text>
          <Text>i</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.details}>
          <Text>Discount Code</Text>
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
        <View style={styles.line} />
        <View style={styles.details}>
          <Text>Are you active veteran or dependant(spouse or chaild)</Text>
          <Text>i</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#454341',
    padding: 20,
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
});

export default Card;
