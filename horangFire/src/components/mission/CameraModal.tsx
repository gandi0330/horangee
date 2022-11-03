import {StyleSheet, View, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Btn from '../common/Btn_long';
import {PermissionsAndroid} from 'react-native';
import {useEffect, useState} from 'react';

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    flex: 1,
  },
  btns: {
    // flexDirection: 'column',
    // flex: 0.5,
  },
  btn: {
    paddingVertical: 10,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
  },
});

const CameraModal = ({navigation}: any) => {
  const [fileImage, setFileImage] = useState('');

  const checkGranted = async () => {
    const grantedcamera = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'App Camera Permission',
        message: 'App needs access to your camera',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
        buttonNeutral: 'Ask me Later',
      },
    );
    const grantedstorage = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'App Camera Permission',
        message: 'App needs access to your camera',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
        buttonNeutral: 'Ask me Later',
      },
    );

    if (
      grantedcamera === PermissionsAndroid.RESULTS.GRANTED &&
      grantedstorage === PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log('ss');
    } else {
      console.log('permission denied');
    }
  };
  useEffect(() => {
    checkGranted();
  }, []);

  function showGallary() {
    //  사용자 앨범 접근
    launchImageLibrary({}, res => {
      //   const formdata = new FormData();
      //   formdata.append('file', res.assets[0].uri);
      //   console.log(res.assets[0]);

      // 취소 버튼을 누르면
      if (!res.didCancel && res) {
        setFileImage(res.assets[0].uri); // 사진을 누르면
      }
    });
  }

  const takePicture = async () => {
    const res = launchCamera({mediaType: 'photo', cameraType: 'back'});
    console.log(res);
    // launchCamera({mediaType: 'photo', cameraType: 'back'}, res => {
    //   console.log(res);
    // });
  };

  return (
    <View style={styles.body}>
      <View style={styles.btns}>
        <View style={styles.btn}>
          <Btn txt="갤러리에서 선택" clickEvent={showGallary} />
        </View>
        <View style={styles.btn}>
          <Btn txt="직접 사진 찍기" clickEvent={takePicture} />
        </View>
        <View style={styles.btn}>
          <Btn txt="뒤로 돌아가기" clickEvent={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
};

export default CameraModal;
