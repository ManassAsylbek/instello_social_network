import React, {useState} from "react";
import style from './Paginator.module.css';


const Paginator = ({portionSize = 10, ...props}) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(props.portionNumber)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1

    let rightPortionPageNumber = portionNumber * portionSize
    const left=() =>{
        setPortionNumber(portionNumber - 1)
        props.setPortionNumber(portionNumber - 1)
    }
    const right=() =>{
        setPortionNumber(portionNumber + 1)
        props.setPortionNumber(portionNumber + 1)
    }

    return (
        <div className={style.paginator}>
            {
                portionNumber > 1 && <button onClick={left}>PREV</button>
            }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <div key={p} className={props.currentPage === p ? style.selected : style.pageNumber}
                               onClick={() => props.onPageChanged(p)}>{p}</div>)
            }

            {
                portionCount > portionNumber && <button onClick={right}>
                    NExt
                </button>
            }


        </div>
    )
}

export default Paginator;