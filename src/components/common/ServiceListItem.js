import React from 'react'
import { ListItem } from "react-native-elements";
import { Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class ServiceListItem extends React.Component {
    render() {
        const { id, title, typeLabel, floor, getRoute, pointId } = this.props;

        return (
            <ListItem
                title={
                    <Text style={ styles.fioText }>
                        { title }
                    </Text>
                }
                subtitle={ `${ typeLabel } ${ floor ? floor + ' этаж' : '' }` }
                subtitleStyle={ { color: 'black' } }
                containerStyle={ { borderBottomWidth: 0 } }
                rightElement={ (!!pointId) && (
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