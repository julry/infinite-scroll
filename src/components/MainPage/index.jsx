import React, { useCallback, useRef, useState } from 'react';
import useFetch from '@src/hooks/useFetch';
import dots from '@svg/dots.svg';
import { ProgressProvider } from '@src/context/ProgressContext';
import { CardsGroup } from '@components/CardsGroup';
import { useProgressInit } from '@src/hooks/useProgressInit';
import styles from './page.styles.scss';

export const MainPage = () => {
	/**
	 * @description get context value
	 * @type {{users: Array, updateUsers: function}}
	 */
	const progress = useProgressInit();
	const [pageNum, setPageNum] = useState(1);
	const { isLoading, error, isNotLast } = useFetch(pageNum, progress);
	const observer = useRef();
	/**
	 * @description get ref for html element to observe
	 * @param {HTMLElement} node
	 */
	const loadingRef = useCallback((node) => {
		/**
		 * @description do nothing while fetching
		 */
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();
		/**
		 * @type {IntersectionObserver}
		 * @description create object to observe changes
		 */
		observer.current = new IntersectionObserver((entries) => {
			/**
			 * @description if observing element on viewport, and we can fetch, increase page number
			 */
			if (entries[0].isIntersecting && isNotLast) {
				setPageNum((prev) => prev + 1);
			}
		});
		/**
		 * @description if passed element start observe it
		 */
		if (node) observer.current.observe(node);
	}, [isLoading, isNotLast]);

	return (
		<ProgressProvider value={progress}>
			<div className={styles.container}>
				<CardsGroup size={progress?.users?.length} />
				{error ? (<p>Произошла ошибка</p>) : (
					<div className={styles.loading_wrapper} ref={loadingRef}>
						<img className={styles.loading} src={dots} alt={'Loading...'} />
					</div>
				)}
			</div>
		</ProgressProvider>
	);
};
