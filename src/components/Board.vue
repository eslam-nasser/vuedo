<template>
  <div class="cols-warpper" id="colsWarpper">
    <navbar></navbar>
    <div class="all-cols">
      <!-- ToDo col -->
      <div class="single-col todo-col">
        <vue-scrollbar custom-class="my-scrollbar" ref="Scrollbar">
          <draggable element="ul" :options="{handle: '.card-handle', group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="todo" @end="endDrag" @start="startDrag">           
            <li v-for="(element, index) in todo">
                <div id="text">
                  {{element.title}}
                </div>
                <div id="input">
                  <form v-on:submit="saveEditTask(todo, element.id, $event)">
                    <textarea type="text" v-model="editCard.title"></textarea>
                    <button class="addCardBtn">Save</button> 
                  </form>
                </div>
                <span class="card-handle"></span>
                <div class="card-options" v-on:click="openThisOption($event)">
                  <i class="icon ion-ios-settings-strong"></i>
                </div>
                <div class="options">
                  <span class="delete-card" v-on:click="deleteTask(todo, element.id)">
                    <i class="icon ion-trash-a"></i>
                  </span>
                  <span class="edit-card" v-on:click="openEditInput(todo, element.id, $event)">
                    <i class="icon ion-edit"></i>
                  </span>
                </div>
                <div class="card-options close-this-layer" v-on:click="closeThisOption()">
                  <i class="icon ion-close"></i>
                </div>
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
                <div id="text">
                  {{element.title}}
                </div>
                <div id="input">
                  <form v-on:submit="saveEditTask(doing, element.id, $event)">
                    <textarea type="text" v-model="editCard.title"></textarea>
                    <button class="addCardBtn">Save</button> 
                  </form>
                </div>
                <span class="card-handle"></span>
                <div class="card-options" v-on:click="openThisOption($event)">
                  <i class="icon ion-ios-settings-strong"></i>
                </div>
                <div class="options">
                  <span class="delete-card" v-on:click="deleteTask(doing, element.id)">
                    <i class="icon ion-trash-a"></i>
                  </span>
                  <span class="edit-card" v-on:click="openEditInput(doing, element.id, $event)">
                    <i class="icon ion-edit"></i>
                  </span>
                </div>
                <div class="card-options close-this-layer" v-on:click="closeThisOption()">
                  <i class="icon ion-close"></i>
                </div>
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
                <div id="text">
                  {{element.title}}
                </div>
                <div id="input">
                  <form v-on:submit="saveEditTask(done, element.id, $event)">
                    <textarea type="text" v-model="editCard.title"></textarea>
                    <button class="addCardBtn">Save</button> 
                  </form>
                </div>
                <span class="card-handle"></span>
                <div class="card-options" v-on:click="openThisOption($event)">
                  <i class="icon ion-ios-settings-strong"></i>
                </div>
                <div class="options">
                  <span class="delete-card" v-on:click="deleteTask(done, element.id)">
                    <i class="icon ion-trash-a"></i>
                  </span>
                  <span class="edit-card" v-on:click="openEditInput(done, element.id, $event)">
                    <i class="icon ion-edit"></i>
                  </span>
                </div>
                <div class="card-options close-this-layer" v-on:click="closeThisOption()">
                  <i class="icon ion-close"></i>
                </div>
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
                <div id="text">
                  {{element.title}}
                </div>
                <div id="input">
                  <form v-on:submit="saveEditTask(later, element.id, $event)">
                    <textarea type="text" v-model="editCard.title"></textarea>
                    <button class="addCardBtn">Save</button> 
                  </form>
                </div>
                <span class="card-handle"></span>
                <div class="card-options" v-on:click="openThisOption($event)">
                  <i class="icon ion-ios-settings-strong"></i>
                </div>
                <div class="options">
                  <span class="delete-card" v-on:click="deleteTask(later, element.id)">
                    <i class="icon ion-trash-a"></i>
                  </span>
                  <span class="edit-card" v-on:click="openEditInput(later, element.id, $event)">
                    <i class="icon ion-edit"></i>
                  </span>
                </div>
                <div class="card-options close-this-layer" v-on:click="closeThisOption()">
                  <i class="icon ion-close"></i>
                </div>
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
                <div id="text">
                  {{element.title}}
                </div>
                <div id="input">
                  <form v-on:submit="saveEditTask(other, element.id, $event)">
                    <textarea type="text" v-model="editCard.title"></textarea>
                    <button class="addCardBtn">Save</button> 
                  </form>
                </div>
                <span class="card-handle"></span>
                <div class="card-options" v-on:click="openThisOption($event)">
                  <i class="icon ion-ios-settings-strong"></i>
                </div>
                <div class="options">
                  <span class="delete-card" v-on:click="deleteTask(other, element.id)">
                    <i class="icon ion-trash-a"></i>
                  </span>
                  <span class="edit-card" v-on:click="openEditInput(other, element.id, $event)">
                    <i class="icon ion-edit"></i>
                  </span>
                </div>
                <div class="card-options close-this-layer" v-on:click="closeThisOption()">
                  <i class="icon ion-close"></i>
                </div>
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
import * as db from '../db.json'
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
      newCard: {},
      editCard: { title: '' }      
    }
  },
  created: function(){
    window.document.title = 'Dashboard | VueDo'
    // Check if the user is logged in
    var jwt = localStorage.getItem('id_token')
    if(!jwt) {
      this.$router.push('/login')
    }

    // Get this user data
    var this_user_id = localStorage.getItem('user_id')
    this.$http.get(db.db_online+'/boards/'+this_user_id)
      .then((items)=>{
        this.todo   = items.data.boards.todo
        this.doing  = items.data.boards.doing
        this.done   = items.data.boards.done
        this.later  = items.data.boards.later
        this.other  = items.data.boards.other 
      })
  },
  methods:{
    updateDB: function(){
      var allBoardData = {
        todo  : this.todo,
        doing : this.doing,
        done  : this.done,
        later : this.later,
        other : this.other 
      }
      // Update the data in database
      var this_user_id = localStorage.getItem('user_id')
      this.$http.put(db.db_online+'/boards/'+this_user_id, allBoardData)
        .then((items)=>{
          // console.log(items.data)
        })
    },
		endDrag: function (e) {
      // console.log('End of move', e)
      this.updateDB()
      this.newCard.title = ''
		},
		startDrag: function (e) {
			// console.log('Start Dragging! ' ,e)
		},
    addNewCard: function(columnName, e){
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
        this.updateDB()
        this.newCard.title = ''
      }
    },
    deleteTask: function(columnName, cardId){
      var index = columnName.findIndex(x => x.id==cardId);
      columnName.splice(index, 1)
      this.updateDB()
    },
    searchForCard: function(cardId, colName){
        for (var i=0; i < colName.length; i++) {
            if (colName[i].id === cardId) {
                return colName[i];
            }
        }
    },
    saveEditTask: function(columnName, cardId, e){
      e.preventDefault()
      var getCard = this.searchForCard(cardId, columnName)
      if(this.editCard.title){
        getCard.title = this.editCard.title
        this.updateDB()
        var parentEl  = e.currentTarget.parentNode.parentNode
        parentEl.classList.remove('editing');
      }
      var allOptionsLayer  = document.querySelectorAll('.options')

      // Hide all other layers
      for (var x = 0; x < allOptionsLayer.length; x++)
        allOptionsLayer[x].classList.remove('show')
    },
    openThisOption: function(e){
      // get layers
      var thisOptionsLayer = e.currentTarget.nextSibling.nextSibling,
          allOptionsLayer  = document.querySelectorAll('.options')

      // Hide all other layers
      for (var x = 0; x < allOptionsLayer.length; x++)
        allOptionsLayer[x].classList.remove('show')

      // Show this layer
      thisOptionsLayer.classList.add('show')
    },
    closeThisOption: function(){
      // get layers
      var allOptionsLayer  = document.querySelectorAll('.options')
      
      // Hide all other layers
      for (var x = 0; x < allOptionsLayer.length; x++)
        allOptionsLayer[x].classList.remove('show')
    },
    openEditInput: function(columnName, cardId, e){
      // Get the card we need to edit
      var getCard = this.searchForCard(cardId, columnName)
      // Set the old title to a temp var to edit it later
      this.editCard.title = getCard.title
      // Put a class to show the input
      var parentEl  = e.currentTarget.parentNode.parentNode
      parentEl.classList.add('editing');
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#colsWarpper{min-height: 100vh}
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
  padding-right: 30px;
  color: #2c3e50;
  background: #ecf0f1;
  margin: 5px auto;
  border-radius: 3px;
  transition: .14s;
  cursor: move;
  cursor: -webkit-grabbing;
  min-height: 31px;
  position: relative;
  user-select: none;
  overflow: hidden
}
.single-col li span.card-handle{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 30px;
}
.single-col li .card-options{
  position: absolute;
  top: 3px;
  right: 3px;
  height: 25px;
  width: 25px;
  display: flex;
  border-radius: 2px;
  transition: .1s;
  text-align: center;
  background: #EDEFF0
}
.single-col li .card-options:hover{
  background: #D6DADC;
}
.single-col li .card-options > i{
  opacity: .4;
  transition: .1s;
  font-size: 18px;
  display: block;
  margin: auto
}
.single-col li .card-options:hover i{color: #4d4d4d; opacity: 1}

.single-col li .options{
  background: rgba(236, 240, 241, .8);
  position: absolute;
  left: 0;
  right: 30px;
  top: 0;
  bottom: 0;
  border-radius: 3px 0 0 3px;
  display: none
}
.single-col li .card-options.close-this-layer{display: none}
.single-col li .options.show + .card-options.close-this-layer{
  display: block;
}
.single-col li .options > span{
  display: flex;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
}
.single-col li .options > span.delete-card{
  left: 0;
  right: auto;
}
.single-col li .options > span.delete-card:hover i{
  color: rgba(231, 76, 60,1.0)
}
.single-col li .options > span.edit-card{
  right: 0;
  left: auto;
}
.single-col li .options > span.edit-card:hover i{
  color: rgba(243, 156, 18,1.0)
}
.single-col li .options > span i{
  color: #34495e;
  font-size: 22px;
  display: block;
  margin: auto;
  transition: .1s
}
.single-col li.editing #input{display: block;}
/*.single-col li.editing #text{display: none}*/

.single-col li #input, .single-col li #input form{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}
.single-col li #input{right: 30px;display: none;}
.single-col li #input textarea{
  width: 100%;
  height: 100%;
  resize: none;
  border: 0;
  padding: 5px 10px;
  overflow: hidden;
  border-radius: 3px 0 0 3px
}

.single-col li #input button{
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 0;
  margin: 0;
  width: 30px;
  padding: 0;
  opacity: 1;
  border-radius: 0 3px 3px 0;
  transition: .14s;  
  background: #36c673
}
.single-col li #input button:hover{
  background: #3fd880
}
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
