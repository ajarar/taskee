import { useState, FC, FormEvent } from 'react';
import { Todo } from './interfaces';
import { textClass, darkTextClass } from './Theming/colors';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

const App: FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<Todo[]>([]);
	const handleAddTodo = (event: FormEvent) => {
		event.preventDefault();
		if (todo) {
			setTodos([
				{
					userId: 1,
					id: Date.now(),
					title: todo,
					completed: false,
				},
				...todos,
			]);
			setTodo('');
		}
	};
	return (
		<div className='w-full md:w-2/4	 mx-auto '>
			<h1 className=' mb-2 text-center'>
				<span
					className={`${textClass} text-6xl  skew-y-3 inline-block`}
				>
					T
				</span>
				<span className={`text-4xl ${darkTextClass}`}>ASKE</span>
				<span
					className={`${textClass} text-6xl   skew-y-3 inline-block`}
				>
					E
				</span>
			</h1>
			<p className={`${darkTextClass} mb-8 text-center`}>
				The best <span className={textClass}> APP </span> that helps you
				to manage your day.
			</p>
			<div className='bg-white p-10 shadow shadow-slate-100 rounded mb-5'>
				<InputField
					todo={todo}
					setTodo={setTodo}
					handleAddTodo={handleAddTodo}
				/>
			</div>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
