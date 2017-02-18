<template>
  <div class="cols-warpper">
    <div class="all-cols">
      <!-- ToDo col -->
      <draggable element="ul" class="single-col todo-col" :options="{group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="todo" @end="endDrag" @start="startDrag">           
        <li v-for="(element, index) in todo" :class="{'target': element===targetElement, 'ok':canDrag  , 'ko':!canDrag}">
            {{element.title}}
        </li>
        <!--<pre>{{todo}}</pre>-->
      </draggable>

      <!-- Doing col -->
      <draggable element="ul" class="single-col doing-col" :options="{group:'items', forceFallback: true, fallbackClass: 'dragged-item', animation: 100, ghostClass: 'ghost'}" :list="doing" @end="endDrag" @start="startDrag">
        <li v-for="(element, index) in doing" :class="{'target': element===targetElement, 'ok':canDrag  , 'ko':!canDrag}" :key="element.name" >
            {{element.title}}
        </li>
        <!--<pre>{{doing}}</pre>-->
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
      todo: [
        {
          id: 1,
          title: 'Get some milk'
        }, 
        {
          id: 2,
          title: 'pick up amr'
        }, 
        {
          id: 3,
          title: 'buy the new keyboard'
        }
      ],
      doing: [],
      dragging: false,
      targetElement: null,
      canDrag:null,
      futureIndex:null,
      res: ''
    }
  },
  created: function(){
    // this.$http.get('http://moviesapi-95723.app.xervo.io/')
    //   .then((items)=>{
    //     this.allMovies = items.data
    //   })

    var isLoggedin = localStorage.getItem('user_loggedin');
    console.log(isLoggedin)
    if(isLoggedin !== 'true'){
      this.$router.push('/login')
    }
  },
  methods:{
		// privateCheckMove: function(evt){
		// 	this.targetElement = evt.relatedContext.element

		// 	if (evt.draggedContext.element.name=='odd'){
		// 		return evt.draggedContext.futureIndex % 2 === 1
		// 	}

		// 	if (evt.draggedContext.element.name=='pair'){
		// 		return evt.draggedContext.futureIndex % 2 === 0
		// 	}
		// 	return true;
		// },
		// checkMove: function(evt){
		// 	this.res = this.privateCheckMove(evt)
		// 	this.canDrag = this.res;
		// 	this.futureIndex = evt.draggedContext.futureIndex;
		// 	return this.res;
    //   console.log('Check the move')
		// },
		endDrag: function (e) {
			this.canDrag=null;
			this.targetElement=null;
			this.futureIndex =null;
      console.log('End of move', e)
		},
		startDrag: function (e) {
			// console.log('Start Dragging! ' ,e)
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
</style>
