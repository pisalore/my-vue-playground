import { defineStore } from "pinia";
import axios from "axios";
export const defaultTodoState = {
  items: [
    { id: 1, text: "text1", completed: true },
    { id: 2, text: "text2", completed: false },
    { id: 3, text: "text3", completed: true },
    { id: 4, text: "text4", completed: false },
    { id: 5, text: "text5", completed: true },
  ],
};

export const getters = {
  notCompleted() {
    return this.items.filter((item) => !item.completed);
  },
  completed() {
    return this.items.filter((item) => item.completed);
  },
};

export const actions = {
  switchTodo(id, completed) {
    const item = this.items.find((item) => item.id === id);
    item.completed = completed;
  },
  addTodo(text) {
    this.items.push({
      id: 10,
      text,
      completed: false,
    });
  },
  async getTodoItems() {
    try {
      const { data } = await axios.get("/todos");
      this.items = data;
    } catch (error) {
      this.items = [];
    }
  },
};

export const useTodoStore = defineStore("todos", {
  state: () => defaultTodoState,
  getters,
  actions,
});
