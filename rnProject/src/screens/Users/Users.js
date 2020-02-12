import React from 'react';
import {ScrollView, Text, View, FlatList, SectionList} from 'react-native';
import countryList from '../../utils/countryList';

// const groupedCountryList = countryList.reduce((p, c) => {
//   const key = c.charAt(0);
//   const index = p.findIndex(x => x.title === key);
//   if (index > -1) {
//     return [
//       ...p.slice(0, index),
//       {
//         ...p[index],
//         data: [...p[index], c],
//       },
//       ...p.slice(index + 1),
//     ];
//   }
//   return [
//     ...p,
//     {
//       title: key,
//       data: [c],
//     },
//   ];
// }, []);

const Users = () => {
  // return <SectionList sections={countryList} />;
  return (
    <FlatList
      data={countryList}
      renderItem={({item, index, separators}) => {
        return (
          <View style={{padding: 10}}>
            <Text>{item}</Text>
          </View>
        );
      }}
      keyExtractor={item => `${item}`}
    />
  );
  // return (
  //   <ScrollView>
  //     {countryList.map(x => (
  //       <View key={x} style={{padding: 10}}>
  //         <Text>{x}</Text>
  //       </View>
  //     ))}

  //   </ScrollView>
  // );
};

export default Users;
