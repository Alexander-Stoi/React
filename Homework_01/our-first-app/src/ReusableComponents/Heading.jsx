import React from 'react';

const Heading =  props => {
    const {title} = props;
    return (
        <h1>{props.title}</h1>
    )
}

export default Heading;