import Image from 'next/image';
import React from 'react';

type HeadingProps = {
  id?: string;
  children?: React.ReactNode;
};

type ImageProps = {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
};

type Props = {
  children?: React.ReactNode;
};

const assignId = (children: React.ReactNode) =>
  typeof children === 'string' ? children : undefined;

const H1 = (props: HeadingProps) => {
  return (
    <h1
      id={assignId(props.children)}
      className='mb-20 text-4xl font-bold'
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

const P = (props: Props) => {
  return <p className='mb-8 leading-loose' {...props} />;
};

const A = (props: Props) => {
  return (
    <a
      className='text-cyan-600 underline underline-offset-2 visited:text-purple-600 
        dark:text-cyan-400 dark:visited:text-purple-400'
      {...props}
    />
  );
};

const Img = (props: ImageProps) => {
  const src = props.src ?? 'dummy.png';
  const alt = props.alt ?? '';
  const width =
    typeof props.width === 'string' ? Number(props.width) : props.width;
  const height =
    typeof props.height === 'string' ? Number(props.height) : props.height;

  return <Image src={src} alt={alt} width={width ?? 0} height={height ?? 0} />;
};

const Ul = (props: Props) => {
  return <ul className='mb-8 list-inside list-disc' {...props} />;
};

const Ol = (props: Props) => {
  return <ol className='mb-8 list-inside list-decimal' {...props} />;
};

const Li = (props: Props) => {
  return <li className='leading-loose' {...props} />;
};

const Table = (props: Props) => {
  return (
    <table className='my-12 w-full table-auto text-left text-sm' {...props} />
  );
};

const THead = (props: Props) => {
  return <thead className='bg-gray-300 dark:bg-gray-700' {...props} />;
};

const Tr = (props: Props) => {
  return <tr className='border-b' {...props} />;
};

const Th = (props: Props) => {
  return <th className='py-2 px-6' {...props} />;
};

const Td = (props: Props) => {
  return <td className='py-3 px-6' {...props} />;
};

const Blockquote = (props: Props) => {
  return (
    <blockquote
      className='border-l-4 pl-5 italic text-gray-400 dark:border-gray-400 dark:text-gray-400'
      {...props}
    />
  );
};

const Code = (props: Props) => {
  return (
    <code
      className='mx-1 rounded-sm bg-gray-200 px-2 py-0.5 dark:bg-gray-700'
      {...props}
    />
  );
};

const Hr = () => <hr className='my-16' />;

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  A,
  Img,
  Ul,
  Ol,
  Li,
  Table,
  THead,
  Tr,
  Th,
  Td,
  Blockquote,
  Code,
  Hr,
};
