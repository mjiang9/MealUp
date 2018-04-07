import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import NavigationBar from 'navigationbar-react-native';
import { Avatar, Card, ListItem, ButtonGroup } from 'react-native-elements';
import firebase from "../config/firebase";
import HeaderButtons from 'react-navigation-header-buttons'
import Swiper from 'react-native-swiper';
import FriendList from '../components/FriendList';
import GroupList from '../components/GroupList';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { userName, userID } from '../screens/SignInScreen';

const db = firebase.firestore();

export default class FriendsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
      return {
        title: 'Friends',
        headerRight: (
          <HeaderButtons color = '#ffffff'>
            <HeaderButtons.Item title='Edit' onPress={params.ButtonPressed} />
          </HeaderButtons>
        ),
      };
    };

  state = {friends: [], groups: [],};

  componentWillMount() {
    this.props.navigation.setParams({ ButtonPressed: this.ButtonPressed, buttonText: 'Edit' });
  }

  componentDidMount() {
    db.collection("users").doc(userID).collection('Friends').onSnapshot((querySnapshot) => {
        friends = [];
        querySnapshot.forEach((doc) => {
            friends.push({
              Name: doc.data().Name,
              url:`http://graph.facebook.com/${doc.id}/picture?type=normal`,
              id: doc.id,
              CanViewMe: doc.data().CanViewMe,
              CanViewFriend: doc.data().CanViewFriend,
              numOfMeals: doc.data().numOfMeals
            })
        });
        this.setState({friends:friends});
    });
    db.collection("users").doc(userID).collection('Groups').onSnapshot((querySnapshot) => {
        groups = [];
        querySnapshot.forEach((doc) => {
            groups.push({
              Name: doc.id,
              Members: doc.data(),
              id: doc.id,
            })
        });
        // console.log(groups)
        this.setState({groups:groups});
    });
  }

  ButtonPressed = () => {
    if (this.state.onFriends) {
      this.props.navigation.navigate('EditFriends')
    } else {
      this.props.navigation.navigate('EditGroups')
    }


  }

  compare = (b,a) => {
    return a.numOfMeals - b.numOfMeals;
  }

  render() {
    var obj = [...this.state.friends];
    obj.sort((a,b) => b.numOfMeals - a.numOfMeals);
    return (
      <View style={{flex:1}}>
        <ScrollableTabView
          style={{marginTop: 0, flex:1}}
          renderTabBar={() => <DefaultTabBar />}
          onChangeTab = {(i, ref) => {this.setState({onFriends: !this.state.onFriends})}}
          tabBarBackgroundColor = {'#f4511e'}
          tabBarActiveTextColor = {'white'}
          tabBarInactiveTextColor = {'black'}
          tabBarUnderlineStyle = {{backgroundColor:'white'}}

        >
          <FriendList style={{flex:1}} tabLabel='Friends' data = {obj} navigation = {this.props.navigation} editOn = {false}/>
          <GroupList tabLabel='Groups' data = {this.state.groups} navigation = {this.props.navigation} />

        </ScrollableTabView>
      </View>
    );
  }
}
