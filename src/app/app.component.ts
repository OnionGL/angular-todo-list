import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];
  newTodo: string;
  saveTodo(event: any) {
    console.log('r')
    if (this.newTodo && event.code === 'Enter' || event.target.id === 'button-addon2') {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';
    } else if (event.code !== 'Enter' && event.code === 'Enter') {
      alert('Please Enter Todo');
    }
  }
  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }
  remove(id: number) {
    this.todos = this.todos.filter((todo, i) => i !== id);
  }
}
