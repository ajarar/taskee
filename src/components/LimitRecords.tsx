import { FC, ChangeEvent } from 'react';
import { darkTextClass } from '../Theming/colors';
interface Props {
	limit: number;
	setLimitWithPage: (limit: number) => void;
}

type select = ChangeEvent<HTMLSelectElement>;
const LimitRecords: FC<Props> = ({ limit, setLimitWithPage }) => {
	const handleChange = (event: select) => {
		setLimitWithPage(+event.currentTarget.value);
	};
	return (
		<div className={`flex justify-end items-center mb-5 ${darkTextClass}`}>
			<label className='pr-2' htmlFor='recordsPerPage'>
				Records per page:{' '}
			</label>
			<select
				id='recordsPerPage'
				onChange={handleChange}
				className='bg-white shadow shadow-slate-100 rounded p-2'
			>
				{[...Array(3)].map((element, index) => {
					const correctIndex: number = (index + 1) * 5;
					return (
						<option
							value={correctIndex}
							selected={limit === correctIndex}
							key={index}
						>
							{correctIndex}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default LimitRecords;
