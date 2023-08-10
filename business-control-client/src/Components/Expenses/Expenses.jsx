/** @format */

import "./Expenses.css";
const Expenses = ({ taka, red }) => {
	return (
		<div className='bg-secondary-bg  rounded-md text-center text-gray-color'>
			<div className='p-2 border-b border-primary-bg'>
				<p className='text-[18px] '>Total Incom</p>
			</div>
			<div
				className={`flex items-end gap-1 justify-center  mt-2 relative ${
					red && "red-after bg-[rgba(252,92,105,0.2)]"
				}`}
			>
				<h1 className='text-4xl text-white'>
					{parseFloat(taka).toFixed(2)}
				</h1>
				<span>tk</span>
			</div>

			<div className='py-2'>
				<p>Today</p>
			</div>
		</div>
	);
};

export default Expenses;
