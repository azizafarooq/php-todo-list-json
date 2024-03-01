const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'To-do List',
            todoList: [],
            newTask: {
                task: '',
                done: false
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
        fetchStoreTask() {
            // i dati che devo postare nella richiesta
            const data = {
                task: this.newTask.task,
                done: false,
            };

            // parametri da aggiungere alla richiesta
            const params = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            // la richiesta per aggiungere una task nella todo list
            axios.post('../backend/api/store-task.php', data, params).then((response) => {
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