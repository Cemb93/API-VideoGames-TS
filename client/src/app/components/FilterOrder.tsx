import { useAppDispatch, useAppSelector } from "@/Hooks";
import { InitialState } from "@/types";
import { GamesGenres, IGenres } from "../../../../interface";

export const FilterOrder = (
  {orders,setOrders,filters,setFilters}:
  // {orders:any,setOrders:any,}
  any
) => {
  const dispatch = useAppDispatch();
  const {allGames} = useAppSelector((state: InitialState) => state);
  return (
    <div>
      <select onChange={(e) => {
        setFilters({
          filters: e,
          created: e.target.value
        })
      }} 
      id="created"
      >
        <option value="all-games">all games</option>
        <option value="created">created</option>
        <option value="api">api</option>
      </select>

      {/* <select
        onChange={(e) => {
          setFilters({
            filter: e,
            genres: e.target.value,
          })
        }}
        id="genres"
      >
        <option>All Genres</option>
        <option>All Genres</option>
        <option>All Genres</option>
        <option>All Genres</option>

        {allGames.map((el: GamesGenres) => {
          el.genres.map((genre: IGenres | string, idx: number) => {
            if (typeof genre === 'object') {
              return <optgroup>
                <option key={idx} >{genre.name}</option>
              </optgroup>
            } else {
              return <optgroup>
                <option key={idx} >{genre}</option>
              </optgroup>
            }
          })
        })}
      </select> */}
    </div>
  );
}