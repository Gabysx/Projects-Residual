import React,{useState} from 'react';
import {View, KeyboardAvoidingView,StatusBar, TextInput, TouchableOpacity, Text,ToastAndroid} from 'react-native';

//importando a conexão com o firebase para autenticação de usuarios 
import firebaseIP from '../../firebase/firebase';

// importando a design 
import styles from './styles';

// importando os icons 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Signup = ({navigation}) =>{

    // conexão com firebase (autenticação)
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    const [err, setErr] = useState('');
    const [name,setName] = useState('');
  
      // cadastro do email e senha para autenticação
     const create = () =>{

      firebaseIP.auth()
        .createUserWithEmailAndPassword(email, pwd)
        .then(userCredentials => {
          return userCredentials.user.updateProfile({
            display:name 
            
          });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            ToastAndroid.showWithGravity(
              'Ops... Cadastro já existe!',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
              ToastAndroid.TOP,)
          }
          if (error.code === 'auth/invalid-email') {
            ToastAndroid.showWithGravity(
              'Dados inválidos',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
              ToastAndroid.TOP, )
          }
           setEmail();
           setPwd();
           setName();
        }); 

        firebaseIP.database().ref('users'+email).set();
     };

    // navegação para tela de login 
    const handleLogin2 = () => {
      navigation.navigate('Login')
    };
    return (

        <KeyboardAvoidingView style={styles.container}>
         <StatusBar backgroundColor="#6959CD" barStyle="light-content" />
          
            <View style={styles.topocontainer} >
              <Text style={styles.err2}>{err}</Text>
            </View>
            <View style={styles.meio}>  
              <View  style={styles.topo2}>

                <View style={styles.icon} > 
                  <Text style={styles.Text2}>  <FontAwesome5 name={'wifi'} size = {30} color='#fff' >   Conecte-se </FontAwesome5></Text>
                </View>
                <Text style={styles.Text4}>     
                <Text>   Ao seu controle financeiro   <FontAwesome5 name={'hand-holding-usd'} size = {20} color='#fff' ></FontAwesome5></Text>   </Text>
              </View>
              
              <View style={styles.formulario2}>
                <View>
                  <Text style={[styles.Text,styles.cadastrar]}>
                  <FontAwesome5 name={'user-plus'} size = {20} >   </FontAwesome5> Sign-Up </Text>
                </View>

                <View style={styles.meioform}>
                <View style={styles.forminput} >
                    <Text> <FontAwesome5 name={'user-tie'} size = {20} >   </FontAwesome5></Text>
                      <TextInput
                        value={name}
                        style={styles.input}
                        placeholder ="Nome completo"
                        placeholderTextColor = "#A9A9A9"
                        autoCorrent = {false}
                        onChangeText = {(txt)=> setName(txt)}
                      /> 
                  </View>
                
                  <View style={styles.forminput} >
                    <Text>  <FontAwesome5  name={'envelope'} size={20} style={styles.inputIconemail}> </FontAwesome5> </Text>
                      <TextInput 
                        value={email}
                        style={styles.input}
                        autoCapitalize='none'
                        placeholder ="Digite seu Email"
                        placeholderTextColor = "#A9A9A9"
                        autoCorrent = {false}
                        onChangeText = {(txt)=> setEmail(txt)}
                      />
                  </View>

                  <View style={styles.forminput} >
                    <Text>  <FontAwesome5  name={'lock'} size={20} style={styles.inputIconpass}> </FontAwesome5> </Text>
                      <TextInput
                        value={pwd}
                        style={styles.input}
                        placeholder ="Digite sua Senha"
                        placeholderTextColor = "#A9A9A9"
                        autoCorrent = {false}
                        secureTextEntry={true}
                        onChangeText = {(txt)=> setPwd(txt)}
                      />
                  </View>

                  <View style={styles.btns}>
                    <TouchableOpacity style={styles.btnSubmit} onPress={create}>
                      <Text style={styles.submitText}>Cadastrar</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.btnRegistro2} onPress={handleLogin2}>
                      <Text style={styles.submitText}> Voltar </Text>
                    </TouchableOpacity>
                  </View>
               </View>               
              </View>
            </View>
           
    </KeyboardAvoidingView>
 );
};export default Signup;
