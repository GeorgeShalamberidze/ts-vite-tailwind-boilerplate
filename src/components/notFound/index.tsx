import { useNavigate } from 'react-router-dom';

const PageNotFound: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-main-menu-bg bg-cover bg-center bg-inherit h-screen w-screen overflow-hidden flex items-center justify-center text-3xl text-white flex-col gap-5">
			<div className="text-5xl">Page Not Found</div>
			<button
				onClick={() => navigate('/')}
				className="p-2 rounded border border-solid border-blue bg-slate-900 hover:opacity-80 cursor-pointer"
			>
				Back to Home
			</button>
		</div>
	);
};

export default PageNotFound;
