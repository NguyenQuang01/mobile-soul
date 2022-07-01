import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default function Me() {
  return (
    <View>
      <View>
        <View>
          <Image
            source={{
              uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/p403x403/273694358_904308953520931_7398383610206227901_n.png?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=i47DWgw1MVUAX8vLNeH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJQ1J3pic8yDq2kKraMUy4G1RJjwJh1PVHchFK9uKEKIQ&oe=6232E736",
            }}
            style={{ width: "100%", height: 200, position: "relative" }}
          />
        </View>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            position: "absolute",
            bottom: 20,
            left: 20,
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/258219370_2942780952601530_7457518856240515512_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iskUgZpciqoAX9Yzy0H&_nc_ht=scontent.fhan5-11.fna&oh=00_AT8CTxQtyX_iDFaW3SB-h1dMDxoNs05UTPNoKqq948kyDA&oe=6213FC98",
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              minWidth: 200,
              color: "#fff",
              marginHorizontal: 10,
              fontWeight: "bold",
              fontSize: 18,
              bottom: -20,
            }}
          >
            TRUNG QUANG
          </Text>
        </View>
      </View>

      <View>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderBottomWidth: 0.3,
            borderColor: "#3333",
            flexDirection: "row",
          }}
        >
          <SimpleLineIcons name="people" size={24} color="black" />
          <Text style={{ marginHorizontal: 30 }}>Hồ sơ của tôi</Text>
          <AntDesign
            name="right"
            size={24}
            color="black"
            style={{ right: -130 }}
          />
        </View>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderBottomWidth: 0.3,
            borderColor: "#3333",
            flexDirection: "row",
          }}
        >
          <Ionicons name="stopwatch-outline" size={24} color="black" />
          <Text style={{ marginHorizontal: 30 }}>Xem gần đây</Text>
          <AntDesign
            name="right"
            size={24}
            color="black"
            style={{ right: -130 }}
          />
        </View>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderBottomWidth: 0.3,
            borderColor: "#3333",
            flexDirection: "row",
          }}
        >
          <AntDesign name="download" size={24} color="black" />
          <Text style={{ marginHorizontal: 30 }}>Tải xuống</Text>
          <AntDesign
            name="right"
            size={24}
            color="black"
            style={{ right: -130 }}
          />
        </View>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderBottomWidth: 0.3,
            borderColor: "#3333",
            flexDirection: "row",
          }}
        >
          <AntDesign name="book" size={24} color="black" />
          <Text style={{ marginHorizontal: 30 }}>Nhật ký</Text>
          <AntDesign
            name="right"
            size={24}
            color="black"
            style={{ right: -130 }}
          />
        </View>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderBottomWidth: 0.3,
            borderColor: "#3333",
            flexDirection: "row",
          }}
        >
          <AntDesign name="logout" size={24} color="black" />
          <Text style={{ marginHorizontal: 30 }}>Đăng xuất</Text>
          <AntDesign
            name="right"
            size={24}
            color="black"
            style={{ right: -130 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
