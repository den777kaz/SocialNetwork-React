import React, {useEffect, useState} from "react";

const Status = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {!editMode &&
            <span
                onDoubleClick={activateEditMode}>{status || "write something"}
            </span>
            }
            {editMode &&
            <input
                onChange={onStatusChange}
                autoFocus={true}
                onBlur={deactivateEditMode}
                type="text"
                value={status}
            />
            }

        </div>
    )
}

export default Status;
