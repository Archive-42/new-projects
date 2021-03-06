import * as React from 'react';
import { CodeBlock } from './Code';

export function Overview() {
  return (
    <>
      <div>
        <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
          <h2 className="font-bold text-4xl">Features</h2>
        </div>
        <ul className="space-y-2">
          <li>๐ฑ Under 1KB minified and gzipped!</li>
          <li>๐ Bring your own DOM!</li>
          <li>โจ Correctly handles dynamic tabs, no more empty tab panels!</li>
          <li>๐คนโโ๏ธ Well suited for complex use cases, like drag and drop!</li>
          <li>๐ Built-in lazy rendering!</li>
        </ul>
      </div>
      <div>
        <div className="flex items-end justify-between border-b border-solid border-gray-400 mb-4 pb-2">
          <h2 className="font-bold text-4xl">Getting started</h2>
        </div>
        <CodeBlock>npm install react-headless-tabs</CodeBlock>
      </div>
    </>
  );
}
