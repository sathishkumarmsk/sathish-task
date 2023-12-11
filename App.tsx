import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import Card from './Card';

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
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: () => {},
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const renderItem = ({item}: {item: DataItem}) => {
    return (
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.cardContainer, animatedStyle]}>
          <Card title={item.title} rate={item.rate} />
        </Animated.View>
      </PanGestureHandler>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  cardContainer: {
    zIndex: 1,
  },
});

export default App;
