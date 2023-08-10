
import './Income.css'
const Income = ({ taka, green}) => {
    return (
		<div className='bg-secondary-bg  rounded-md text-center text-gray-color'>
			<div className='p-2 border-b border-primary-bg'>
				<p className='text-[18px] '>Total Income</p>
			</div>
			<div
				className={`flex items-end gap-1 justify-center  mt-2 relative  ${
					green && "bg-[rgba(14,211,83,0.2)] green-after"
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

export default Income;