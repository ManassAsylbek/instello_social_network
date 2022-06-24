import React from "react";
import s from './Buttons.module.css'

const Buttons = () => {
    return (<div className={s.button}>
            <button className={s.addFriend} type="submit">addFriend</button>
            <button className={s.sendMessege} type="submit">sendMessege</button>
        </div>
    )
}
export default Buttons;