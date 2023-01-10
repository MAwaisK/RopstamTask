import React, { useState, useEffect, } from 'react';
import { View, ScrollView, TouchableOpacity, Text, SafeAreaView, TextInput } from 'react-native';
import SavedSheetStyles from '../styles/SavedSheetStyles';
import SavedSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from '@react-navigation/native';
import { height, totalSize, width } from 'react-native-dimension';

const SavedSheetUI = (props) => {
    const navigation = useNavigation();

    return (
        <SavedSheet
            ref={props.SavedRBSheetPassRef()}
            // closeOnDragDown={true}
            closeOnPressMask={true}
            // onOpen={() => onOpenSheet()}
            customStyles={{
                wrapper: {
                    backgroundColor: 'rgba(0,0,0,0.45)',
                },
                container: {
                    // borderTopLeftRadius: 30,
                    // borderTopRightRadius: 30,
                    backgroundColor: '#FFFFFF',
                    flex: 0.2
                },
                draggableIcon: {
                    backgroundColor: "#E4E5E5"
                }
            }}
        >

            <SafeAreaView style={{ flex: 1 }}>
                <View style={[SavedSheetStyles.mainContainer]}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('SavedList')
                        props.SavedRBSheetPassRef().current.close()
                    }}>
                        <View style={[SavedSheetStyles.ButtonContainer]}>
                            <Text style={[SavedSheetStyles.ButtonText, {
                                color: 'white',
                            }]}>SAVED CURRENT RESULTS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SavedSheet>
    )
}
export default SavedSheetUI;