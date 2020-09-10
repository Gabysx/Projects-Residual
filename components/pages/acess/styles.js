import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems:'center',
    position:'relative',
    backgroundColor:'#1C1C1C',
  },

  topocontainer:{
    position:'relative',
    backgroundColor:'#6959CD',
    paddingRight:12.7,
    paddingLeft:12.7,
    height:270,
    width:'100%',
  },
  
  meio:{
    width:'100%',
    height:'100%',
    flex:1,
    position:'absolute',
    zIndex:2,
    backgroundColor:'transparent',
    paddingLeft:26.3,
    paddingRight:26.3,
  },

  Text:{
    color:'#fff',
    fontSize:30,
    marginBottom:20,
    position:'relative',
    top:'10%',
    alignSelf:'center',
  },

  Text3:{
    color:'#fff',
    fontSize:20,
    position:'relative',
    top:'8%',
    alignSelf:'center',
    fontFamily:'IndieFlower-Regular',
  },

  Text2:{
    color:'#fff',
    fontSize:20,
    position:'relative',
    marginTop:2,
    alignSelf:'center',
    fontFamily:'IndieFlower-Regular',
  },

  Text4:{
    color:'#fff',
    fontSize:20,
    marginBottom:20,
    position:'relative',
    marginTop:2,
    alignSelf:'center',
    fontFamily:'',
  },
  

  login:{
    top:0,
    color:'#000',
    marginTop:15,
    fontSize:20,
  },

  cadastrar:{
    top:0,
    color:'#000',
    marginTop:15,
  },

  topo2:{
    position:'relative',
    top:'6%',
    alignSelf:'center',
  },
  
  formulario:{
    alignSelf:'center',
    backgroundColor:'#fff',
    width:'100%',
    top:'15%',
    paddingBottom:10,
    borderRadius:9,
    alignItems:'center',
  },

  formulario2:{
    alignSelf:'center',
     backgroundColor:'#fff',
     width:'105%',
     top:'12%',
     paddingBottom:40,
     borderRadius:9,
     alignItems:'center',
   },
   forminput:{  
    width:'100%',
    backgroundColor:'transparent',
    alignItems:'center',
    flexDirection:'row',
    marginLeft:60,
  },
 

  meioform:{
    width:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
 },


  input:{
    backgroundColor:"#ffffff",
    width:"70%",
    marginBottom: 15,
    color:"#222",
    fontSize: 13,
    borderRadius: 9,
    borderBottomColor:'#836FFF',
    borderBottomWidth:2,
    padding: 10,
    textAlign:'center',
  },

  
  
  icon:{
    flexDirection:'row',
  },

  btnSubmit:{
    width:"30%",
    height: 45,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 9, 
    backgroundColor:"#35AAFF",
    marginTop:5,
    marginRight:10,
  },

  submitText:{
    color:"#fff",
    fontSize:16,
  },

  btnRegistro2:{
    marginTop:5,
    width:"30%",
    height: 45,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 9, 
    backgroundColor:"#008B8B",
    marginLeft:10,
  },

  btnRegistro:{
    marginTop:10,
    alignSelf:'center',
  },

  btns:{
    flexDirection:"row",
  },

  registroText:{
    color:"#fff",
    fontSize:15,
  },

  registroText2:{
    color:"#fff",
    fontSize:15,
    marginTop:130,
  },

  Text22:{
    alignItems:'center',
  },
  
  err:{
    alignSelf:'center',
    color:'#EE0000',
    marginTop:40,
    marginBottom:30,
    fontSize:15,
  },

  err2:{
    alignSelf:'center',
    color:'#EE0000',
    marginTop:155,
    marginBottom:30,
    fontSize:15,
  }

});

export default styles;
