import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetails extends Component{
    render(props){
        return(
            <Card>
                <CardSection>
                    <Text>{this.props.album.title}</Text>
                </CardSection>
            </Card>
        )
    };
};

export default AlbumDetails;