'use client'
import Footer from "../home/footer/page";
import { usePathname } from "next/navigation";


const Layout = ({ children }) => {
	const pathname = usePathname();
	const routesWithHiddenForm = [
		'/services/event-management',
		'/services/logistics',
		'/services/catering',
		'/services/book-a-service'
	]
	return (
		<div>
			{children}
			<Footer showForm={!routesWithHiddenForm.includes(pathname)} />
		</div>
	);
};

export default Layout;
