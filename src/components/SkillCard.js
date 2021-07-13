import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export default function SkillCard(props){
    return(
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.skill}>
                {props.skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 10
    },
    skill: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})