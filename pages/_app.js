import App from "next/app";
import GlobalStyles from "../styles/globals";

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Component {...pageProps} />
				<GlobalStyles />
			</>
		);
	}
}

export default MyApp;
