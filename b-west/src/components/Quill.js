import React from 'react';
import "react-quill/dist/quill.snow.css";

const Quill = (props) => {
    const {content, onChange} = props;
    let Quill;
    if (typeof window !== 'undefined') {
        Quill = require('react-quill')
    }
    if (Quill) {
        return (
            <Quill
                defaultValue={content}
                onChange={onChange}
            />
        )

    }
    return (
        <textarea name="content" id="content" cols="30" rows="10" defaultValue={content}/>
    )
}
export {Quill}