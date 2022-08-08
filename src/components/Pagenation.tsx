import { FC, Dispatch, SetStateAction } from 'react';
import { darkTextClass, bgClass } from '../Theming/colors';
interface Props {
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	pagesCount: number;
}
const Pagenation: FC<Props> = ({ page, setPage, pagesCount }) => {
	const pageCountArray = [...Array(pagesCount)];
	return (
		<nav aria-label='pagination' className='my-5'>
			<ol className='flex justify-center '>
				{pageCountArray.map((item, index) => {
					const correctIndex = index + 1;
					const activePage = page === correctIndex;
					return (
						<li key={index}>
							<button
								className={`px-2 mx-1 rounded transition-colors	 ${darkTextClass} ${
									activePage
										? `${bgClass} pointer-events-none`
										: 'bg-slate-50'
								}`}
								onClick={() => {
									setPage(correctIndex);
								}}
								aria-label={
									activePage
										? `Page ${correctIndex}, Current Page`
										: `Goto Page ${correctIndex}`
								}
								aria-current={activePage ? 'true' : 'false'}
							>
								{correctIndex}
							</button>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Pagenation;
