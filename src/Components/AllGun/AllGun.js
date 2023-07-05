import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({countIncrease}) => {
  const [guns,setGuns] = useState([]);
  console.log(guns);
  // async() diye korte chaile
  // const datas = async () => {
  //     const res=await fetch(
  //        `https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`
  //     );
  //     const data = await res.json();
  //     setGuns(data);
  // }
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
    // datas();
  }, []);
  //[] kono value na dile by deault useEffect() ekbar ranna kore

  return (
    // react fragment bole <> take
    <div className="mt-5">
      <div className="my-7">
        <h1 className="text-center text-4xl font-bold mt-4">
          Welcome To Gun Store
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad omnis ex,
          enim alias magni nesciunt aut aperiam in et, dolorum fuga vel cum
          nihil dolores.
        </p>
      </div>

      <div className="my-5 w-[90%] mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {guns.map((gun) => (
          <SingleGun gun={gun} countIncrease={countIncrease}></SingleGun>
        ))}
      </div>
    </div>
  );
};

export default AllGun;