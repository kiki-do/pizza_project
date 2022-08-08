import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={500}
    viewBox="0 0 250 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="207" rx="10" ry="10" width="250" height="15" />
    <rect x="15" y="244" rx="7" ry="7" width="220" height="65" />
    <rect x="125" y="330" rx="16" ry="16" width="110" height="35" />
    <rect x="0" y="325" rx="0" ry="0" width="90" height="40" />
    <circle cx="125" cy="104" r="95" />
  </ContentLoader>
);

export default MyLoader;
