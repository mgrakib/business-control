
const SidNavBar = () => {
    return (
		<div className='bg-secondary-bg py-[30px]  h-[100vh]'>
			<h1 className='text-2xl mb-[30px] font-bold text-white cursor-pointer px-5'>
				MG Shop
			</h1>

			<nav>
				<ul>
					<li className='text-gray-color bg-[#2A547D] px-5 py-2 cursor-pointer'>
						Financial Report
					</li>
					<li className='text-gray-color cursor-pointer px-5 py-2'>
						View Details
					</li>
					<li className='text-gray-color cursor-pointer px-5 py-2'>
						Add New Product
					</li>
					<li className='text-gray-color cursor-pointer px-5 py-2'>
						Sell Product
					</li>
					<li className='text-gray-color cursor-pointer px-5 py-2'>
						Download Report
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SidNavBar;