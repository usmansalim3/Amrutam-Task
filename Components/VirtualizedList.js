import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VirtualizedList = ({children}) => {
    return (
        <FlatList
            style={{backgroundColor:'#fff',flex:1}}
            overScrollMode='never'
            contentContainerStyle={{paddingHorizontal:0}}
            showsVerticalScrollIndicator={false}
            data={[]}
            keyExtractor={() => "key"}
            renderItem={null}
            ListHeaderComponent={
                <>{children}</>
            }
        />
    )
}

export default VirtualizedList

const styles = StyleSheet.create({})