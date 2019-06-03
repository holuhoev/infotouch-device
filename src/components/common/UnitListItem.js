import React  from 'react'
import {  ListItem } from "react-native-elements";
import { Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class UnitListItem extends React.Component {
    render() {
        const { id, title, description, getRoute,schemeElementId } = this.props;

        return (
            <ListItem
                title={
                    <Text style={ styles.fioText }>
                        { title }
                    </Text>
                }
                subtitle={ description }
                subtitleStyle={ { color: 'black' } }
                containerStyle={ { borderBottomWidth: 0 } }
                rightElement={  (!!schemeElementId) && (
                    <Entypo
                        name="location"
                        size={ 32 }
                        color={ "#26c2ed" }
                        onPress={ () => getRoute(id, title) }
                    />
                ) }
            />
        )
    }
}

const styles = StyleSheet.create({
    fioText: {
        fontSize:   24,
        fontWeight: 'bold',
        color:      'black'
    }
});