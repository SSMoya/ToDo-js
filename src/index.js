import './styles.css';

import {Todo, TodoList} from './classes/'; // Busca el index.js por defecto
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList(); // TodoList. Crea el arreglo vacio en el constructor

todoList.todos.forEach( crearTodoHtml );