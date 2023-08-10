/** @format */

import "./Expenses.css";
const Expenses = ({ taka, red }) => {
	return (
		<div>
			<div className='bg-secondary-bg  rounded-md text-center text-gray-color'>
				<div className='p-2 border-b border-primary-bg'>
					<p className='text-[14px] md:text-[18px]'>Total Expenses</p>
				</div>
				<div
					className={`flex items-end gap-1 justify-center  mt-2 relative  ${
						red &&
						"bg-[rgba(252,92,105,0.2)] red-after after:-bottom-2 md:after:-bottom-[5px] after:left-2 md:after:left-[10px] md:after:w-[20px] after:w-[15px] md:after:h-[20px] after:h-[15px]"
					}`}
				>
					<h1 className='text-[18px] md:text-4xl text-white'>
						{parseFloat(taka).toFixed(2)}
					</h1>
					<span>tk</span>
				</div>

				<div className='py-1 md:py-2'>
					<p className='text-[14px] md:text-[16px]'>Today</p>
				</div>
			</div>
		</div>
	);
};

export default Expenses;
