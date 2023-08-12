import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';

const Variants = ({item1, navigation}) => {
  console.log(item1,"dataINVarian")
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={item1.variants}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          );
        }}
        keyExtractor={items => items.title}
      />
    </SafeAreaView>
  );
};

export default Variants;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 12,
      marginVertical: 8,
      marginHorizontal: 20,
      borderWidth: 1,
      alignItems: 'center',
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#171717',  
      shadowOpacity: 0.2,  
      shadowRadius: 3, 
      borderRadius:8 
    },
    title: {
      fontSize: 24,
    },
  });