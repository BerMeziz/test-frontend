/* Components */

import { ReduxProviders } from '@/store/reduxProvider';
import "./globals.css"



export const metadata = {
  title: "Pokemon",
};

interface IProps extends React.PropsWithChildren { }
export default function RootLayout({ children }: IProps) {

  return (
    <ReduxProviders>
      
        <html lang="en">
          <body>
            <div>
              <section>
                <main id="app">{children}</main>
              </section>
            </div>
          </body>
        </html>
        
    </ReduxProviders>
  )
}
