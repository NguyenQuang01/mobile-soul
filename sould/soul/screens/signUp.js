import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
export default function SignUp({navigation}) {
  // const [username, setusername] = useState("");
  // const [password, setPassword] = useState('');
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.helloSignIn}>
        <Text style={styles.textSignIn}>Chào mừng bạn đến với V-soul!</Text>
      </View>
      <View style={styles.start}>
        <TouchableOpacity style={styles.btnStart1}>
          <FontAwesome
            name="facebook-f"
            size={24}
            color="#7583ca"
            style={{ marginHorizontal: 20 }}
          />
          <Text style={styles.btnStartText}>TIẾP TỤC VỚI FACEBOOK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.start}>
        <TouchableOpacity style={styles.btnStart}>
          <FontAwesome
            name="google"
            size={24}
            color="#7583ca"
            style={{ marginHorizontal: 20 }}
          />
          <Text style={styles.btnStartText}>TIẾP TỤC VỚI GOOGLE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.text}>
        <Text style={styles.chileText}>HOẶC ĐĂNG NHẬP BẰNG EMAIL</Text>
      </View>
      <View style={styles.inputLogin}>
        <TextInput style={styles.input} value="Tên" />
      </View>
      <View style={styles.inputLogin}>
        <TextInput style={styles.input} value="địa chỉ email" />
      </View>
      <View style={styles.inputLogin}>
        <TextInput style={styles.input} value="mật khẩu" />
      </View>

      <View style={styles.start}>
        <TouchableOpacity style={styles.btnLogin}>
          <SimpleLineIcons
            name="login"
            size={24}
            color="black"
            style={{ marginHorizontal: 20 }}
          />
          <Text
            style={(styles.btnStartText, { marginLeft: 40 })}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            ĐĂNG KÝ
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text style={styles.chileText}>Quên mật khẩu</Text>
      </View>
      {/* <View style={styles.login}>
        <Text style={styles.btnLoginText1}>Bạn đã có tài khoản chưa?</Text>
        <TouchableOpacity>
          <Text style={styles.btnLoginText2}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  helloSignIn: {
    alignItems: "center",
    marginTop: 50,
  },
  textSignIn: {
    fontSize: 20,
  },
  start: {
    alignItems: "center",
    marginTop: 15,
  },
  btnStart: {
    minWidth: 250,
    backgroundColor: "#EBEAEC",
    borderRadius: 50,
    alignItems: "center",
    // paddingHorizontal: 100,
    paddingVertical: 10,
    flexDirection: "row",
  },
  btnLogin: {
    minWidth: 250,
    backgroundColor: "#ffe4b9",
    borderRadius: 50,
    alignItems: "center",
    // paddingHorizontal: 100,
    paddingVertical: 10,
    flexDirection: "row",
  },
  btnStart1: {
    minWidth: 250,
    backgroundColor: "#ffe4b9",
    borderRadius: 50,
    alignItems: "center",
    // paddingHorizontal: 100,
    paddingVertical: 10,
    flexDirection: "row",
  },
  btnStartText: {
    justifyContent: "center",
    fontSize: 13,
  },
  text: {
    alignItems: "center",
    marginVertical: 15,
  },
  chileText: {
    fontSize: 11,
    color: "#a9a9a9",
  },
  input: {
    height: 40,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#A1A4B2",
  },
  inputLogin: {
    minWidth: 280,
  },
});
