import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './Card';
import SortableList from 'react-native-sortable-list';

type DataItem = {
  id: string;
  title: string;
  rate: string;
};

const DATA: DataItem[] = [
  {id: '1', title: 'PLAN ONE', rate: '9.99'},
  {id: '2', title: 'PLAN 2', rate: '19.99'},
  {id: '3', title: 'PLAN 3', rate: '4.99'},
];

const App: React.FC = () => {
  const renderRow = ({data, active}: {data: DataItem; active: boolean}) => {
    return (
      <View style={styles.cardContainer}>
        <Card title={data.title} rate={data.rate} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SortableList
        data={DATA}
        renderRow={renderRow}
        onChangeOrder={nextOrder => console.log(nextOrder)}
        separatorStyle={{display: 'none'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  cardContainer: {
    marginBottom: 0, // Adjust the margin as needed
  },
  sortableList: {
    padding: 0, // Adjust the padding as needed
  },
});

export default App;
