<template>
  <div class="cols-warpper">
    <navbar></navbar>
    <div class="all-cols">
      <!-- ToDo col -->
      <div class="single-col todo-col">
        <vue-scrollbar custom-class="my-scrollbar" ref="Scrollbar">
          <draggable element="ul" :options="{handle: '.card-handle', group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="todo" @end="endDrag" @start="startDrag">           
            <li v-for="(element, index) in todo">
                {{element.title}}
                <span class="card-handle"></span>
                <i  v-on:click="deleteTask(todo, element.id)" class="icon ion-ios-trash"></i>
            </li>
          </draggable>
        </vue-scrollbar>
        <div class="newEntry">
            <form v-on:submit="addNewCard(todo, $event)">
              <input type="text" placeholder="Add a card..." v-model="newCard.title">
              <button class="addCardBtn">Add</button>
            </form>
          </div>
      </div>


      <!-- Doing col -->
      <div class="single-col doing-col">
        <vue-scrollbar custom-class="my-scrollbar" ref="Scrollbar">
          <draggable element="ul" :options="{handle: '.card-handle', group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="doing" @end="endDrag" @start="startDrag">
            <li v-for="(element, index) in doing">
                {{element.title}}
                <span class="card-handle"></span>
                <i  v-on:click="deleteTask(doing, element.id)" class="icon ion-ios-trash"></i>
            </li>
          </draggable>
        </vue-scrollbar>
        <div class="newEntry">
            <form v-on:submit="addNewCard(doing, $event)">
              <input type="text" placeholder="Add a card..." v-model="newCard.title">
              <button class="addCardBtn">Add</button>
            </form>
          </div>
      </div>

      
      <!-- Done col -->
      <div class="single-col done-col">
        <vue-scrollbar custom-class="my-scrollbar" ref="Scrollbar">
          <draggable element="ul" :options="{handle: '.card-handle', group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="done" @end="endDrag" @start="startDrag">           
            <li v-for="(element, index) in done">
                {{element.title}}
                <span class="card-handle"></span>
                <i  v-on:click="deleteTask(done, element.id)" class="icon ion-ios-trash"></i>
            </li>
          </draggable>
        </vue-scrollbar>
        <div class="newEntry">
          <form v-on:submit="addNewCard(done, $event)">
            <input type="text" placeholder="Add a card..." v-model="newCard.title">
            <button class="addCardBtn">Add</button>
          </form>
        </div>
      </div>


      <!-- Later col -->
      <div class="single-col later-col">
        <vue-scrollbar custom-class="my-scrollbar" ref="Scrollbar">
          <draggable element="ul" :options="{handle: '.card-handle', group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="later" @end="endDrag" @start="startDrag">
            <li v-for="(element, index) in later">
                {{element.title}}
                <span class="card-handle"></span>
                <i  v-on:click="deleteTask(later, element.id)" class="icon ion-ios-trash"></i>
            </li>
          </draggable>
        </vue-scrollbar>
        <div class="newEntry">
          <form v-on:submit="addNewCard(later, $event)">
            <input type="text" placeholder="Add a card..." v-model="newCard.title">
            <button class="addCardBtn">Add</button>
          </form>
        </div>
      </div>
      

      <!-- Other col -->
      <div class="single-col other-col">
        <vue-scrollbar custom-class="my-scrollbar" ref="Scrollbar">
          <draggable element="ul" :options="{handle: '.card-handle', group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="other" @end="endDrag" @start="startDrag">
            <li v-for="(element, index) in other">
                {{element.title}}
                <span class="card-handle"></span>
                <i  v-on:click="deleteTask(other, element.id)" class="icon ion-ios-trash"></i>
            </li>
          </draggable>
        </vue-scrollbar>
        <div class="newEntry">
          <form v-on:submit="addNewCard(other, $event)">
            <input type="text" placeholder="Add a card..." v-model="newCard.title">
            <button class="addCardBtn">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import VueScrollbar from 'vue2-scrollbar'
import Navbar from './navbar'
require('vue2-scrollbar/dist/style/vue2-scrollbar.css')

