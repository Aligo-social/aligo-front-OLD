import { Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"

const initialValues = { email: "", password: "", rememberMe: false }
const handleFormSubmit = (values) => {
	alert(JSON.stringify(values, null, 1))
}

const schema = Yup.object().shape({
	email: Yup.string().email("L'email est invalide").max(50, "L'email est trop long").required("L'email est requis"),
	password: Yup.string().max(50, "Le mot de passe est trop long").required("Le mot de passe est requis"),
})

const Login = () => {
	return (
		<main className="flex min-h-screen w-screen items-center justify-center pb-16 md:pb-0">
			<Formik initialValues={initialValues} onSubmit={handleFormSubmit} validationSchema={schema}>
				{({ errors, touched }) => (
					<Form className="w-11/12 max-w-96 rounded border p-3 shadow sm:p-10 md:w-96">
						<Link to="/" className="mb-4 flex flex-col items-center">
							<img src="/images/logo.svg" alt="Logo du site Aligo" width="100" className="mb-4" />
							<img src="/images/name.svg" alt="Nom du site Aligo" width="200" />
						</Link>
						<label className="form-control mb-3 w-full">
							<Field
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								autoComplete="email"
								className={`input input-bordered input-secondary transition-all ${errors.email && touched.email && "input-error bg-red-200"}`}
							/>
							{errors.email && touched.email && <span className="label-text-alt text-red-500">{errors.email}</span>}
						</label>

						<label className="form-control mb-3 w-full">
							<Field
								type="password"
								name="password"
								id="password"
								placeholder="Mot de passe"
								autoComplete="current-password"
								className={`input input-bordered input-secondary transition-all ${errors.password && touched.password && "input-error bg-red-200"}`}
							/>
							{errors.password && touched.password && (
								<span className="label-text-alt text-red-500">{errors.password}</span>
							)}
						</label>

						<div className="form-control mb-3 w-max">
							<label className="label cursor-pointer">
								<span className="label-text mr-2">Se souvenir de moi</span>
								<Field type="checkbox" name="rememberMe" className="toggle toggle-accent" />
							</label>
						</div>

						<input
							type="submit"
							value="Se connecter"
							className="btn-site-gradient btn mb-3 w-full transition-all hover:scale-105"
						/>

						<p className="text-center text-sm">
							Vous n'avez pas de compte ?{" "}
							<Link to="/signup" className="link link-primary">
								Cliquez ici.
							</Link>
						</p>
					</Form>
				)}
			</Formik>
		</main>
	)
}

export default Login
