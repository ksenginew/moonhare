import React from "react";
import styles from './Colors.module.css'


let colors = {
    sky: 220,
    blue: 240,
    indigo: 260,
    violet: 280,
}

let shade = (h: number, l: number) => `hsl(${h}, 100%, ${100 - l}%)`

export let ColorsFiles = {
    'index.tsx': `
    <div css={row}>
      <div class="bg-sky-50"></div>
      <div class="bg-sky-100"></div>
      <div class="bg-sky-200"></div>
      <div class="bg-sky-300"></div>
      <div class="bg-sky-400"></div>
      <div class="bg-sky-500"></div>
      <div class="bg-sky-600"></div>
      <div class="bg-sky-700"></div>
      <div class="bg-sky-800"></div>
      <div class="bg-sky-900"></div>
    </div>
    <div class="grid grid-cols-10 gap-2">
      <div class="bg-blue-50"></div>
      <div class="bg-blue-100"></div>
      <div class="bg-blue-200"></div>
      <div class="bg-blue-300"></div>
      <div class="bg-blue-400"></div>
      <div class="bg-blue-500"></div>
      <div class="bg-blue-600"></div>
      <div class="bg-blue-700"></div>
      <div class="bg-blue-800"></div>
      <div class="bg-blue-900"></div>
    </div>
    <div class="grid grid-cols-10 gap-2">
      <div class="bg-indigo-50"></div>
      <div class="bg-indigo-100"></div>
      <div class="bg-indigo-200"></div>
      <div class="bg-indigo-300"></div>
      <div class="bg-indigo-400"></div>
      <div class="bg-indigo-500"></div>
      <div class="bg-indigo-600"></div>
      <div class="bg-indigo-700"></div>
      <div class="bg-indigo-800"></div>
      <div class="bg-indigo-900"></div>
    </div>
    <div class="grid grid-cols-10 gap-2">
      <div class="bg-violet-50"></div>
      <div class="bg-violet-100"></div>
      <div class="bg-violet-200"></div>
      <div class="bg-violet-300"></div>
      <div class="bg-violet-400"></div>
      <div class="bg-violet-500"></div>
      <div class="bg-violet-600"></div>
      <div class="bg-violet-700"></div>
      <div class="bg-violet-800"></div>
      <div class="bg-violet-900"></div>
    </div>`,
    'theme.ts': `let colors = {
    blue: 240,
    sky: 210,
    indigo: 180,
    violet: 150,
}

let shade = (h, l) => hsl(h, 100 %, 100 - l)

let row = {
    display: 'grid',
    grid_template_columns: repeat(10, minmax(0, '1fr')),
    gap: '0.5rem'
}
    `,
}
let ExampleTile = ({ color, shade: s }: { color: number, shade: number }) =>
    <div style={{ background: shade(color, s) }} className={styles.tile} />

let ExampleRow = ({ color }: { color: string }) =>
    <div className={styles.row}>
        <div className={styles.rule}>
            {[5, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((s, i) => <ExampleTile key={i} shade={s} color={colors[color]} />)}
        </div>
        <p>
            <small style={{ float: 'left' }}>{color}-50</small>
            <small style={{ float: 'right' }}>{color}-900</small>
        </p>
    </div>

export let ColorsDemo = <>
    <ExampleRow color={'sky'} />
    <ExampleRow color={'blue'} />
    <ExampleRow color={'indigo'} />
    <ExampleRow color={'violet'} />
</>
