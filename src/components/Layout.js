import Infobar from "./Infobar";

export default function Layout({ children }) {
	return (
		<>
			<Infobar />
			<div>{children}</div>
		</>
	);
}
