import type { NextPage } from "next"
import Head from "next/head"
import Flexbox from "../components/flexgrid/Flexbox"
import Navbar from "../components/navigation/Navbar"

const Home: NextPage = (): JSX.Element => {

	return (

		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta name="author" content="[Fer Torres](https://github.com/saufth)"/>
				<meta name="description" content="Web development portfolio" />
				<meta name="keywords" content="saufth, desarrollor web, desarrollo web, diseñador web, diseño web"/>
				<title>Sauftware: Software Developer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>

				<Navbar />

				<div className="bg-green-200">
					<Flexbox direction="row" wrap={ true } justifyContent="center" gap="8" padding="8">
						<div className="w-96 h-4 bg-red-100"></div>
						<div className="w-96 h-4 bg-red-200"></div>
						<div className="w-96 h-4 bg-red-300"></div>
						<div className="w-96 h-4 bg-red-400"></div>
						<div className="w-96 h-4 bg-red-500"></div>
						<div className="w-96 h-4 bg-red-600"></div>
						<div className="w-96 h-4 bg-red-700"></div>
						<div className="w-96 h-4 bg-red-800"></div>
						<div className="w-96 h-4 bg-red-900"></div>
						<div className="w-96 h-4 bg-blue-900"></div>
						<div className="w-96 h-4 bg-blue-800"></div>
						<div className="w-96 h-4 bg-blue-700"></div>
					</Flexbox>
				</div>

			</main>
		</>

	)

}

export default Home
