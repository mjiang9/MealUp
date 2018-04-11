import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Facebook } from 'expo';
import {Button, SocialIcon, Divider} from 'react-native-elements';

import firebase from "../config/firebase";
const db = firebase.firestore();


// const auth = firebase.auth();
var provider = new firebase.auth.FacebookAuthProvider();
var userID;
var userName;
var userToken;
export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'MealUp Login',
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const value = AsyncStorage.getItem('loggedIn');
    if (value === 'true') {
      console.log(value);
      this.props.navigation.navigate('Main');
    }
  }

  //get users permission authorization (ret: facebook token)
  onSignInWithFacebook = async () => {
<<<<<<< HEAD
      // const options = {permissions: ['public_profile', 'email', 'user_friends'],}
      // const {type, token} = await Facebook.logInWithReadPermissionsAsync("159765391398008", options);
      // if (type === 'success') {
      //   try {
      //     userToken = token;

      //     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,friends`);
      //     const userData = await response.json();
      //     const friendsList = userData.friends.data;
      //     console.log("friendsList")
      //     console.log(friendsList);
      //     userName = userData.name;
      //     userID = userData.id;
      //     console.log(userName);
      //     console.log(userID);

      //     AsyncStorage.setItem('loggedIn', 'true');

      //     const originalSend = XMLHttpRequest.prototype.send;
      //     XMLHttpRequest.prototype.send = function(body) {
      //       if (body === '') {
      //         originalSend.call(this);
      //       } else {
      //         originalSend.call(this, body);
      //       }
      //     };

      //     // const credential = provider.credential(token);
      //     // auth.signInWithCredential(credential);
      //     db.collection('users').doc(userID).set({
      //       Name: userName,
      //     }, { merge: true })
      //     .then(function() {
      //     console.log("Document successfully updated!");
      //     })
      //     .catch(function(error) {
      //     // The document probably doesn't exist.
      //     console.error("Error updating document: ", error);
      //     });

      //     for (var friend of friendsList) {
      //       let thisfriend = friend;
      //       db.collection('users').doc(userID).collection('Friends').doc(thisfriend.id).get().then(function(doc) {
      //         if (!doc.exists) {
      //           console.log("Friend doesn't exist", thisfriend.name)
      //           console.log(docRef.id)
      //           db.collection('users').doc(userID).collection('Friends').doc(thisfriend.id).set({
      //             Name: thisfriend.name,
      //             CanViewMe: true,
      //             CanViewFriend: true,
      //             numOfMeals: 0
      //           })
      //           console.log("Finish setting", thisfriend.name)
      //         }
      //         else {
      //           console.log("Friend exists", doc.data());
      //         }
      //       })
      //     }
      //     daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];

      //     docRef = db.collection('users').doc(userID).collection('Freetime').doc('Monday');

      //     docRef.get().then(function(doc) {
      //         if (doc.exists) {
      //             console.log("Document data:", doc.data());
      //         } else {
      //             console.log("No such document!");
      //             for (dofW of daysOfWeek) {
      //               db.collection('users').doc(userID).collection('Freetime').doc(dofW).set({
      //                 Freetime: Array.from(Array(25), () => false),
      //               })
      //             }
      //             console.log("I'm here 0")
      //             // create new freeFriends object
      //             freeFriends = new Object()
      //             for (dofW of daysOfWeek) {
      //               freeFriends[dofW] = [];
      //               for (i = 0; i < 25; i++) {
      //                 freeFriends[dofW].push({})
      //               }
      //             }
      //             console.log("I'm here 1")
      //             // initialize freeFriends object
      //             for (friend of friendsList) {
      //               let thisfriend = friend;
      //               db.collection('users').doc(thisfriend.id).collection('Freetime').get().then((querySnapshot) => {
      //                 console.log("I'm in then 1")
      //                 querySnapshot.forEach(function(doc) {
      //                   for (i = 0; i < 25; i++) {
      //                     if (doc.data().Freetime[i]) {
      //                       freeFriends[doc.id][i][thisfriend.id] = thisfriend.name
      //                     }
      //                   }
      //                 })

      //                 // set freeFriends
      //                 for (dofW of daysOfWeek) {
      //                   db.collection('users').doc(userID).collection('FreeFriends').doc(dofW).set({
      //                     Freefriends: freeFriends[dofW]
      //                   })
      //                 }
      //                 console.log("I'm here 2")
      //                 console.log("Freefriends", freeFriends)
      //               })
      //             }


      //         }
      //     }).catch(function(error) {
      //         console.log("Error getting document:", error);
      //     });

          userID = '10210889686788547'
          userName = 'Andrew Zeng'
          this.props.navigation.navigate('Main');

      //     } catch (error) {
      //       console.error(error);
      //     }

      // }
  };
=======
    const options = {permissions: ['public_profile', 'email', 'user_friends'],}
    const {type, token} = await Facebook.logInWithReadPermissionsAsync("159765391398008", options);
    if (type === 'success') {
      try {
        userToken = token;

        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,friends`);
        const userData = await response.json();
        const friendsList = userData.friends.data;
        console.log(friendsList);
        userName = userData.name;
        userID = userData.id;
        console.log(userName);
        console.log(userID);

        AsyncStorage.setItem('loggedIn', 'true');
          // const credential = provider.credential(token);
          // auth.signInWithCredential(credential);
          db.collection('users').doc(userID).set({
            Name: userName,
          }, { merge: true })
          .then(function() {
            console.log("Document successfully updated!");
          })
          .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });

          for (var friend of friendsList) {
            db.collection('users').doc(userID).collection('Friends').doc(friend.id).set({
              Name: friend.name,
              CanViewMe: true,
              CanViewFriend: true,
            })
          }
          daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];

          var docRef = db.collection('users').doc(userID).collection('Freetime').doc('Monday');

          docRef.get().then(function(doc) {
            if (doc.exists) {
              console.log("Document data:", doc.data());
            } else {
              console.log("No such document!");
              for (dofW of daysOfWeek) {
                db.collection('users').doc(userID).collection('Freetime').doc(dofW).set({
                  Freetime: Array.from(Array(25), () => 0),
                })
              }
            }
          }).catch(function(error) {
            console.log("Error getting document:", error);
          });

          // userID = '10210889686788547'
          // userName = 'Andrew Zeng'
          this.props.navigation.navigate('Main');

        } catch (error) {
          console.error(error);
        }

      };
    }
  // };
>>>>>>> fee15fe35c4eefb99dd0fab65fbadf80051ae40b


  // export function signInWithFacebook (fbToken, callback) {
  //     const credential = provider.credential(fbToken);
  //     auth.signInWithCredential(credential)
  //         .then((user) => getUser(user, callback))
  //         .catch((error) => callback(false, null, error));
  // }

  // Render any loading content that you like here
  render() {
    return (
      <View>
      <View>
      <SocialIcon
      raised
      button
      type='facebook'
      title='LOGIN WITH FACEBOOK'
      iconSize={19}
            // style={[styles.containerView, styles.socialButton]}
            // fontStyle={styles.buttonText}
            onPress={this.onSignInWithFacebook}/>
            </View>
            </View>
            );
          }

}

        export {userName};
        export {userID};
        export {userToken};
