// app/roster/[id]/page.js
'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PlayerAPI } from '../../data/playerAPI';

export default function Player() {
  const { id } = useParams();
  const player = PlayerAPI.get(parseInt(id, 10));

  if (!player) {
    
		return <div>Sorry, but the contact was not found!</div>;
  }

  return (
    <main>
      <div>
        <h1>{player.name} </h1>
        <h3>Phone Number: ({player.number})</h3>
        <h3>Email: {player.position}</h3>
        <h3>Profile Pic:</h3>
        <img
        src={player.url}
        alt={player.name}
        style={{ width: '200px', height: 'auto' }} 
      	/>
				<br/>
				<br/>
        <Link href='/roster'>Back</Link>
      </div>
    </main>
  );
}