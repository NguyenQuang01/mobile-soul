import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Musics({ navigation }) {
  return (
    <View style={styles.containerFull}>
      <View style={styles.container}>
        <View style={styles.textHear}>
          <Text style={styles.textHearChile1}>Điều gì đã đưa bạn</Text>
          <View style={styles.textHear1}>
            <Text style={styles.textHearChile1}>đến với</Text>
            <Text style={styles.textHearChile2}>Giai điệu tâm hồn</Text>
          </View>
        </View>
        <View style={styles.textHear2}>
          <Text style={styles.textHearChile3}>Chọn một mục bạn quan tâm:</Text>
        </View>
        <ScrollView>
          <View
            style={styles.list}
            onPress={() => {
              navigation.navigate("Music");
            }}
          >
            <Text style={styles.listText}>Âm nhạc chữa lành</Text>
            <Image
              source={{
                uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/p403x403/272240660_1098231624362017_5340941733173245253_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=EdgriK1Ue-8AX80ZWNw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIGzpUoeQrD6buIKsadoc8NirZtp5n0e7VocwcvmVASxw&oe=62341AA3",
              }}
              style={{ width: "100%", height: 100 }}
            />
          </View>
          <View style={styles.list}>
            <Image
              source={{
                uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/274043810_474506347479579_2613327291209018248_n.png?stp=dst-png_p403x403&_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=mSaGxB0lb6oAX9OXC3Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJHhUE8itWHpxb34PZ2DhwjyokEAx8MfAYYdv4QgTPBPg&oe=6234896F",
              }}
              style={{ width: 120, height: 100 }}
            />
            <Text style={styles.listText}>Trạm nạp xăng tâm hồn</Text>
          </View>
          <View style={styles.list}>
            <Image
              source={{
                uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272352240_666067948073852_4834340787502190929_n.png?stp=dst-png_p403x403&_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=0R5pvc2t8qAAX8vO1ni&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKa6D9x_Xfwu5iZg3HGG2-5xbvr9F4qXCbHKf7kM9KqRQ&oe=62337D98",
              }}
              style={{ width: 100, height: 100 }}
            />
            <Text style={styles.listText}>V-SOUL RADIO</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listText}>Đôi lời sẻ chia</Text>
            <Image
              source={{
                uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272827671_646597209927387_5999236707046395865_n.png?stp=dst-png_s403x403&_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_ohc=4zwExvaaGrEAX8byN6H&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKSfe6MbMkIbW-Lgx5wB3_C_Lg9iB7fjySi0vcTdnFbBQ&oe=6234895F",
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
          <View style={styles.list}>
            <Text style={styles.listText}>Trò chuyện cùng chuyên gia</Text>
            <Image
              source={{
                uri: "https://khothietke.net/wp-content/uploads/2021/03/PNG00194-bac-sy-gia-dinh-png.png",
              }}
              style={{ width: 100, height: 100 }}
            />
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
    color: "#696969",
    marginVertical: 10,
  },
  list: {
    backgroundColor: "#ffe4b9",
    height: "20%",
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  listText: {
    fontSize: 25,
    // maxWidth: 200,
    textAlign: "center",
    color: "#964B00",
  },
});
