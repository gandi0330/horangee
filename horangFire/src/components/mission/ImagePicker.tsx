import React, {useState} from 'react';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {color, font} from '../../styles/colorAndFontTheme';
import imagesPath from '../../assets/image/constants/imagesPath';

const styles = StyleSheet.create({
  photo: {
    backgroundColor: 'rgba(255, 247, 234, 0.69)',
    borderRadius: 20,
    width: '65%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    overflow: 'hidden',
  },
  photoTxt: {
    fontFamily: font.beeBold,
    fontSize: 16,
    textAlign: 'center',
    color: color.BROWN_47,
  },
  preview: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'MainMission'>;
}

const ImagePicker = ({navigation}: Props) => {
  const [fileImage, setFileImage] = useState('');

  //   async function takeImageHandler() {
  //     const result = await launchCamera({
  //       mediaType: 'photo',
  //       cameraType: 'back',
  //       saveToPhotos: false,
  //       quality: 0.5,
  //     });
  //     console.log(result);
  //   }

  function showPicker() {
    // 모달 창 보여주기
    navigation.navigate('CameraModal');
  }

  return (
    <TouchableOpacity style={styles.photo} onPress={showPicker}>
      {fileImage === '' && (
        <Text style={styles.photoTxt}>
          사진을 업로드하면 {'\n'} 추가 포인트를 받을 수 있어!{'\n'}
          (? 버튼으로 자세한 사항을 확인해봐!)
        </Text>
      )}
      {fileImage !== '' && (
        <Image style={styles.preview} source={{uri: fileImage}} />
      )}

      {/* {!isMain && (
        <Text style={styles.photoTxt}>
          공통 미션에는 {'\n'} 사진 업로드가 필수야!{'\n'}
          (? 버튼으로 자세한 사항을 확인해봐!)
        </Text>
      )} */}
    </TouchableOpacity>
  );
};
export default ImagePicker;
