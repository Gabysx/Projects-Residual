
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';




// importando os icons 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

 
//importando as paginas necessárias 
import ForgotPass from './screens/Acesso/forgotPassScreen';
import Home from './screens/home';
import Login from './screens/Acesso/login';
import Signup from './screens/Acesso/signup';
import AddE from './screens/Estoque/AddE';
import ListE from './screens/Estoque/ListE';
import Extrato from './screens/Fluxo/Extrato';
import Vendas from './screens/Fluxo/Vendas';
import Custos from './screens/Fluxo/Custos';
import Loading from './Loading';
import Profile from './screens/Profile';



const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createMaterialTopTabNavigator();

const Tab2 = createMaterialBottomTabNavigator();


function  DrawerScreens(){
 

  return(
    //sessão dos botões para navegar entre as telas 
    <Drawer.Navigator initialRouteName ="Home" >
      <Drawer.Screen name ="Home" component={Home} />
      <Drawer.Screen name ="Estoque" component={TabScreensE} />
      <Drawer.Screen name="Fluxo de Caixa" component={TabScreensM} />
      <Drawer.Screen name ="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

// botoes de navegação fluxo de caixa 
function TabScreensE() {
 
  return(
    // sessão dos botoes do estoque
    <Tab2.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#6959CD'}}>  

      <Tab2.Screen name ="List" component={ListE}
        options={{
        tabBarLabel: 'List',
        tabBarIcon: ({ color }) => (<FontAwesome5  name={'list-ul'} size={20} color={color} > </FontAwesome5> ), 
      }}/>

      <Tab2.Screen name ="+Produto" component={AddE}
      options={{
      tabBarLabel: '+Produto',
      tabBarIcon: ({ color }) => (<FontAwesome5  name={'plus-circle'} size={20} color={color} > </FontAwesome5> ),
      }}/>
     </Tab2.Navigator> 
  );
}

// botoes de navegação fluxo de caixa
function TabScreensM() {
  return(
    <Tab.Navigator 
      tabBarOptions={{
      labelStyle: { fontSize: 14.25 },
      activeTintColor: '#fff',
      style: { backgroundColor: '#6959CD' },
      }}>  
        <Tab.Screen name ="Extrato" component={Extrato} />
        <Tab.Screen name ="Vendas" component={Vendas} />
        <Tab.Screen name ="Custos" component={Custos} />

    </Tab.Navigator>
  );
}

//Navegação entre login e home
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name='Loading' component={Loading}  options={{headerShown: false}} /> 
          <Stack.Screen name='Login' component={Login}  options={{headerShown: false}} />
          <Stack.Screen name='signup'component={Signup} options={{headerShown: false}} />
           <Stack.Screen name='Forgot'component={ForgotPass} options={{headerShown: false}} />
          <Stack.Screen name='Home'component={DrawerScreens} options={{headerShown: false}} />
          <Stack.Screen name='Adicionar Produtos'component={AddE} />
          <Stack.Screen name='Profile'component={Profile}  options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}export default App;