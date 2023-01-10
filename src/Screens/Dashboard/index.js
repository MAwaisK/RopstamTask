import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { height, totalSize } from 'react-native-dimension';
import SelectDropdown from 'react-native-select-dropdown';
import colors from '../../Constants/Colors';
import DashboardStyles from './styles';

const Dashboard = () => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
  ];


  const DATADropDown = ["Egypt", "Canada", "Australia", "Ireland"];

  const RenderCardView = (item, index) => {
    return (
      <View style={[DashboardStyles.CardContainer]}>
        <View style={{}}>

        </View>

      </View>
    )
  }

  const renderDropDown = () => {
    return (
      <SelectDropdown
        // renderDropdownIcon={() => <DownArrow />}
        dropdownStyle={
          {
            //   borderWidth: 2,
            // borderColor: '#F65836',
            width: '67.5%'
          }
        }
        rowTextStyle={{
          fontSize: 12,
        }}
        defaultButtonText={`Select Category`}
        buttonTextStyle={{
          textAlign: 'left',
          color: '#B1A9A9',
          fontSize: totalSize(1.4),
        }}
        buttonStyle={{
          //borderWidth: 0,
          //   borderColor: '#F65836',
          width: '75%',
          height: height(3.4),
          flexDirection: 'row-reverse',
          backgroundColor: '#FFF',
          paddingRight: 0,
        }}
        data={DATADropDown}
        onSelect={(item, index) => {
          setSelectedCategory(item)
        }}
      />
    );
  };


  return (
    <>
      <SafeAreaView style={DashboardStyles.SafeArea} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={[DashboardStyles.Container]}>

          <View style={[DashboardStyles.Header]}>
            <>

              <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center',marginTop:height(1.5) }}>
                <Text style={{ color: colors.white, fontSize: totalSize(2), fontWeight: 'bold', }}>{'Category'} </Text>
                {renderDropDown()}
              </View>
              <View style={{justifyContent: 'center',alignItems: 'center', marginTop: height(3)}}>
                <Text style={{ color: colors.white, fontSize: totalSize(2.7), fontWeight: 'bold' }}>{`${selectedCategory}`} </Text>
              </View>
            </>
          </View>


          <View style={{ marginTop: -height(5) }}>
            <FlatList
              data={DATA}
              // keyExtractor={(item, index) => item + index}
              //ListEmptyComponent={() => NoTransaction()}
              //onRefresh={() => OrderHistory()}
              //refreshing={loading}
              renderItem={({ item, index }) => RenderCardView(item, index)}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Dashboard