import React, { Component } from 'react';
import { Button, View, useWindowDimensions, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Menu,
    Provider,
    Divider
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

//import icons
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export function Drawercontent(props) {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>James Amos</Title>
                                <Caption style={styles.caption}>CG capregsoft</Caption>
                            </View>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        style={{ color: 'white' }}
                        icon={({ size }) => (
                            <FontAwesome
                                name="cube"
                                size={size}
                                color='white'
                            />
                        )}
                        onPress={() => {
                            props.navigation.navigate('DashboardScreen')
                        }}
                        label="Dashboard"
                        labelStyle={{ color: 'white' }}
                    />

                    <Provider>
                        <View
                            style={styles.label}>
                            <Menu
                                visible={visible}
                                onDismiss={closeMenu}
                                anchor={<DrawerItem icon={({ size }) => (
                                    <FontAwesome
                                        name="diamond"
                                        size={size}
                                        color='white'
                                    />
                                )}
                                    onPress={() => { }}
                                    label="PAGES" labelStyle={{ color: 'white' }} />}>
                                <Menu.Item onPress={() => { }} title="Item 1" />
                                <Menu.Item onPress={() => { }} title="Item 2" />
                                <Divider />
                                <Menu.Item onPress={() => { }} title="Item 3" />
                            </Menu>
                        </View>
                    </Provider>
                    <DrawerItem
                        style={styles.label}
                        icon={({ size }) => (
                            <FontAwesome
                                name="diamond"
                                size={size}
                                color='white'
                            />
                        )}
                        onPress={() => { props.navigation.navigate('Widget') }}
                        label="Widget"
                        labelStyle={{ color: 'white' }}
                    />

                    <DrawerItem
                        style={styles.label}
                        icon={({ size }) => (
                            <AntDesign
                                name="piechart"
                                size={size}
                                color='white'
                            />
                        )}
                        onPress={() => { props.navigation.navigate('Charts') }}
                        label="Charts"
                        labelStyle={{ color: 'white' }}
                    />
                    <DrawerItem
                        style={styles.label}
                        icon={({ size }) => (
                            <FontAwesome
                                name="calendar"
                                size={size}
                                color='white' />
                        )}
                        onPress={() => { props.navigation.navigate('Calender') }}
                        label="Calender"
                        labelStyle={{ color: 'white' }}
                    />

                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    style={styles.label}
                    icon={({ color, size }) => (
                        <FontAwesome
                            name="sign-out"
                            size={size}
                            color={color}
                            onPress={() => { }} />
                    )}
                    label="Sign Out"
                />

            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 20,
        marginTop: 3,
        fontWeight: 'bold',
        color: 'white'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: 'white'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
        color: 'white'
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'white',
        borderTopWidth: 1,
    },
    preferrence: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    Toptitle: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    label: {
        color: 'white'
    }
});