import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Books({ navigation }) {
  return (
    <View style={styles.containerFull}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.textHear}>
            <Text style={styles.textHearChile2}>Tủ sách chữa lành</Text>
            <Text style={styles.textHearChile3}>
              Đây là nơi bạn có thể tìm đươc những đầu sách phù hợp với cảm xúc
              của bản thân
            </Text>
          </View>
        </View>

        <ScrollView>
          <View
            style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 20 }}
          >
            <View
              style={styles.list}
              onPress={() => {
                navigation.navigate("Book");
              }}
            >
              <Text style={styles.listText}>Truyền cảm hứng sống</Text>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273931217_3392735080850385_8747187135039159783_n.png?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=ukqAHk2WlBUAX-DxYyG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIEUTOBu0lE1KydqwnqE8Qp26HnNvXqVi2j5Z-EDhXxZQ&oe=6234AD28",
                }}
                style={{ width: 120, height: 100 }}
              />
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273712681_676864986833558_8217335577755073693_n.png?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=Z9JMD23CML8AX9azJsj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI_tvKXAJH3Qi7GMe8_XDjJeVOYZ-kaikBo4EVJ1fV-7g&oe=6232E2E7",
                }}
                style={{ width: 100, height: 100 }}
              />
              <Text
                style={styles.listText}
                onPress={() => {
                  navigation.navigate("Book");
                }}
              >
                Nhận biết cảm xúc tiêu cực
              </Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.listText}>Trò chuyện cùng chuyên gia</Text>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/243506853_969904730308200_578212480444074494_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=O7ANynZ7nHUAX9gCYjK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIrI0EG8q4XevUWj7XNgR3ZOj8K9uYOQSsI7cuDrXfIJw&oe=6235EE53",
                }}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/p320x320/272281756_462047548942756_2467699477227629238_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=0uzZrDpnXccAX-g68an&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIBWbr4fPscFWQX9TwCrnvwAfeO2AK-IhR_-pVD_goHpQ&oe=6233CE43",
                }}
                style={{ width: 100, height: 100 }}
              />
              <Text style={styles.listText}>Vượt qua cảm xúc tiêu cực</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.listText}>Chuyện về cảm xúc tiêu cực</Text>
              <Image
                source={{
                  uri: "https://khothietke.net/wp-content/uploads/2021/03/PNG00194-bac-sy-gia-dinh-png.png",
                }}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <View style={styles.list}>
              <Text style={styles.listText}>Trò chuyện cùng chuyên gia</Text>
              <Image
                source={{
                  uri: "https://khothietke.net/wp-content/uploads/2021/03/PNG00194-bac-sy-gia-dinh-png.png",
                }}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <View style={styles.list}>
              <Text style={styles.listText}>Trò chuyện cùng chuyên gia</Text>
              <Image
                source={{
                  uri: "https://khothietke.net/wp-content/uploads/2021/03/PNG00194-bac-sy-gia-dinh-png.png",
                }}
                style={{ width: 100, height: 100 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFull: {
    alignItems: "center",
  },
  container: {
    width: "90%",
    height: "100%",
    // backgroundColor: "#000",
    // justifyContent: "center",
  },
  textHear: {
    maxWidth: 250,
    marginTop: 40,
  },
  textHearChile1: {
    fontSize: 20,
    color: "#696969",
  },
  textHearChile2: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#696969",
  },
  textHear1: {
    flexDirection: "row",
  },
  textHearChile3: {
    color: "#A1A4B2",
    fontSize: 13,
    marginVertical: 10,
    textAlign: "center",
  },
  list: {
    backgroundColor: "#ffe4b9",
    width: "45%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    marginHorizontal: 5,
    // marginTop:20,
  },
  listText: {
    fontSize: 20,
    maxWidth: 200,
    textAlign: "center",
    color: "#000",
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
