import React from "react";

export default function Input(props) {
    const {type="text", placeholder, name} = props;
    return <input type={type} placeholder={placeholder} name={name} className="ui-textfield" />;
}