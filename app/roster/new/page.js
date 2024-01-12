// app/roster/new/page.js
'use client';
import { PlayerAPI } from '../../data/playerAPI';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Import the Link component

export default function AddPlayer() {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [position, setPosition] = useState(null);
  const [url, setUrl] = useState(null);
  const router = useRouter();

  const handleSubmitPlayerClick = () => {
    PlayerAPI.addPlayer({
      name,
      number,
      position,
      url,
    });
    router.push('/roster');
  };

  return (
    <div>
      <h1>Add New Contact</h1>
			
      <div className='form-group'>
        <label htmlFor='name'><h3>Name:</h3></label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='number'><h3>Phone:</h3></label>
        <input
          type='text'
          className='form-control'
          onChange={(event) =>
            setNumber(parseInt(event.target.value, 10))
          }
        />
      </div>

      <div className='form-group'>
        <label htmlFor='email'><h3>Email:</h3></label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setPosition(event.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='url'><h3>Url:</h3></label>
        <input
          type='text'
          className='form-control'
          onChange={(event) => setUrl(event.target.value)}
        />
      </div>
				<br/>
      <button type='button' onClick={handleSubmitPlayerClick}>
        Add Contact
      </button>

      {/* navigate to '/roster' */}
      <Link href='/roster'>
				<br/>
				<br/>
         Contacts
      </Link>
    </div>
  );
}