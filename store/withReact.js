import React from "react";

export default App => {
    return class AppWithReact extends React.Component {
        static async getInitialProps(appContext) {

			let appProps = {};
			if (typeof App.getInitialProps === "function") {
				appProps = await App.getInitialProps(appContext);
			}

			return {
				...appProps,
			};
		}
        render() {
            return <App { ...this.props } />;
        }
    }
}