export default {
  name: 'board',
  components: {
      draggable,
      Navbar,
      VueScrollbar
  },
  data () {
    return {
      user: {},
      todo: [],
      doing: [],
      done: [],
      later: [],
      other: [],
      newCard: {}
    }
  },
  created: function(){
    // Check if the user is logged in
    var jwt = localStorage.getItem('id_token')
    if(!jwt) {
      this.$router.push('/login')
    }

    // Get this user data
    var this_user_id = localStorage.getItem('user_id')
    this.$http.get('http://localhost:3000/boards/'+this_user_id)
      .then((items)=>{
        this.todo   = items.data.todo
        this.doing  = items.data.doing
        this.done   = items.data.done
        this.later  = items.data.later
        this.other  = items.data.other 
        // console.log(items.data)
      })
  },
  methods:{
		endDrag: function (e) {
      // console.log('End of move', e)
      // Get all boards data
      var allBoardData = {
        todo  : this.todo,
        doing : this.doing,
        done  : this.done,
        later : this.later,
        other : this.other 
      }
      // Update the data in database
      var this_user_id = localStorage.getItem('user_id')
      this.$http.put('http://localhost:3000/boards/'+this_user_id, allBoardData)
        .then((items)=>{
          // console.log(items.data)
        })
      this.newCard.title = ''
		},
		startDrag: function (e) {
			// console.log('Start Dragging! ' ,e)
		},
    addNewCard: function(columnName, e){
      e.target.reset()
      e.preventDefault()
      // console.log(e)
      var newCard_id = '';
      var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
      for( var i=0; i < 24; i++ )
          newCard_id += possible.charAt(Math.floor(Math.random() * possible.length));

      if(this.newCard.title){
        columnName.push({
            id: newCard_id,
            title: this.newCard.title
        })
        var allBoardData = {
          todo  : this.todo,
          doing : this.doing,
          done  : this.done,
          later : this.later,
          other : this.other 
        }
        // Save the data in database
        var this_user_id = localStorage.getItem('user_id')
        this.$http.put('http://localhost:3000/boards/'+this_user_id, allBoardData)
          .then((items)=>{
            // console.log(items.data)
            console.log(this.newCard)
        })
        this.newCard.title = ''
      }
    },
    deleteTask: function(columnName, cardId){
      var index = columnName.findIndex(x => x.id==cardId);
      columnName.splice(index, 1)
      var allBoardData = {
        todo  : this.todo,
        doing : this.doing,
        done  : this.done,
        later : this.later,
        other : this.other 
      }
      // Save the data in database
      var this_user_id = localStorage.getItem('user_id')
      this.$http.put('http://localhost:3000/boards/'+this_user_id, allBoardData)
        .then((items)=>{
          // console.log(items.data)
      })
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all-cols{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 10px;
  margin-left: 10px
}
.single-col{
  width: 230px;
  min-height: 85px;
  padding: 10px;
  padding-top: 30px;
  background: #34495e;
  border-radius: 3px;
  margin: 10px;
  position: relative;
}
.single-col ul{
  padding: 0;
  margin: 0;
  list-style-type: none;
  padding-bottom: 35px;
  min-height: 85px;
}
.vue-scrollbar__wrapper{
  min-height: 85px;
  max-height: 70vh;
  background: transparent
}
.single-col:before{
  content: '';
  position: absolute;
  top: 5px;
  left: 10px;
}
.todo-col:before{content: 'ToDo'}
.doing-col:before{content: 'Doing'}
.done-col:before{content: 'Done'}
.later-col:before{content: 'Later'}
.other-col:before{content: 'Other'}

.single-col li{
  padding: 5px 10px;
  color: #2c3e50;
  background: #ecf0f1;
  margin: 5px auto;
  border-radius: 3px;
  transition: .14s;
  cursor: move;
  cursor: -webkit-grabbing;
  min-height: 31px;
  position: relative;
  user-select: none
}
.single-col li span.card-handle{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 25px;
}
.single-col li i{
  position: absolute;
  top: 50%;
  right: 10px;
  opacity: .4;
  margin-top: -12px;
  transition: .1s;
  font-size: 16px;
}
.single-col li i:hover{color: #e74c3c; opacity: 1}
.dragged-item{
  transition: .14s;  
  transform: rotate(-20deg)
}
.single-col li:hover{
  cursor: pointer;
  background: #ffffff;
}
.ghost {
  opacity: .5;
  background: #C8EBFB;
}
.newEntry{
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 5px;
}
.newEntry form{padding: 0;margin: 0}
.newEntry form input{
  border-radius: 4px;
  padding: 5px;
  border: 0;
  width: 100%;
  display: block;
  opacity: .6;
  padding-right: 50px;
  transition: .1s;
  background: #ecf0f1
}
.newEntry form input:focus{
  outline: 0;
  box-shadow: none;
  opacity: 1
}
.addCardBtn{
  padding: 7px 15px;
  margin: 5px auto;
  font-size: 11px;
  color: #FFF;
  background: #27ae60;
  border: 0;
  border-radius: 3px;
  position: absolute;
  right: 7px;
  bottom: 1px;
  opacity: .3;
  transition: .1s
}
.newEntry form input:focus + .addCardBtn{opacity: 1; display: inline-block}
</style>
