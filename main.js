var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Hover your mouse over me for a few seconds to see my dynamically bound title!',
    title: 'You loaded this page on ' + new Date().toLocaleString(),
    show: true
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    newTodoText: '',
    todos: [
      {text: 'foo'},
      {text: 'bar'}
    ]
  },
  methods: {
    add: function() {
      if(this.newTodoText) {
        this.todos.push({text: this.newTodoText})
        this.newTodoText = ''
      }
    },
    updateFirstTodo: function() {
      // can not use index to update elements in array:
      // this.todos[0] = {text: this.newTodoText}
      // see https://vuejs.org/2016/02/06/common-gotchas/

      // this.todos[0].text = this.newTodoText

      // you can also use Array instance methods
      this.todos.splice(0, 1, {text: this.newTodoText})

      this.newTodoText = ''
    }
  }
})

var mutateObj = new Vue({
  el: '#mutate-obj',
  data: {
    firstName: '',
    obj: {firstName: 'Billy', lastName: 'Joel'}
  },
  methods: {
    updateFirstName: function() {
      this.obj.firstName = this.firstName
    }
  }
})

mutateObj.$watch('obj.firstName', function (newValue, oldValue) {
  console.log('obj.firstName changed to', newValue)
})