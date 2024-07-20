import { Outlet } from 'react-router';

const RootLayout = () => {
	return (
		<div className="bg-main-menu-bg bg-cover bg-center bg-no-repeat min-h-screen w-screen overflow-hidden">
			{/* <div className="bg-main-menu-bg bg-cover bg-center bg-no-repeat min-h-screen w-screen overflow-hidden"> */}
			<Outlet />
		</div>
	);
};

export default RootLayout;
