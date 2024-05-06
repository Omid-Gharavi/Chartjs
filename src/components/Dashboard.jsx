import Autocomplete from "./Autocomplete"
import Calendar from "./Calendar"
const Dashboard = () => {
    const options = [
        {
            label: 'Benin',
        },
        {
            label: 'Belgium',
        },
        {
            label: 'Iran'
        },
        {
            label: 'Italy',
        },
        {
            label: 'Germany',
        },
        {
            label: 'England',
        },
        {
            label: 'Sweden'
        },
        {
            label: 'Afghanistan',
        },
        {
            label: 'Austrilia'
        },
        {
            label: 'Brazil',
        },
    ]

    return (
        <div className='pt-7 px-3 rounded-2xl shadow-2xl flex flex-col items-center grow-[1]'>
            <p className='text-center'>تنظیمات</p>
            <div className='border-solid border-b-[2px] mt-4 border-black rounded-lg w-[300px]'>
            </div>
            <div className='mt-4 w-full'>
                <Autocomplete options={options} />
                <Calendar />
            </div>
        </div>
    )
}

export default Dashboard