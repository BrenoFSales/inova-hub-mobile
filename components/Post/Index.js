import React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, Button, IconButton } from 'react-native-paper';

import Styles from './Styles';

export default function Post() {
    return (
        <Card style={Styles.card}>
            <Card.Title title="Titulo"/>
            <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' }} />
            <Card.Content>
                <Paragraph>Descrição</Paragraph>
            </Card.Content>
            <Card.Actions>
                <IconButton
                    icon="lightbulb-outline"
                    size={20}
                    iconColor='white'
                    containerColor='orange'
                />
                <IconButton
                    icon="comment"
                    size={20}
                    iconColor='white'
                    containerColor='orange'
                />
                <IconButton
                    icon="share"
                    size={20}
                    iconColor='white'
                    containerColor='orange'
                />
            </Card.Actions>
        </Card>
        
    );
}