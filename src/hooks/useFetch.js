import { useState, useEffect } from 'react';
import { PAGE_SIZE } from '@src/constants';

/**
 * @type {{isLoading: boolean, error: (boolean | string), isNotLast: boolean}}
 * @param {Number} pageNum
 * @param {Object} progress
 * @description hook that fetch data
 */
function useFetch(pageNum, progress) {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [isNotLast, setIsNotLast] = useState(false);
	/**
	 * @description get and store data about users from API
	 * @param {AbortController} controller
	 */
	const fetchData = async (controller) => {
		try {
			/**
			 * @type {Response}
			 * @description get data about users
			 */
			const result = await fetch(
				`https://randomuser.me/api?page=${pageNum}&results=${PAGE_SIZE}&inc=name, email, picture, id`,
				{
					signal: controller.signal
				}
			);

			/**
			 * @type {Object}
			 * @description get data about users
			 */
			const content = await result.json();
			progress.updateUsers(content?.results ?? []);
			/**
			 * @description if there is not empty array, we can fetch data at least one more time
			 */
			setIsNotLast(content?.results?.length > 0);
		}
		catch (err) {
			if (!err.name.includes('Abort')) setError(err);
		}
		finally {
			setIsLoading(false);
		}
	};

	/**
	 * @description fetch data on change pageNum and mount
	 */
	useEffect(() => {
		/**
		 * @type {AbortController}
		 * @description get data about users
		 */
		const controller = new AbortController();

		setIsLoading(true);
		setError(false);
		fetchData(controller);
		/**
		 * @type function
		 * @description abort fetch on unmount
		 */
		return () => controller.abort();
	}, [pageNum]);

	return { isLoading, error, isNotLast };
}

export default useFetch;
