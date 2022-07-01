import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Start({ navigation }) {
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
      <View style={styles.text}>
        <Text style={styles.chileText}>Chào mừng bạn đến với V-soul!</Text>
      </View>
      <View style={styles.logo2}>
        <Image
          source={{
            uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/272969162_4807530296030515_1722223927150374770_n.png?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=uUaVkjolgiIAX8RAqQ5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ4e0Ivpb-m4WK0GOaYkqtgtFo4YHo1VII98Yj3YOogKQ&oe=62335FB2",
          }}
          style={{ width: "100%", height: 300 }}
        />
      </View>
      <View style={styles.start}>
        <TouchableOpacity
          style={styles.btnStart}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.btnStartText}>BẮT ĐẦU</Text>
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
    backgroundColor: "#FFf4d1",
    height: "100%",
  },
  text: {
    marginTop: 30,
    alignItems: "center",
  },
  chileText: {
    fontSize: 30,
    maxWidth: 250,
    fontWeight: "bold",
    color: "#dea850",
  },
  logo2: {
    marginTop: 30,
  },
  start: {
    backgroundColor: "#F5C371",
    height: 70,
    alignItems: "center",
  },
  btnStart: {
    backgroundColor: "#EBEAEC",
    borderRadius: 50,
    alignItems: "center",
    paddingHorizontal: 100,
    paddingVertical: 10,
    top: -20,
  },
  btnStartText: {},
});
