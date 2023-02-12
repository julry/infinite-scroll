import React from 'react';
import { useProgress } from '@src/hooks/useProgress';
import styles from './card.styles.scss';

export const Card = React.memo((props) => {
	const {index} = props;
	/**
	 * @description get users list from context
	 */
	const { users } = useProgress();
	/**
	 * @type {{
	 * 					name: {first: string, last: string, title: string},
	 * 					picture: {medium: string, large: string, thumbnail: string},
	 * 					email: string
	 * 				}}
	 * @description get user from list by its index
	 */
	const user = users[index];
	return (
		<div className={styles.person_card}>
			<div className={styles.person_image_wrapper}>
				<img className={styles.person_image} src={user?.picture?.medium} alt={'picture'} />
			</div>
			<div>
				<p className={styles.person_name}>
					{user?.name?.first} {user?.name?.last}
				</p>
				<p className={styles.person_email}>
					{user?.email}
				</p>
			</div>
		</div>
	)
});
