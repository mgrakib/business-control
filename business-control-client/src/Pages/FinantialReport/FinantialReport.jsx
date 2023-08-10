import LastFifteenDays from "../../Components/FinancilRepoCompo/LastFifteenDays/LastFifteenDays";
import TodaysReport from "../../Components/FinancilRepoCompo/TodaysReport/TodaysReport";
import YesterDayReport from "../../Components/FinancilRepoCompo/YesterDayReport/YesterDayReport";

const FinantialReport = () => {
    return (
		<div className='p-[30px] '>
			<h1 className='text-2xl font-bold text-gray-color'>
				Financial Report
			</h1>

			<div className='mt-[30px] flex gap-[30px]'>
				{/* days report  */}
				<div className='w-[50%] flex flex-col gap-10'>
                    <TodaysReport />
                    <YesterDayReport />
                    <LastFifteenDays />
                    <LastFifteenDays />
				</div>

				{/* month report */}
				<div className="flex-1">
					<div className="bg-secondary-bg w-full">alsdfj</div>
				</div>
			</div>
		</div>
	);
};

export default FinantialReport;