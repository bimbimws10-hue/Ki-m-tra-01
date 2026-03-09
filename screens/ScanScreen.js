import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScanScreen({navigation}){

return(

<View style={styles.container}>

{/* BACK BUTTON */}

<TouchableOpacity
style={styles.back}
onPress={()=>navigation.goBack()}
>
<Text style={{fontSize:20}}>←</Text>
</TouchableOpacity>

{/* JUICE IMAGE */}

<View style={styles.scanArea}>

<Image
source={require("../assets/juice.png")}
style={styles.juice}
/>

{/* SCAN FRAME */}

<Image
source={require("../assets/scan-frame.png")}
style={styles.frame}
/>

</View>

{/* PRODUCT CARD */}

<View style={styles.productCard}>

<Image
source={require("../assets/juice.png")}
style={styles.smallImg}
/>

<View style={{flex:1,marginLeft:10}}>

<Text style={styles.brand}>Lauren's</Text>
<Text style={styles.product}>Orange Juice</Text>

</View>

<View style={styles.addBtn}>
<Text style={{color:"#fff",fontSize:22}}>+</Text>
</View>

</View>

</View>

)
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#EEDCC7",
paddingTop:50,
paddingHorizontal:20
},

back:{
width:40,
height:40,
backgroundColor:"#fff",
borderRadius:10,
justifyContent:"center",
alignItems:"center"
},

scanArea:{
flex:1,
justifyContent:"center",
alignItems:"center"
},

juice:{
width:240,
height:420,
resizeMode:"contain"
},

frame:{
position:"absolute",
width:300,
height:300,
resizeMode:"contain"
},

productCard:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#fff",
padding:15,
borderRadius:20,
marginBottom:40
},

smallImg:{
width:40,
height:60,
resizeMode:"contain"
},

brand:{
fontSize:12,
color:"#888"
},

product:{
fontSize:16,
fontWeight:"600"
},

addBtn:{
width:45,
height:45,
backgroundColor:"#5B63FF",
borderRadius:12,
justifyContent:"center",
alignItems:"center"
}

})