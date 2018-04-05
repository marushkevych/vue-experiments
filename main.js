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
    newTodo: '',
    todos: [
      {text: 'foo'},
      {text: 'bar'}
    ]
  },
  methods: {
    add: function() {
      if(this.newTodo) {
        this.todos.push({text: this.newTodo})
        this.newTodo = ''
      }
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