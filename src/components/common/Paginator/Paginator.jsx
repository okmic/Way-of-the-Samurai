import React, { useState } from 'react';
import styles from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.container__paginator}>
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <button className="submit" onClick={() => { setPortionNumber(portionNumber - 1) }}>&larr;</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p);
                        }}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <button className="submit" onClick={() => { setPortionNumber(portionNumber + 1) }}>&rarr;</button>}

        </div>
    </div>
}

export default Paginator;