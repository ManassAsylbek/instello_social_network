import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onEditMode =()=>{
        setEditMode(false)
     /*   props.getUpdateStatus(status)*/
    }

    

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    return (
        <>{!editMode
            ? <div>
                <span onDoubleClick={()=>setEditMode(true)}>{props.status ||"----"}</span>
            </div>
            : <div>
                <input autoFocus={true} onChange={(e)=>setStatus(e.currentTarget.value)}
                       onBlur={onEditMode} type="text" value={status}/>
            </div>
        }
        </>
    );
};

export default ProfileStatus;