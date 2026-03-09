import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function InsightCard({icon,title,subtitle,onPress}) {

  return(
    <TouchableOpacity style={styles.card} onPress={onPress}>

      <View style={styles.iconBox}>
        <Image source={icon} style={styles.icon}/>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sub}>{subtitle}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  card:{
    width:"46%",
    backgroundColor:"#F4F4F4",
    borderRadius:20,
    paddingVertical:25,
    alignItems:"center",
    marginBottom:18
  },

  iconBox:{
    width:55,
    height:55,
    borderRadius:15,
    backgroundColor:"#E8E8FF",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:10
  },

  icon:{
    width:28,
    height:28,
    resizeMode:"contain"
  },

  title:{
    fontSize:16,
    fontWeight:"600"
  },

  sub:{
    fontSize:12,
    color:"#888",
    marginTop:3
  }

})