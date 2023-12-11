import React, { useState, useMemo } from "react";
import "./index.css";

const App = ({ users }) => {
	const [isDark, setIsDark] = useState(false);

	const obj = {
		hello: {
			world: {
				data: 1
			}
		}
	}

	const data = useMemo(() => obj.hello.world.data, []);

	const convertedUsers = useMemo(() => {
		const result = Object.keys(users).map((userKey) => {
			// console.log(userKey);
			const user = users[userKey];
			return {
				id: user.id,
				name: user.name,
				age: user.age,
			};
		});

		return result;
	}, [users]);

	// console.log(users)
	// console.log(convertedUsers)

	const onClickHandler = () => {
		setIsDark((value) => !value);
	};

	return (
		<div className={isDark ? 'dark' : 'light'}>
			<button onClick={onClickHandler}>Темная тема</button>


			{convertedUsers.map((user) => console.log(user) || (
				<div key={user.id}>
					Имя: {user.name}
					Возраст: {user.age}
				</div>
			))}
		</div>
	);
};

export default App;
