import { StyleSheet } from 'react-native';
import { height, totalSize } from 'react-native-dimension';
import { width } from 'react-native-dimension';
import { colors, fontFamily } from '../../../../constants';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useRef } from 'react';
import { GradientButton, PrimaryImage, Spacer, TinyTitle, Wrapper } from '../../../../components';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { AppImages } from '../../../../assets';
import { dummyLocations } from '../../../../utilities/dummyData';

export const MapFilteredComponent = ({
    markerCoordinates,
    onPressPin
}) => {
    const mapRef = useRef();
    return (
        <Wrapper style={styles.mapContainer}>
            <MapView
                ref={mapRef}
                provider={
                    Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
                }
                style={styles.map}
                region={{
                    latitude: markerCoordinates?.latitude ?? 37.78825,
                    longitude: markerCoordinates?.longitude ?? -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}>
                {dummyLocations
                    ? dummyLocations.map((item, index) => (
                        <Marker
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude,
                            }}
                            key={index}
                            onPress={() => onPressMarker(item)}
                        >
                            <Wrapper>
                                <Wrapper style={{ position: 'absolute', zIndex: 1, flexDirection: 'row', right: 10 }}>
                                    <PrimaryImage size={totalSize(4)} source={item.image} />
                                    <PrimaryImage size={totalSize(4)} source={item.image} />
                                    <PrimaryImage size={totalSize(4)} source={item.image} />
                                </Wrapper>
                                <Spacer isTiny />
                                <PrimaryImage source={AppImages.eventDetails1} size={totalSize(8.8)} />
                            </Wrapper>
                        </Marker>
                    ))
                    : null}

            </MapView>
            <Wrapper flex={.9} />
            <GradientButton title={'Pin On Map'} onPress={onPressPin} />
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height(100),
        position: 'relative',
        width: width(100)
    },

    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    card: {
        paddingHorizontal: width(3),
        paddingVertical: height(1.5),
    },


    totalCount: {
        fontSize: totalSize(1.5),
        color: colors.appTextColor2,
    },
    rowWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    count: {
        marginHorizontal: width(2),
        marginTop: -3,
        fontSize: totalSize(1.4),
    },

    paymentColon: {
        paddingLeft: width(10),
    },
    reviws: {
        fontSize: totalSize(1.7),
        color: colors.appTextColor12,
    },

    mapView: {
        position: 'absolute',
        zIndex: 10,
        top: height(2.5),
        left: width(4),
    },

    chevron: {
        borderRadius: totalSize(5),
        elevation: 0.5,
        shadowColor: colors.appBgColor3,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        padding: totalSize(0.5),
        backgroundColor: colors.appBgColor5
    },
    mapTitle: {
        color: colors.appTextColor2,
        fontFamily: fontFamily.appTextBold,
        fontSize: totalSize(1.9),
        position: 'absolute',
        left: width(34),
        top: height(0.4),
    },
    cardButton: {
        width: width(21),
        paddingHorizontal: width(3),
        paddingTop: height(0.3),
        paddingBottom: height(0.6),
    },
})