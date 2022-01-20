import React from "react";
import styles from './Sizing.module.css'

let W = {
    96: '24rem',
    80: '20rem',
    72: '18rem',
    64: '16rem',
    60: '15rem',
    56: '14rem',
    52: '13rem',
    48: '12rem'
}

export let SizingFiles = {
    'index.html': `<div css={{
    '& > * + *': {
      margin_top: '1rem'
    }
  }}>
  <div css={{ width: w[96] }}>
      w-96
  </div>
  <div css={{ width: w[80] }}>
      w-80
  </div>
  <div css={{ width: w[72] }}>
      w-72
  </div>
  <div css={{ width: w[64] }}>
      w-64
  </div>
  <div css={{ width: w[60] }}>
      w-60
  </div>
  <div css={{ width: w[56] }}>
      w-56
  </div>
  <div css={{ width: w[52] }}>
      w-52
  </div>
  <div css={{ width: w[48] }}>
      w-48
  </div>
</div>
`,
    'theme.ts': `let W = {
    96: '24rem',
    80: '20rem',
    72: '18rem',
    64: '16rem',
    60: '15rem',
    56: '14rem',
    52: '13rem',
    48: '12rem'
}
`
}

let ExampleDiv = ({ w }: { w: number }) =>
    <div style={{ width: W[w] }} className={styles.bar}>
        w-{w}
    </div>

export let SizingDemo = (<>
    <ExampleDiv w={96} />
    <ExampleDiv w={80} />
    <ExampleDiv w={72} />
    <ExampleDiv w={64} />
    <ExampleDiv w={60} />
    <ExampleDiv w={56} />
    <ExampleDiv w={52} />
    <ExampleDiv w={48} />
</>)