const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			signup: async(name, surname, email, password) =>{
				const store = getstore();
				const resp = await fetch('https://3001-pablotori98-reactflaskh-ul85rg9g3kz.ws-eu79.gitpod.io/api/signup',{
					method: "POST",
					headers: {"Content-Type":"application/json"},
					body: JSON.stringify({
						name: name,
						surname: surname,
						email: email,
						password: password
					}),
				});
				if(!resp.ok) throw Error("Problema en el signup")
				if(resp.status === 401){
					throw "Credenciales no validas"
				}
				else if(resp.status ===402){
					throw "Formato usuario o contraseña no valido"
				}
				if(resp.ok){
					Navigate("/")
				}
			}
		}
	};
};

export default getState;
