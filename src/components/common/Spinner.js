import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ sizeOfSpinner }) => (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={sizeOfSpinner || 'large'} />
        </View>
    );

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export { Spinner };
