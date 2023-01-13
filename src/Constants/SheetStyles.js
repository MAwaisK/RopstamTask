import React from 'react';
import { StyleSheet } from 'react-native';
import Imports from './Imports';

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  SheetContainer: {
    height: Imports.ScreenDimensions.height(0.7),
    borderRadius: 10,
    backgroundColor: Imports.Colors.grey,
    width: Imports.ScreenDimensions.height(4),
    alignSelf: 'center',
    marginTop: Imports.ScreenDimensions.height(1.2),
  },
  SheetCustomContainer:{
    borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: Imports.Colors.white,
          flex: 2
  },
  SetRowsiseProfileTextandCloseIcon: {
    flexDirection: 'row',
    marginBottom: Imports.ScreenDimensions.height(2.5),
    justifyContent: 'space-between',
    marginTop: Imports.ScreenDimensions.height(2),
  },
  ScrollViewContainer:{
    flex:1,
  },
  ScrollViewContentContainer:{
    flexGrow:1
  },
  FieldValueText:{
    color:Imports.Colors.black,
  },
  DropDownButton: {
    width: '100%',
    height: Imports.ScreenDimensions.height(4.5),
    backgroundColor: '#FFF',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Imports.Colors.grey,
  },
  DropDownButtonText: {
    textAlign: 'left',
    fontSize: Imports.ScreenDimensions.totalSize(1.4),
  },
  Dropdown:{
    width: '90%',
  },
  DropdownText:{
    fontSize: 12,
  },
  ProfileText: {
    color: '#0F0F0F',
    fontSize: Imports.ScreenDimensions.totalSize(2.0),
  },
  CardWithPenOuterView: {
    alignSelf: 'center',
  },
  SubTitleContainer: {
    marginTop: Imports.ScreenDimensions.height(1),
    marginBottom: Imports.ScreenDimensions.height(3),
  },
  PleaseFillText: {
    color: '#333333',
    fontSize: Imports.ScreenDimensions.totalSize(1.6),
    textAlign: 'auto',
  },
  TextInputOuterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Imports.ScreenDimensions.height(1),
    borderWidth: 1,
    borderColor: 'rgba(218, 220, 224, 1)',
    height: Imports.ScreenDimensions.height(4.5),
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: Imports.ScreenDimensions.height(1),
    borderRadius: 5,
  },
  placeholderText: {
    color: '#5F6368',
    fontSize: Imports.ScreenDimensions.totalSize(1.5),
  },
  TextInputStyle: {
    height: Imports.ScreenDimensions.height(5),
    textAlignVertical: 'top',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Imports.Colors.grey,
    borderRadius: 7,
    color:Imports.Colors.black,
    fontSize:Imports.ScreenDimensions.totalSize(1.4)
  },
  RegNoView: {
    height: Imports.ScreenDimensions.height(5),
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Imports.Colors.grey,
    borderRadius: 7,
    justifyContent: 'center',
  },
  LabelText: {
    color: '#9BA0A4',
    fontSize: Imports.ScreenDimensions.totalSize(1.5),
    marginVertical: Imports.ScreenDimensions.height(1),
  },
  setRowWise: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(218, 220, 224, 1)',
    padding: Imports.ScreenDimensions.height(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  setRowiseDocPicandText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FileNameText: {
    color: '#000000',
    fontSize: Imports.ScreenDimensions.totalSize(1.4),
    marginLeft: 7,
  },
  FileSizeText: {
    color: '#BABABA',
    fontSize: Imports.ScreenDimensions.totalSize(1.2),
    marginLeft: 6,
    marginTop: 2,
  },
  ConfirmButtonContainer: {
    flexDirection: 'row',
    backgroundColor: '#1967D7',
    marginVertical: Imports.ScreenDimensions.height(3),
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 5,
    alignItems: 'center',
  },
  ConfirmButtonText: {
    color: '#FFFFFF',
    fontSize: Imports.ScreenDimensions.totalSize(1.8),
    marginLeft: 5,
  },
  setRowWisedocpicandbigplus: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(218, 220, 224, 1)',
    padding: Imports.ScreenDimensions.height(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  setRowiseDocPicandText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FileNameText: {
    color: '#000000',
    fontSize: Imports.ScreenDimensions.totalSize(1.4),
    marginLeft: 7,
  },
  FileNameText: {
    color: '#000000',
    fontSize: Imports.ScreenDimensions.totalSize(1.4),
    marginLeft: 7,
  },
  FileSizeText: {
    color: '#BABABA',
    fontSize: Imports.ScreenDimensions.totalSize(1.2),
    marginLeft: 6,
    marginTop: 2,
  },
  ButtonViewStyle: {
    borderRadius: 40,
    marginHorizontal: Imports.ScreenDimensions.height(4),
    height: Imports.ScreenDimensions.height(5.5),
    backgroundColor: 'rgba(4,34,70,1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Imports.ScreenDimensions.height(2),
  },
  ButtonText: {
    fontSize: Imports.ScreenDimensions.totalSize(1.8),
    color: 'rgba(255,255,255,1)',
    fontWeight: '500',
  },
});
export default Styles;
