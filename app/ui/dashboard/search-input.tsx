'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchAtmInput() {
  const searchParams = useSearchParams(); 
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">Que ATM desea buscar?</span>
      </div>
      <input
        type="text"
        placeholder="ATM"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}        
        defaultValue={searchParams.get('query')?.toString()}
      />
    </label>
    </div>
  );
}
