import React from 'react';

type HeadingProps = {
  id?: string;
  children?: React.ReactNode;
};

type TextProps = {
  children?: React.ReactNode;
};

const assignId = (children: React.ReactNode) =>
  typeof children === 'string' ? children : undefined;

const H1 = (props: HeadingProps) => {
  return (
    <h1
      id={assignId(props.children)}
      className='text-4xl font-bold'
      {...props}
    />
  );
};
const H2 = (props: HeadingProps) => {
  return (
    <h2
      id={assignId(props.children)}
      className='mt-20 mb-8 border-b border-b-gray-400 pb-3 text-3xl font-bold'
      {...props}
    />
  );
};
const H3 = (props: HeadingProps) => {
  return (
    <h3
      id={assignId(props.children)}
      className='mt-12 mb-6 text-2xl font-bold'
      {...props}
    />
  );
};
const H4 = (props: HeadingProps) => {
  return (
    <h4
      id={assignId(props.children)}
      className='mt-8 mb-4 text-xl font-bold'
      {...props}
    />
  );
};
const H5 = (props: HeadingProps) => {
  return (
    <h5
      id={assignId(props.children)}
      className='text-lg font-bold'
      {...props}
    />
  );
};
const H6 = (props: HeadingProps) => {
  return (
    <h6
      id={assignId(props.children)}
      className='text-base font-bold'
      {...props}
    />
  );
};
const P = (props: TextProps) => {
  return <p className='mb-8 leading-loose' {...props} />;
};

export { H1, H2, H3, H4, H5, H6, P };
