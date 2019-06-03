import React, { Fragment } from 'react'
import { ListItem } from "react-native-elements";
import { Text, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';


class PersonListItem extends React.PureComponent {

    render() {
        const { id, fio, avatarUrl, faculties, url, openUrl, getRoute } = this.props;

        return (
            <ListItem
                onPress={ () => openUrl(url) }
                roundAvatar
                title={
                    <Text style={ styles.fioText }>
                        { fio }
                    </Text>
                }
                subtitle={ (
                    <View>
                        {
                            faculties.map((item, index) => (
                                <Fragment key={ index.toString() }>
                                    <Text>
                                        { item.position }
                                    </Text>
                                    <Text>
                                        { item.chair }
                                    </Text>
                                </Fragment>
                            ))
                        }
                    </View>
                ) }
                subtitleStyle={ { color: 'black' } }
                leftAvatar={ { source: { uri: avatarUrl } } }
                containerStyle={ { borderBottomWidth: 0 } }
                chevron
                rightElement={ (
                    <Entypo
                        name="location"
                        size={ 32 }
                        color={ "#26c2ed" }
                        onPress={ () => getRoute(id, fio) }
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

export default PersonListItem;