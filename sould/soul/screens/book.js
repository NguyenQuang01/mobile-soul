import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Book({ navigation }) {
  return (
    <View style={styles.containerFull}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.textHear}>
            <Text style={styles.textHearChile2}>
              Nhận biết cảm xúc tiêu cực
            </Text>
          </View>
        </View>

        <ScrollView>
          <View
            style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 20 }}
          >
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272331426_702127520793950_6718806169315709744_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=vo8pWpBh6pIAX88NhZm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVITcE3hhWeguQl_ftpZTDLhHAKhhbfqXl64MwOycukPPA&oe=623525A3",
                }}
                style={{ width: 100, height: 80 }}
              />
              <Text style={styles.listText}>Book Review 1</Text>
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/260110213_5075051192556355_1546938057871191973_n.png?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=MPuyCT_52jwAX9RT3m5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIA7ZNM_1XF9LyyYCOUmpbJG9v--Dt4aTQSzzolr-t5jA&oe=6234575F",
                }}
                style={{ width: 100, height: 80 }}
              />
              <Text style={styles.listText}>
                <Text style={styles.listText}>Book Review 2</Text>
              </Text>
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272912688_656078858873968_442535353593061059_n.png?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=vur8UdXrFQkAX-uejHn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLh-Tn96gpHGv_dQccNspJPDy_oSA7fVe4yi2bT7THuOw&oe=623353EF",
                }}
                style={{ width: 100, height: 80 }}
              />
              <Text style={styles.listText}>Book Review 3</Text>
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273824828_626977755065233_8942809179196291109_n.png?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=Foe40nGtvaQAX8nyf-q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJmLM2FYyAP18RcTvCsV0-9TAQFeGy85UcY01MzaEVZ-w&oe=6235BC1F",
                }}
                style={{ width: 100, height: 80 }}
              />
              <Text style={styles.listText}>Book Review 4</Text>
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272237479_7011587322248210_3164654126509419215_n.png?stp=dst-png_s417x417&_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=mZnSYj8pA98AX92fwNe&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKbK25sgK58ad96zE3X-xkCbXVDWLWUkMAeTdD1OWz4OA&oe=62352559",
                }}
                style={{ width: 100, height: 80 }}
              />
              <Text style={styles.listText}>Book Review 5</Text>
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/271889250_3101795206704175_8912529629158266642_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=fbDcfVjmjVQAX8mjgpt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJy01-DIIaMevCA6AXY75skwvfDe39hmS17ZKOUNDxKzA&oe=62350664",
                }}
                style={{ width: 100, height: 80 }}
              />
              <Text style={styles.listText}>Book Review 6</Text>
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
