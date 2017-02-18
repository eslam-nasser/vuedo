<template>
  <div class="cols-warpper">
    <div class="all-cols">
      <!-- ToDo col -->
      <draggable element="ul" class="single-col todo-col" :options="{group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="todo" @end="endDrag" @start="startDrag">           
        <li v-for="(element, index) in todo">
            {{element.title}}
        </li>
        <div class="newEntry">
          <form v-on:submit="addNewCard(todo, $event)">
            <input type="text" placeholder="Add a card..." v-model="newCard.title">
            <button class="addCardBtn">Add</button>
          </form>
        </div>
        <!--<pre>{{todo}}</pre>-->
      </draggable>

      <!-- Doing col -->
      <draggable element="ul" class="single-col doing-col" :options="{group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="doing" @end="endDrag" @start="startDrag">
        <li v-for="(element, index) in doing">
            {{element.title}}
        </li>
        <div class="newEntry">
          <form v-on:submit="addNewCard(doing, $event)">
            <input type="text" placeholder="Add a card..." v-model="newCard.title">
            <button class="addCardBtn">Add</button>
          </form>
        </div>
        <!--<pre>{{doing}}</pre>-->
      </draggable>
      
      <!-- Done col -->
      <draggable element="ul" class="single-col done-col" :options="{group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="done" @end="endDrag" @start="startDrag">           
        <li v-for="(element, index) in done">
            {{element.title}}
        </li>
        <div class="newEntry">
          <form v-on:submit="addNewCard(done, $event)">
            <input type="text" placeholder="Add a card..." v-model="newCard.title">
            <button class="addCardBtn">Add</button>
          </form>
        </div>
        <!--<pre>{{done}}</pre>-->
      </draggable>

      <!-- Later col -->
      <draggable element="ul" class="single-col later-col" :options="{group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="later" @end="endDrag" @start="startDrag">
        <li v-for="(element, index) in later">
            {{element.title}}
        </li>
        <div class="newEntry">
          <form v-on:submit="addNewCard(later, $event)">
            <input type="text" placeholder="Add a card..." v-model="newCard.title">
            <button class="addCardBtn">Add</button>
          </form>
        </div>
      </draggable>

      <!-- Other col -->
      <draggable element="ul" class="single-col other-col" :options="{group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="other" @end="endDrag" @start="startDrag">
        <li v-for="(element, index) in other">
            {{element.title}}
        </li>
        <div class="newEntry">
          <form v-on:submit="addNewCard(other, $event)">
            <input type="text" placeholder="Add a card..." v-model="newCard.title">
            <button class="addCardBtn">Add</button>
          </form>
        </div>
      </draggable>
      

    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'board',
  components: {
      draggable
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
          console.log(items.data)
          console.log(items)
        })
		},
		startDrag: function (e) {
			// console.log('Start Dragging! ' ,e)
		},
    addNewCard: function(columnName, e){
      e.target.reset()
      e.preventDefault()
      console.log(e)
      columnName.push({
          id: 1,
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
          console.log(items.data)
          console.log(items)
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
  margin-top: 10px;
  margin-left: 10px
}
.single-col{
  width: 230px;
  min-height: 330px;
  padding: 10px;
  padding-top: 30px;
  background: #34495e;
  list-style-type: none;
  border-radius: 3px;
  margin: 10px;
  position: relative
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
  display: none;
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
  opacity: .25;
  transition: .1s
}
.newEntry form input:focus + .addCardBtn{opacity: 1; display: inline-block}
</style>
