import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Video from "react-native-video";
import MediaControls, { PLAYER_STATES } from "react-native-media-controls";
export default function Books() {
  return (
    <View style={styles.containerFull}>
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <View style={styles.textHear}>
              <Text style={styles.textHearChile2}>Book Review 1</Text>
              <Text style={styles.textHearChile3}>
                Đứng vị trí số 1 trong danh sách những cuốn sách tâm lý hay nhất
                hiện nay đó là cuốn Tâm lý học đám đông của nhà tâm lý học người
                Pháp Gustave Le Bon. Cuốn sách này là cái nhìn tổng quan về hoạt
                động vô thức của cá nhân khi đứng trước đám đông. Hay nói cách
                khác, đó là sự tác động của cá nhân đến tập thể. Nhiều người cho
                rằng, đây chính là tác phẩm tâm lý kinh điển nhất thế giới, là
                đề tài nghiên cứu và bàn luận bất tận rất nhiều năm qua.
              </Text>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/271889250_3101795206704175_8912529629158266642_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=fbDcfVjmjVQAX8mjgpt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJy01-DIIaMevCA6AXY75skwvfDe39hmS17ZKOUNDxKzA&oe=62350664",
                }}
                style={{ width: 250, height: 200 }}
              />
              <Text style={styles.textHearChile3}>
                Ý nghĩa của cuốn sách “Tâm lý học đám đông” này gửi gắm đó chính
                là khi bạn hiểu rõ được tâm lý đám đông thì cho dù bạn là ai, độ
                tuổi nào, bạn cũng dễ thành công. Đứng vị trí số 1 trong danh
                sách những cuốn sách tâm lý hay nhất hiện nay đó là cuốn Tâm lý
                học đám đông của nhà tâm lý học người Pháp Gustave Le Bon. Cuốn
                sách này là cái nhìn tổng quan về hoạt động vô thức của cá nhân
                khi đứng trước đám đông. Hay nói cách khác, đó là sự tác động
                của cá nhân đến tập thể. Nhiều người cho rằng, đây chính là tác
                phẩm tâm lý kinh điển nhất thế giới, là đề tài nghiên cứu và bàn
                luận bất tận rất nhiều năm qua.
              </Text>
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
    textAlign: "center",
  },
  textHear1: {
    flexDirection: "row",
  },
  textHearChile3: {
    color: "#333333",
    fontSize: 14,
    marginTop: 20,
    marginVertical: 10,
    // textAlign: "center",
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
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
