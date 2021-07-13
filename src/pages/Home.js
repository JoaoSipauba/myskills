import React, { useState } from 'react';
import {
   Text,
   StyleSheet,
   SafeAreaView,
   TextInput,
   FlatList,
 } from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';
 
 
export default function Home(){
    const [ newSkill, setNewSkill ] = useState('');
    const [ mySkills, setMySkills ] = useState([]);
    
    function handleAddNewSkill(){
        setMySkills([...mySkills, newSkill]);
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome, João</Text>

            <TextInput 
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />
            <Button 
                title="Add" 
                onPress={handleAddNewSkill}
            />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            <FlatList 
                showsVerticalScrollIndicator={false}
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <SkillCard skill={item}/>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: 10,
        marginTop: 30,
        borderRadius: 8
    }
})