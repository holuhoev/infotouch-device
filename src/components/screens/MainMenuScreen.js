import React, { Component } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-native-elements";
import { ImageBackground } from "react-native";
import { Icon } from "react-native-elements";

import { ROUTES } from "../../utils/navigation";
import bg2 from '../../images/bg_2.jpg'
import AnnouncementRunnableLine from "../common/AnnouncementRunnableLine";
import { selectMainScreenIsLoading } from "../../store/selectors/mainScreen";
import { loadChairs } from "../../store/reducers/chairs";
import logo from "../../images/logo.png";
import { loadDevice } from "../../store/reducers/device";


class MainMenuScreen extends Component {

    static navigationOptions = () => {

        return {
            title:       '',
            headerStyle: {
                height: 0
            }
        };
    };

    componentDidMount() {
        this.props.loadDevice('3');
    }

    renderLogo = () => {

        return (
            <View style={ { flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' } }>
                <Image source={ logo } resizeMode={ 'contain' } style={ { height: 200 } }/>
                <ActivityIndicator style={ { paddingTop: 20 } } size="large" color="#0000ff"/>
            </View>
        )
    };

    render() {
        const { loading, title } = this.props;

        if (loading) {
            return this.renderLogo()
        }

        return (
            <ImageBackground
                imageStyle={ {
                    height:  '93%',
                    flex:    1,
                    opacity: 0.8
                } }
                source={ bg2 }
                style={ {
                    flex: 1,
                } }
            >
                <Text
                    style={ {
                        color:           '#FFF',
                        backgroundColor: 'rgba(52,52,52,0.19)',
                        fontSize:        28,
                        fontWeight:      'bold',
                        textAlign:       'center'
                    } }
                >
                    { title }
                </Text>
                <View style={ styles.container }>
                    <Button
                        icon={ {
                            name:  "people",
                            size:  40,
                            color: "white"
                        } }
                        onPress={ () => this.props.navigation.navigate(ROUTES.PersonList) }
                        buttonStyle={ [ styles.cell ] }
                        title={ 'Сотрудники' }
                        titleStyle={ styles.buttonTitle }

                    />
                    <Button
                        icon={
                            <Icon
                                name={ "event-note" }
                                type={ "material" }
                                color={ 'white' }
                                size={ 40 }
                            />
                        }
                        onPress={ () => this.props.navigation.navigate(ROUTES.NewsList) }
                        buttonStyle={ [ styles.cell ] }
                        type='outline'
                        titleStyle={ styles.buttonTitle }
                        title={ 'Новости' }
                    />
                    <Button
                        onPress={ () => this.props.navigation.navigate(ROUTES.Events) }
                        buttonStyle={ [ styles.cell ] }
                        type='outline'
                        titleStyle={ styles.buttonTitle }
                        title={ 'Сегодня, 4 июня' }
                    />
                    <Button
                        onPress={ () => this.props.navigation.navigate(ROUTES.UnitList) }
                        buttonStyle={ [ styles.cell ] }
                        type='outline'
                        titleStyle={ styles.buttonTitle }
                        title={ 'Подразделения' }
                    />
                    <Button
                        onPress={ () => this.props.navigation.navigate(ROUTES.ServiceList) }
                        buttonStyle={ [ styles.cell ] }
                        type='outline'
                        titleStyle={ styles.buttonTitle }
                        title={ 'Услуги' }
                    />
                    <Button
                        onPress={ () => this.props.navigation.navigate(ROUTES.BuildingMap) }
                        buttonStyle={ [ styles.cell ] }
                        type='outline'
                        titleStyle={ styles.buttonTitle }
                        title={ 'Схема' }
                        icon={ (
                            <Icon
                                name={ "my-location" }
                                color={ 'white' }
                                type={ "material" }
                                size={ 40 }
                            />

                        ) }
                    />
                </View>
                <AnnouncementRunnableLine/>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container:   {
        flex:            1,
        backgroundColor: 'rgba(52,52,52,0.2)',
        flexWrap:        'wrap',
        flexDirection:   'row',
        justifyContent:  'space-around',
        alignItems:      'flex-start',
        paddingBottom:   30,
        paddingTop:      140,
        marginTop:       -64
    },
    cell:        {
        height:          200,
        width:           200,
        borderRadius:    15,
        backgroundColor: 'rgba(21,67,238,0.83)',
        marginBottom:    20
    },
    buttonTitle: {
        fontSize: 18,
        color:    '#FFF'
    },
    blue:        {
        backgroundColor: 'rgba(65,105,225,0.9)'
    },
    blue2:       {
        backgroundColor: 'skyblue'
    },
    blue3:       {
        backgroundColor: '#04BAEE'
    },
    darkGrey:    {
        backgroundColor: '#8E8E93'
    },
    title:       {
        color:      '#FFF',
        fontSize:   18,
        fontWeight: 'bold',
        textAlign:  'center'
    }

});


const mapStateToProps = state => {

    return {
        loading: selectMainScreenIsLoading(state),
        title:   state.device.data.title
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    loadChairs,
    loadDevice
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuScreen);