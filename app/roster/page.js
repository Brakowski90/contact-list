// app/roster/page.js
'use client';
import { useState } from 'react';
import { PlayerAPI } from '../data/playerAPI';
import Link from 'next/link';

export default function Roster() {
  const [allPlayers, setAllPlayers] = useState(PlayerAPI.all());

  const handleDeleteClick = (number) => {
    PlayerAPI.deletePlayer(number);
    setAllPlayers(PlayerAPI.all());
  };

  return (
    <main>
      <div>
        <h1>Welcome to the Contact Page!</h1>
        {allPlayers.map((p) => (
          <div key={p.number} style={{ fontSize: '24px' }}>
            <Link href={`/roster/${p.number}`}>{p.name}</Link>
            <button type="button"style={{ fontSize: '8px', marginLeft: '5px' }}>edit</button>
            <button type="button" onClick={() => handleDeleteClick(p.number)} style={{ fontSize: '8px', marginLeft: '5px' }}>
              x
            </button>
          </div>
        ))}
        
        <br/>
        <Link href="/roster/new">
          <button type="button">
            Add Contact
          </button>
        </Link>
      </div>
    </main>
  );
}