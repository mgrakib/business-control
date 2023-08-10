import Expenses from "../../Expenses/Expenses";
import Income from "../../Income/Income";
import Revenue from "../../Revenue/Revenue";


const TodaysReport = () => {
    return (
		<div className=' '>
			<div className='flex relative justify-between'>
				<div className='w-[40%] '>
					<Income taka={5000.00} green={true}/>
				</div>
				<div className='w-[150px] left-1/2 -translate-x-1/2 absolute bg-blue-500 h-[150px] rounded-full flex items-center justify-center'>
					<Revenue revenue={5} profet={true}/>
				</div>
				<div className='w-[40%] '>
					<Expenses taka={2000} />
				</div>
			</div>
		</div>
	);
};

export default TodaysReport;