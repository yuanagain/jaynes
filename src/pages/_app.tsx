import React from 'react';
import 'react-activity/dist/react-activity.css';
import '@lib/styles.css';
import { MDXProvider } from '@mdx-js/react';
import { Wrapper } from '@components/molecules/MDXWrapper';
import CodeBlock from '@components/atoms/CodeBlock';

const mdComponents = {
  code: CodeBlock,
  wrapper: Wrapper
};

type MyAppProps = {
  Component: any;
  pageProps: any;
};

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={mdComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};

export default MyApp;
