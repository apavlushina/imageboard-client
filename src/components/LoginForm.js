import React from "react";

export default function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={props.values.title}
          onChange={props.onChange}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          name="password"
          value={props.values.url}
          onChange={props.onChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
