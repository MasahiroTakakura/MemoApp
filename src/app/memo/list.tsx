import { View, StyleSheet } from 'react-native'
// import { Feather } from '@expo/vector-icons';

import Header from '../../components/header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton';
import Icon from '../../components/icon';

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>
        {/* <Feather name='plus' size={40} /> */}
        <Icon name='plus' size={40} color='#ffffff' />
      </CircleButton>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  }
})

export default Index;
