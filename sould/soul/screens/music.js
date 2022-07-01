import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Music() {
  return (
    <View style={styles.containerFull}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.textHear}>
            <Text style={styles.textHearChile2}>Âm nhạc chữa lành</Text>
          </View>
        </View>

        <ScrollView>
          <View
            style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 20 }}
          >
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273627166_340255794669228_4140563185824367981_n.png?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=lkICp3QgeVIAX-a96Rj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ716Flk-KFcGQQyS0t0a4eSAOZgW6E5LXngEfFpjJMuA&oe=623497E5",
                }}
                style={{ width: "100%", height: 100 }}
              />
              <Text style={styles.listText}>Nhạc chữa lành 1</Text>
              <Text style={styles.listText2}>4 phút 38 giây</Text>
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272890406_526640442161704_7736810190926910332_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_ohc=N_2TIlz1AScAX-NkkJ4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKrva1zq4KTVCDzoWMeXOiYsy_NNjLOSPR0QcwVSRUD2g&oe=62359BE1",
                }}
                style={{ width: "100%", height: 100 }}
              />
              <Text style={styles.listText}>
                <Text style={styles.listText}>Book Review 2</Text>
              </Text>
              <Text style={styles.listText2}>4 phút 38 giây</Text>
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273848165_481676340064139_6674547193858189701_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=PY-mWb_96ZcAX999Tjz&_nc_oc=AQk1O39bTlYoVqfqFPu-dm_8lFyqj6YETddyELX_4wudL0hgM6fgXt9G6oplQzPy3rat3FxQpJDLhvl49LS900oD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIffnve1FHpmyxADrpXrMjZ4GIgym1PbzuWF5N5anXjOA&oe=62369466",
                }}
                style={{ width: "100%", height: 100 }}
              />
              <Text style={styles.listText}>Book Review 3</Text>
              <Text style={styles.listText2}>4 phút 38 giây</Text>
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272993258_653257589124418_3794585117110984425_n.png?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=19Tv9BkYFeUAX9tw1I5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKOzV9C_POI-4ZEX2PEaLTN1ZZtiGc3pdl3LuzfQpj96Q&oe=62363098",
                }}
                style={{ width: "100%", height: 100 }}
              />
              <Text style={styles.listText}>Book Review 4</Text>
              <Text style={styles.listText2}>4 phút 38 giây</Text>
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/273931963_6972491389487772_158807185460691152_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=uuMHHGONGloAX8wKxUK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL1X0Zegqc8X6-W4poO3NxN5zRGDp5pNpyjXt_QasjAbQ&oe=6236A42D",
                }}
                style={{ width: "100%", height: 100 }}
              />
              <Text style={styles.listText}>Book Review 5</Text>
              <Text style={styles.listText2}>4 phút 38 giây</Text>
            </View>
            <View style={styles.list}>
              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/258467709_583140040058823_1336413121833151927_n.png?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=0YIrzgm6FRIAX8fUmxl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL8WPI-TgkYJ1cuc2lZOzx2_Gndreqdyi5uEGoviPl5uQ&oe=6233AD35",
                }}
                style={{ width: "100%", height: 100 }}
              />
              <Text style={styles.listText}>Book Review 6</Text>
              <Text style={styles.listText2}>4 phút 38 giây</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.listText}>Trò chuyện cùng chuyên gia</Text>
              <Text style={styles.listText2}>4 phút 38 giây</Text>

              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272454376_1018254139034530_6697678860949914061_n.png?_nc_cat=106&ccb=1-5&_nc_sid=aee45a&_nc_ohc=osF76UcVugsAX8lmlsQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLBWr7MQbWWYUNDIy0dSKLsbPuDPk5TiOgS9FpVTHj5gA&oe=6235CA3E",
                }}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <View style={styles.list}>
              <Text style={styles.listText}>Trò chuyện cùng chuyên gia</Text>
              <Text style={styles.listText2}>4 phút 38 giây</Text>

              <Image
                source={{
                  uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/272435242_932485034076640_6251718661240473669_n.png?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_ohc=7vY_7forLPgAX-fbxuv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLgAossGWn7jDMw0EkWpiv54uVNUYOr7Mh6DLsrqza53g&oe=623680E0",
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
  },
  listText: {
    fontSize: 14,
    maxWidth: 200,
    textAlign: "center",
    color: "#000",
    marginVertical: 10,
    marginHorizontal: 5,
    fontWeight: "bold",
  },
});
