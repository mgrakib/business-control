import Expenses from "../../Expenses/Expenses";
import Income from "../../Income/Income";
import Revenue from "../../Revenue/Revenue";

const YesterDayReport = () => {
    return (
		<div className=' '>
			<div className='flex relative justify-between'>
				<div className='w-[40%] '>
					<Income taka={1000}/>
				</div>
				<div className='w-[150px] left-1/2 -translate-x-1/2 absolute bg-blue-500 h-[150px] rounded-full flex items-center justify-center'>
					<Revenue revenue={1}/>
				</div>
				<div className='w-[40%] '>
					<Expenses taka={5870} red={true}/>
				</div>
			</div>
		</div>
	);
};

export default YesterDayReport;