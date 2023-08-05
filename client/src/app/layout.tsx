'use client';

import { store } from "@/redux/Store"
import { Provider } from "react-redux"

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout(
  { children,}: { children: React.ReactNode }
) {
  return (
    <Provider store={store} >
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  )
}
