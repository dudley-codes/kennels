import React from "react";
import { AnimalCard } from "./animal/AnimalCard";
import "./Kennel.css";
import { CustomerCard } from "./customer/Customer";

export const Kennel = () => (
	<>
		<h2>Nashville Kennels</h2>
		<small>Loving care when you're not there.</small>

		<address>
			<div>Visit Us at the Nasvhille North Location</div>
			<div>500 Puppy Way</div>
		</address>

		<h2>Animals</h2>
		<article className="animals">
			<AnimalCard />
			<AnimalCard />
			<AnimalCard />
		</article>

		<h2>Customers</h2>
		<article className="customers">
			<CustomerCard />
			<CustomerCard />
			<CustomerCard />
		</article>
	</>
);
