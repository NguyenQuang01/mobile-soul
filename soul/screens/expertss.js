import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Expertss() {
  return (
    <View style={styles.containerFull}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.textHear}>
            <Text style={styles.textHearChile2}>Chuyên gia</Text>
            <Text style={styles.textHearChile3}>Chọn một mục bạn quan tâm</Text>
          </View>
        </View>

        <ScrollView>
          <View
            style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 20 }}
          >
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272911720_499050484945882_5660676212100106939_n.png?stp=dst-png_s403x403&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=sxpydjPQFGIAX-wQ6G7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ8nlJSgDRFK7pLrsKFZZOTqgNNVZpazKij-ZSEJY4Nvg&oe=623690C7",
                }}
                style={{ width: "72%", height: 128 }}
              />
              <Text style={styles.listText}>Học đường</Text>
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272909033_902552880431064_622373412474928974_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=TZKbDWmO1XQAX_gmH08&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLG8YupRUc7-g6Txxj5DhmdHOaMaTujFAcjEBP1eeRaXQ&oe=62331EAD",
                }}
                style={{ width: 100, height: 100 }}
              />
              <Text style={styles.listText}>Trầm cảm</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.listText}>Stress</Text>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272251580_2755525844751635_5191349607439233510_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=Dlb2m3choIYAX9E0kdn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKGpkGSSyaKpK55xbJZBUqMtvicKm38b3jrSugp7HgOeA&oe=6233D990",
                }}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/s403x403/273249543_1264418914047275_3089740930661757591_n.png?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=IiFKV4THKp0AX9DlBl3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKUQ0Kuf6BBft5NCppN7swjcCiy112IJanpGiCknh09Mg&oe=62352201",
                }}
                style={{ width: 100, height: 100 }}
              />
              <Text style={styles.listText}>Lo âu</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.listText}>Tài chính</Text>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273247567_359426099362901_6999208679196777739_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=zAnbu91xQScAX_tIP0R&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL0MFFd-kHEe4N7WrwxtZmiVrmIraKJ80LCoJZQre_g4A&oe=62353ABE",
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
    textAlign: "center",
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
    // backgroundColor: "#ffe4b9",
    width: "45%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    marginHorizontal: 5,
    // marginTop:20,
    borderWidth:0.3,
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
