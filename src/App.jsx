
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import Swal from 'sweetalert2';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Upper from './Components/Upper';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  const handleDelete = _id => {
    console.log(_id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        console.log('deleted');
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Coffee has been deleted.',
                'success'
              )
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);

            }
          })

      }
    })
  }

  return (
    <>
      <Navbar></Navbar>
      <Upper></Upper>
      <div className='m-20'>
        <h1 className='text-6xl text-purple-600 text-center my-20'>Coffee List Card: {coffees.length}</h1>

        <div className='grid md:grid-cols-2 gap-4'>
          {coffees.map((coffee) => (
            <div key={coffee._id}>
              <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={coffee.photo} alt="Movie" /></figure>
                <div className="flex justify-between w-full pr-4">
                  <div>
                    <h2 className="card-title">Name: {coffee.name}</h2>
                    <p>{coffee.quantity}</p>
                    <p>{coffee.supplier}</p>
                    <p>{coffee.taste}</p>
                  </div>
                  <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2">
                      <button className="btn join-item btn-primary">View</button>
                      <Link to={`/updateCoffee/${coffee._id}`}>
                        <button className="btn join-item btn-neutral">Edit</button>
                      </Link>
                      <button className="btn join-item btn-error" onClick={() => handleDelete(coffee._id)}>X</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
