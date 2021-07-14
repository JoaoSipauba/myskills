import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export default function SkillCard({ skill,...rest }: SkillCardProps){
    return(
        <TouchableOpacity 
            style={styles.buttonSkill}
            {...rest}
        >
            <Text style={styles.skill}>
                {skill}
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