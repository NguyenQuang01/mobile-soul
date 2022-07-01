import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Topic() {
  return (
    <View style={styles.containerFull}>
      <View style={styles.container}>
        <View style={styles.textHear}>
          <Text style={styles.textHearChile1}>Điều gì đã đưa bạn</Text>
          <View style={styles.textHear1}>
            <Text style={styles.textHearChile1}>đến với</Text>
            <Text style={styles.textHearChile2}>V-soul?</Text>
          </View>
        </View>
        <View style={styles.textHear2}>
          <Text style={styles.textHearChile3}>Chọn một mục bạn quan tâm:</Text>
        </View>
        <ScrollView>
          <View style={styles.list}>
            <Text style={styles.listText}>Tủ sách chữa lành</Text>
            <Image
              source={{
                uri: "https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/s403x403/272716504_1282351612271074_1109749129077293766_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=vgkc_Gu33fYAX9CQ1YZ&_nc_ht=scontent.fhan5-10.fna&oh=03_AVITC2WZMAfqTODnPiW4p3WRpvxQLMqiZjQ_7_0_kBJogw&oe=62354538",
              }}
              style={{ width: 120, height: 100 }}
            />
          </View>
          <View style={styles.list}>
            <Image
              source={{
                uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272912956_476240050547256_150333096569960621_n.png?stp=dst-png_p403x403&_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=3ASm74VVKvEAX9sylgg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKvc2Pqp8NGs5kY0RVlKhWc3mILOwOyxmpGmpO0jkOElA&oe=62330034",
              }}
              style={{ width: 120, height: 100 }}
            />
            <Text style={styles.listText}>Âm nhạc & Giai điệu tâm hồn</Text>
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
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  listText: {
    fontSize: 25,
    maxWidth: 200,
    textAlign: "center",
    color: "#964B00",
  },
});
