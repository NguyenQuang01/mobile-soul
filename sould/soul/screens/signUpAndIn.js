import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function SignUpAndIn({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={{
            uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/260151676_694582838199980_589950457225738445_n.png?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_ohc=3P4VyPuyQqAAX8DLon_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK3qKwFd74exYJI943l2lfMECmqc0FvPnrv20_5s6i7wQ&oe=6234D845",
          }}
          style={{ width: 50, height: 50 }}
        />

        <Text>V-SOUL</Text>
      </View>
      <View style={styles.logo2}>
        <Image
          source={{
            uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/258902659_1390859201346384_5598207050692509664_n.png?stp=dst-png_s206x206&_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=XssiNhP_iAcAX-8wYG8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJbTQHC-qmqgT7A9MqAKeVgKhHoCtG3KZFkTy8dMCTU6g&oe=6231D2EB",
          }}
          style={{ width: "100%", height: 300 }}
        />
      </View>
      <View style={styles.text}>
        <Text
          style={styles.chileText}
         
        >
          Trust you emotion, write our story
        </Text>
        <Text style={styles.chileText2}>
          Hàng ngàn người đang dùng V-soul để giải tỏa cảm xúc tiêu cực
        </Text>
      </View>
      <View style={styles.start}>
        <TouchableOpacity style={styles.btnStart}>
          <Text style={styles.btnStartText}>ĐĂNG KÝ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <Text style={styles.btnLoginText1}>Bạn đã có tài khoản chưa?</Text>
        <TouchableOpacity>
          <Text style={styles.btnLoginText2}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#faf8f5",
    height: "50%",
  },
  text: {
    marginTop: 10,
    alignItems: "center",
  },
  chileText: {
    textAlign: "center",
    fontSize: 20,
    maxWidth: 200,
    fontWeight: "bold",
    color: "#dea850",
  },
  chileText2: {
    textAlign: "center",
    fontSize: 11,
    maxWidth: 200,
    color: "#A1A4B2",
    marginVertical: 5,
  },
  // logo2: {
  //   marginTop: 0,
  // },
  start: {
    backgroundColor: "#Fff",
    height: 70,
    alignItems: "center",
  },
  btnStart: {
    backgroundColor: "#dea850",
    borderRadius: 50,
    alignItems: "center",
    paddingHorizontal: 100,
    paddingVertical: 10,
    top: 10,
  },
  login: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnLoginText1: {
    fontSize: 11,
    marginHorizontal: 5,
    color: "#696969",
  },
});
