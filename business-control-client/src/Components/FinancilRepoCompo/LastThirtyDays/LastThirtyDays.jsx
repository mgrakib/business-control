import React from 'react';
import Income from '../../Income/Income';
import Revenue from '../../Revenue/Revenue';
import Expenses from '../../Expenses/Expenses';

const LastThirtyDays = () => {
    return (
		<div className=' '>
			<div className='flex relative justify-between'>
				<div className='w-[40%] '>
					<Income taka={5000.0} green={true} />
				</div>
				<div className='w-[100px] md:w-[150px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute bg-blue-500 h-[100px] md:h-[150px] rounded-full flex items-center justify-center z-30'>
					<Revenue
						revenue={10}
						profet={true}
					/>
				</div>
				<div className='w-[40%] '>
					<Expenses
						taka={2000}
						
					/>
				</div>
			</div>
		</div>
	);
};

export default LastThirtyDays;