import React from 'react';
import Income from '../../Income/Income';
import Revenue from '../../Revenue/Revenue';
import Expenses from '../../Expenses/Expenses';

const LastFifteenDays = () => {
    return (
		<div className=' '>
			<div className='flex relative justify-between'>
				<div className='w-[40%] '>
					<Income taka={9000} green={true}/>
				</div>
				<div className='w-[150px] left-1/2 -translate-x-1/2 absolute bg-blue-500 h-[150px] rounded-full flex items-center justify-center'>
					<Revenue revenue={10} profet={true} />
				</div>
				<div className='w-[40%] '>
					<Expenses
						taka={5870}
						
					/>
				</div>
			</div>
		</div>
	);
};

export default LastFifteenDays;