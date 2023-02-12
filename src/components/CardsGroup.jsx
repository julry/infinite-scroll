import React from 'react';
import { CardsList } from '@components/CardsList';
import { PAGE_SIZE } from '@src/constants';

export const CardsGroup = React.memo((props) => {
	/**
	 * @type {{size: number, page: number | undefined}}
	 */
	const { size, page = 0 } = props;
	/**
	 * @description if size is null, there is no need of rendering
	 */
	if (size < 1) return null;

	return (
		<>
			<CardsList page={page} size={PAGE_SIZE} />
			{size - PAGE_SIZE > 0 && (
				<CardsGroup size={size - PAGE_SIZE} page={page + 1} />
			)}
		</>
	);
});
