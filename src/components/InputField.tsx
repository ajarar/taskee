import { ChangeEvent, FormEvent, Dispatch, SetStateAction, FC } from 'react';
import { bgClass, darkTextClass } from '../Theming/colors';

interface Props {
	todo: string;
	setTodo: Dispatch<SetStateAction<string>>;
	handleAddTodo: (event: FormEvent) => void;
}
type input = ChangeEvent<HTMLInputElement>;

const InputField: FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
	const handleChange = (event: input): void => {
		setTodo(event.currentTarget.value);
	};
	return (
		<form onSubmit={handleAddTodo}>
			<div className='flex w-full'>
				<label className='flex-1'>
					<span className='sr-only'>Name of your task</span>
					<input
						className='w-full  placeholder:italic placeholder:text-slate-400 text-sm p-2 border border-r-0'
						placeholder='Task name'
						type='text'
						name='taskName'
						value={todo}
						onChange={handleChange}
					/>
				</label>
				<button
					type='submit'
					className={`px-4 ${bgClass} ${darkTextClass} text-sm`}
				>
					Go
				</button>
			</div>
		</form>
	);
};

export default InputField;
