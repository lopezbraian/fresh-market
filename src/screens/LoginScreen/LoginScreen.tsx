import Constants from "expo-constants";
import { useForm } from "react-hook-form";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logoImage from "../../../assets/images/logo.png";
import Google from "../../assets/icons/Google";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomInputPassword from "../../components/CustomInputPassword";

const LoginScreen = ({ navigation }) => {
  const { handleSubmit, control } = useForm();

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImage} />
      <Text style={styles.textLogin}>Sign In</Text>
      <View>
        <View style={styles.groupForm}>
          <Text style={styles.label}>Name</Text>
          <CustomInput
            name={"name"}
            control={control}
            placeholder={"Enter name"}
          />
        </View>
        <View style={styles.groupForm}>
          <Text style={styles.label}>Password</Text>
          <CustomInputPassword
            name={"password"}
            control={control}
            placeholder={"Password"}
          />
        </View>
        <Text style={styles.textForget}>Forget password? </Text>
      </View>
      <CustomButton
        onPress={() => navigation.navigate("Home")}
        text={"Sign In"}
      />

      <View style={styles.containerLogGoogle}>
        <Google />
        <Text style={styles.textGoogle}>Login with google</Text>
      </View>
      <View style={styles.haveAccount}>
        <Text style={styles.textHaveAccount}>Don't have an account ?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{
            marginLeft: 10,
          }}
        >
          <Text style={styles.linkAccount}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  haveAccount: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textHaveAccount: {
    fontSize: 13,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
    color: "#868889",
  },
  linkAccount: {
    color: "#82CD47",
    fontWeight: "500",
  },
  containerLogGoogle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  textGoogle: {
    opacity: 0.9,
    fontSize: 13,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    textAlign: "center",
    color: "#000000",
    marginLeft: 2,
  },
  textForget: {
    color: "#82CD47",
    lineHeight: 14,
    fontSize: 14,
    textAlign: "right",
    opacity: 0.8,
  },
  groupForm: {
    marginBottom: 12,
  },
  label: {
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 12,
    color: "#000",
    opacity: 0.5,
    lineHeight: 24,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
  logo: {
    width: 300,
    height: 230,
  },
  textLogin: {
    fontFamily: "Roboto",
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#82CD47",
  },
});
export default LoginScreen;
