'use client'
import Footer from "../home/footer/page";
import { usePathname } from "next/navigation";


const Layout = ({ children }) => {

	return (
		<div>
			{children}
			<Footer showForm={true} />
		</div>
	);
};

export default Layout;
