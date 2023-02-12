import { useCallback, useMemo, useState } from 'react';

const INITIAL_USERS = [];
/**
 * @type {{users: Array}}
 */
const INITIAL_PROGRESS = {
    users: INITIAL_USERS
};

export function useProgressInit() {
    const [progress, setProgress] = useState(INITIAL_PROGRESS);
  /**
   * @description update users list
   * @param {Array} users
   */
    const updateUsers = useCallback((users) => {
        setProgress(progress => ({
                ...progress,
                users: [...progress.users, ...users]
            })
        );
    }, [setProgress]);

    return useMemo(() => ({
        users: progress.users,
          updateUsers
    }), [progress]);
}
