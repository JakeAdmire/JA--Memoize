import React, { Component } from 'react';

export default function Header(props) {
  return (
    <div>
      <h1>ProtoCards</h1>
      <p>Welcome {}!</p>
      <p>You've completed {props.completion} out of 30 questions!</p>
    </div>
    )
}