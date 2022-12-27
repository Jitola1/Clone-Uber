import React from 'react';
import { Image } from 'react-native';

import Kratos from '../assets/Kratos.png';
const imagem = Image.resolveAssetSource(Kratos).uri;

export default function Player() {
    return (
        <Image
            source={{ uri: imagem }}
        />
    );
}

