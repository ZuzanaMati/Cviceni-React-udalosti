import React from 'react'

// Zadání: Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.



export const Uloha1 = () => {
	let handleClick = () => {
		alert("Ahoj")
	}

	return <button onClick={handleClick}>Ukaž bublinu</button>

	// <button onClick={() => {alert("Ahoj")}}>Ukaž bublinu</button>

}
