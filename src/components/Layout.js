import Infobar from "./Infobar";
import Navbar from "./Navbar";
import ContactRow from "./ContactRow";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Infobar />
      <Navbar />
      <div>{children}</div>
      <ContactRow />
      <Footer />
    </>
  );
}
