import { FC } from 'react';
interface Props {
	title: string;
}
const TodoItem: FC<Props> = ({ title }) => {
	return <li className='px-2 py-4 rounded mb-3 bg-white'>{title}</li>;
};

export default TodoItem;
