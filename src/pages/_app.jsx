import 'tailwindcss/tailwind.css'
import { AppLayout } from 'src/layouts/AppLayout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp
