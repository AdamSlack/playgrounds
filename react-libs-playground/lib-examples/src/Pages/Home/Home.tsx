import { DefaultLayout } from "../../Layouts/DefaultLayout";

export const Home = () => {

  const testText = Array.from({length: 10}, (_, idx) => (
    <div key={idx}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
    </div>
  ))

  return (
    <DefaultLayout>
      <>
        { testText }
      </>
    </DefaultLayout>
  )
}

export default Home;