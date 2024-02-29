const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Todo List',
            todoList: [],
        }
    },

    methods: {
        // chiamata axios
        fetchTodoList() {
            axios.get('http://localhost/php-todo-list-json/backend/api/get-list.php').then((response) => {
                // metto la risposta nella todolist
                this.todoList = response.data;
            })
        }
    },

    // interrogo l'api al mounted
    mounted() {
        this.fetchTodoList();
    }
});
app.mount('#app');