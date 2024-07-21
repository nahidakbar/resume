import React from "react";

export function Container(props: any) {
  return (
    <div className="container" {...props}>
      {props.children}
    </div>
  );
}

export function Full(props: any) {
  return (
    <div className="full" {...props}>
      {props.children}
    </div>
  );
}

export function HalfLeft(props: any) {
  return (
    <div className="half-left" {...props}>
      {props.children}
    </div>
  );
}

export function HalfRight(props: any) {
  return (
    <div className="half-right" {...props}>
      {props.children}
    </div>
  );
}
