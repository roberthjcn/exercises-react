import React from "react";

const withGreeting = (Component: any) => {
  const Wrapped = () => {
    return <Component />;
  };

  return Wrapped;
};

export const GreetingSpanish = () => {
  return <span>Hola Mundo</span>;
};

export const GreetingEnglish = () => {
  return <span>Hello World</span>;
};

export const ExampleWithGreeting = withGreeting(GreetingSpanish);
export const ExampleWithGreeting2 = withGreeting(GreetingEnglish);