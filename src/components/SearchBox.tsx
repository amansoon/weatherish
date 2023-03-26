import Icon from './Icon'
import { Search } from 'iconoir-react';


function SearchBox() {
  return (
    <div className="flex items-center bg-slate-200 rounded-md w-[280px]">
      <input
        type="text"
        placeholder='Search something...'
        className="text-slate-900 bg-slate-200 rounded-md pl-4 py-2.5 transition-all outline-none grow"
      />
      <div className="ml-4 mr-2">
        <Icon> <Search height={20} width={20} strokeWidth={1.8} /> </Icon>
      </div>
    </div>
  );
}

export default SearchBox;
