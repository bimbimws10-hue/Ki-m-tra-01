import { Image, StyleSheet, Text, View } from "react-native";
import InsightCard from "../components/InsightCard";

export default function HomeScreen({navigation}) {

return(

<View style={styles.container}>

{/* HEADER */}

<View style={styles.header}>

<View>
<Text style={styles.hello}>Hello 👋</Text>
<Text style={styles.name}>Christie Doe</Text>
</View>

<Image
source={require("../assets/avatar.png")}
style={styles.avatar}
/>

</View>

<Text style={styles.section}>Your Insights</Text>

<View style={styles.grid}>

<InsightCard
title="Scan new"
subtitle="Scanned 483"
icon={require("../assets/icons/newscan.png")}
onPress={()=>navigation.navigate("Scan")}
/>

<InsightCard
title="Counterfeits"
subtitle="Counterfeited 32"
icon={require("../assets/icons/Counterfeits.png")}
/>

<InsightCard
title="Success"
subtitle="Checkouts 8"
icon={require("../assets/icons/Success.png")}
/>

<InsightCard
title="Directory"
subtitle="History 26"
icon={require("../assets/icons/Directory.png")}
/>

</View>

</View>

)
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff",
paddingHorizontal:20,
paddingTop:50
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

hello:{
fontSize:24,
fontWeight:"700"
},

name:{
color:"#777",
marginTop:4
},

avatar:{
width:42,
height:42,
borderRadius:12
},

section:{
marginTop:30,
fontSize:18,
fontWeight:"600"
},

grid:{
marginTop:20,
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between"
}

})