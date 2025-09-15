import React, { useContext, useEffect, useState } from 'react'
import { MdAutoDelete } from "react-icons/md";
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CiEdit } from "react-icons/ci";
import { AuthContext } from '../../Authantication/Provider/AuthProvider';



export default function MyList() {
  // const load = useLoaderData()
  // console.log(load, 'data ase')
  const [user1, setuser1] = useState([])
  const { userdata } = useContext(AuthContext);


  useEffect(() => {
    if (userdata?.email) {
      fetch(`http://localhost:5000/sportdata/email/${userdata.email}`)
        .then(res => res.json())
        .then(data => setuser1(data))
    }
  }, [userdata]);
  const hendledetele = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then(result => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/sportdata/${id}`, {
            method: "DELETE"
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                const remaining = user1.filter(d => d._id !== id)
                setuser1(remaining)
              }
              console.log(data)
            })
        }
      })
  }



  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Country Name</th>
              <th>location</th>
              <th>yearcost</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              user1.map((d, index) => <tr>
                <th>{index + 1}</th>
                <td>{d.countryname}</td>
                <td>{d.location}</td>
                <td>{d.yearcost}</td>
                <td className='cursor-pointer ' onClick={() => hendledetele(d._id)}><MdAutoDelete className='size-5'></MdAutoDelete></td>
                <Link to={`/updatedata/${d._id}`}><td className='cursor-pointer '><CiEdit className='size-5'></CiEdit ></td></Link>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
