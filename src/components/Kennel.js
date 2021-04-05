import React from "react";
import { AnimalCard } from "./animal/AnimalCard";
import "./Kennel.css";
import { CustomerCard } from "./customer/Customer";
import { EmployeeCard } from "./employee/Employee";
import { PropsAndState } from "./PropAndState";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";

export const Kennel = () => (
	<>
		<NavBar />
		<ApplicationViews />
		{/* <h2>Nashville Kennels</h2>
		<small>Loving care when you're not there.</small>

		<address>
			<div>Visit Us at the Nasvhille North Location</div>
			<div>500 Puppy Way</div>
		</address>
		<PropsAndState yourName="Alex" />
		<h2>Animals</h2>
		<article className="animals">
			<AnimalCard />
		</article>

		<h2>Customers</h2>
		<article className="customers">
			<CustomerCard />
		</article>

		<h2>Employees</h2>
		<article className="employees">
			<EmployeeCard />
		</article> */}
	</>
);
