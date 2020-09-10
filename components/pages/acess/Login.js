import React, { useState, useEffect } from 'react';
import  firebaseIP from '../../firebase/firebase';
import auth from '@react-native-firebase/auth';
import { KeyboardAvoidingView,StatusBar,TextInput, TouchableOpacity,Text, View, ToastAndroid, ScrollView } from 'react-native';


// importando a design 
import styles from './styles';

// importando os icons 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Login = ({navigation})  =>{

  // conexão com firebase (autenticação)
 const [email,setEmail] = useState('');
  const [pwd,setPwd] = useState('');
  const [err, setErr] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // autenticação do email e senha
  const handleLogin = ()=> {

  firebaseIP.auth().signInWithEmailAndPassword(email,pwd)
  .then(() => {
    setEmail('');
    setPwd('');
    if (err){
    setErr('');
  
       ToastAndroid.showWithGravity(
      'Seja Bem Vindo',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      ToastAndroid.TOP, )
      
      navigation.navigate('Home')
    } 
  })
  .catch((error)=> {
    
    setErr(error.message)

    if (error.code === 'auth/email-already-in-use') {

      ToastAndroid.showWithGravity(
        'Cadastro já está sendo utilizado',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        ToastAndroid.TOP, )
    }

    if (error.code === 'auth/invalid-email') {
      ToastAndroid.showWithGravity(
        'Dados Inválidos',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        ToastAndroid.TOP, )
    }
    });
  };

  const handleRegister = () => {
    navigation.navigate('signup')
  };

  const Forgot = () => {
    navigation.navigate('Forgot')
  };

  return (

    <KeyboardAvoidingView style={styles.container}>
     <StatusBar backgroundColor="#6959CD" barStyle="light-content"  /> 
      <View
        style={styles.topocontainer} >
    
      </View>
        
       <View style={styles.meio}>
         <ScrollView
           showsVerticalScrollIndicator = {false}>
          <Text style={styles.Text}> Controle financeiro, </Text>
          <Text style={styles.Text3}> sua escolha inteligente </Text>
          <View style={styles.formulario}>
              
              <View>
                 <Text style={[styles.Text,styles.login]}>
                  <FontAwesome5 name={'user'}  size={20} > 
                  </FontAwesome5>  Login </Text> 
              </View>

            <View style={styles.meioform} >
             
              <View style={styles.forminput} >
           
                 <Text>  <FontAwesome5  name={'envelope'} size={20} > </FontAwesome5> </Text>
                  
                  <TextInput 
                    value={email}
                    style={styles.input}
                    placeholder ="Digite seu Email"
                    placeholderTextColor = "#A9A9A9"
                    autoCorrent = {false}
                    onChangeText = {(txt)=> setEmail(txt)}
                    autoCompleteType ={'email'}
                    keyboarShouldPersistTaps='never'
                    autoCapitalize = {'none'}
                  />
             
              </View>

              <View style={styles.forminput} >
              
                <Text>  <FontAwesome5  name={'lock'} size={20} > </FontAwesome5> </Text>
               
                <TextInput
                 value={pwd}
                  style={styles.input}
                  placeholder ="Digite sua Senha"
                  placeholderTextColor = "#A9A9A9"
                  autoCorrent = {false}
                  secureTextEntry={true}
                  onChangeText = {(txt)=> setPwd(txt)}
                  autoCompleteType ={'password'}
                />
                 </View>

              <Btn label = 'Acessar'  onPress={handleLogin}  />

            <TouchableOpacity style={[styles.btnRegistro,{paddingTop:'10%',}]} onPress={Forgot}>
              <Text style={styles.registroTextES}> <Text>  <FontAwesome5  name={'unlock-alt'} size={15} > </FontAwesome5> </Text>  Esqueceu a senha  </Text>
            </TouchableOpacity>
            </View>
       
          </View>
          
          <View style={styles.Text22}>

            <Text style={styles.registroText2}> Torne-se um membro ! </Text>
             
            <TouchableOpacity style={styles.btnRegistro} onPress={handleRegister}>
              <Text style={styles.registroText}>Criar uma conta </Text>
            </TouchableOpacity>
          
          </View>
           </ScrollView>
        </View>
   
    </KeyboardAvoidingView>   
  );
};export default Login;