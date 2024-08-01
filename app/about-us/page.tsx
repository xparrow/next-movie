export const metadata = {
  title: 'About us',
}

async function throwError(){
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error('something broken');
}

export default async function AboutUs(){
  
  const throwErr = await throwError();
  
  return (
    <h1>About us</h1>
  )
}