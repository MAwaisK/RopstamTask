

import React from 'react';
import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import colors from '../../../Colors/Colors';

const SelectUnitInventorySheetStyles = StyleSheet.create({
  setAlinment: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    marginTop: 6,
  },
  headerView: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height(2),
  },
  setRowWise: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '57%',
  },
  ThreeStepOuterView: {
    marginRight: 8,
    top: 5,
  },
  SlectDateText: {
    fontFamily: 'Roboto-Medium',
    fontSize: totalSize(2.1),
    color: '#000000',
    marginLeft: 5,
  },
  DateHeaderView: {
    height: height(5.3),
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height(2.2),
    marginBottom: height(1.2),
  },
  ScrollStyle: {
    flex: 1,
    
  },
  ScrollContainerStyle: {
    flexGrow: 1,
    marginTop:height(1)
  },
  DateHeaderText: {
    // fontFamily: 'Roboto-Regular',
    fontSize: totalSize(1.9),
    color: '#000000',
  },
  datePickeStyle: {
    //borderWidth: 1,
    width: width(99),
    height: height(23),
    alignSelf: 'center',
  },
  AppFilterButtonView: {
    height: height(4.7),
    backgroundColor: '#075595',
    width: width(30),
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
    //marginLeft: height(25),
    borderRadius: 8,
  },
  ButtonTextText: {
    // fontFamily: 'Roboto-Regular',
    fontSize: totalSize(1.8),
    color: colors.white,
  },
  FlatListMainView: {
    height: height(4.5),
    marginBottom: height(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxlabelText: {
    fontSize: totalSize(1.7),
    // fontFamily:'Roboto-Medium',
    color: 'black',
    marginLeft: width(6),
  },
  CheckBoxOuterView: {
    width: '100%',
    height: height(6),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
export default SelectUnitInventorySheetStyles;