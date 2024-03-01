const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'To-do List',
            todoList: [],
            newTask: {
                text: '',
                status: false
            }
        }
    },

    methods: {
        // chiamata axios per il file json
        fetchTodoList() {
            axios.get('../backend/api/get-list.php').then((response) => {
                // metto la risposta nella todolist
                this.todoList = response.data;
            })
        },

        // chiamata axios per un nuovo task da aggiungere
        fetchAddTask() {
            axio.post('../backend/api/store-task.php')
        }
    },

    // interrogo l'api al mounted
    mounted() {
        this.fetchTodoList();
    }
});
app.mount('#app');