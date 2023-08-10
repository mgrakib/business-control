/** @format */

import "./Revenue.css";

const Revenue = ({ revenue, profet }) => {
	return (
		<div
			style={{
				backgroundImage: `conic-gradient(${
					profet ? "#01D1FF" : "#fc5c6a"
				} 0deg, ${profet ? "#01D1FF" : "#fc5c6a"} ${
					360 * (revenue / 100)
				}deg, #CED0D9 ${360 * (revenue / 100)}deg, #CED0D9 180deg)`,
			}}
			className={`w-full h-full bg-red-50 rounded-full flex items-center justify-center relative progress-after `}
		>
			{/* inside info  */}
			<div className='relative h-[75%] w-[75%] rounded-full flex flex-col items-center justify-center z-10 text-gray-color'>
				<div className='flex items-center gap-1'>
					<div
						className={`${
							profet
								? "green-trangle w-[12px] md:w-[20px] h-[12px] md:h-[20px]"
								: "red-trangle w-[12px] md:w-[20px] h-[12px] md:h-[20px]"
						}`}
					></div>
					<h3 className='text-[16px] md:text-[24px] font-bold text-gray-color'>
						{!profet && "-"}
						{revenue}%
					</h3>
				</div>

				<div className='text-center mt-1'>
					<p className='leading-[6px] md:leading-[10px] text-[12px] md:text-[16px]'>{profet? "Revenue":"Lose"}</p>
					<p>
						<small className='leading-[5px] md:leading-3 text-[10px] md:text-[12px] font-thin'>
							Target: 18%(P)
						</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Revenue;
