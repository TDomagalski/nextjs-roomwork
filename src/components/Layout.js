import Infobar from "./Infobar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<>
			<Infobar />
			<Navbar />
			<div>{children}</div>
		</>
	);
}
