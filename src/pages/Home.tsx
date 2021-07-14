import React, { useEffect, useState } from 'react';
import {
   Text,
   StyleSheet,
   SafeAreaView,
   TextInput,
   FlatList,
 } from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';
 
interface SkillData {
    id: string;
    name: string;
}
 
export default function Home(){
    const [ newSkill, setNewSkill ] = useState('');
    const [ mySkills, setMySkills ] = useState<SkillData[]>([]);
    const [ greeting, setGreeting ] = useState('');
    
    function handleAddNewSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills([...mySkills, data]);
        setNewSkill('');
    }

    useEffect(() => {
        let currentHours = new Date().getHours();

        if (currentHours <= 12 && currentHours >= 6) {
           setGreeting('Good morning');
        }else if (currentHours >= 13 && currentHours < 18) {
            setGreeting('Good afternoon');
        }else {
            setGreeting('Good night');
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome, João</Text>
            <Text style={styles.greetings}>{greeting}</Text>

            <TextInput 
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
                value={newSkill}
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
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <SkillCard skill={item.name}/>
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
    greetings: {
        color: '#FFF'
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