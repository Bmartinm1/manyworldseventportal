import '../styles/globals.css';
import Layout from '../components/layout/Layout';

function AddEventsApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default AddEventsApp;
