import Vue from 'vue'
import App from './App'
import Firebase from 'firebase'

// let firebase = new Firebase('https://gkeep-709e5.firebaseio.com/')
let firebase = Firebase.initializeApp('https://gkeep-709e5.firebaseio.com/')

firebase.child('notes').set([
  {title: 'Hello World', content: 'Lorem ipsum'}
])

firebase.child('notes').on('value', (snapshot) => {
  let notes = snapshot.val()
  console.log(notes)
  window.alert(notes[0].title)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
