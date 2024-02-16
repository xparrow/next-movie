import dynamic from "next/dynamic";

const DynamicLoadingNoSSR = dynamic(
  ()=> import("../../components/Loading"),
  {ssr:false}
);

export default function HomeLoading(){
  return (
    <DynamicLoadingNoSSR />
  )
}