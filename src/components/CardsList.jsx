import React from 'react';
import { Card } from '@components/Card';
import { PAGE_SIZE } from '@src/constants';

export const CardsList = React.memo((props) => {
	/**
	 * @type {{size: number, page: number}}
	 */
	const { size, page } = props;
	return (
		<>
			{Array.from({ length: size }).map((_, i) => (
				<Card key={i} index={i + (page * PAGE_SIZE)}/>
			))}
		</>
	);
});
