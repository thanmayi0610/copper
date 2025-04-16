
import "./globals.css";

import React, { PropsWithChildren } from 'react'

const Rootlayout = (props: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        {props.children}
      </body>

    </html>
  );
};

export default Rootlayout