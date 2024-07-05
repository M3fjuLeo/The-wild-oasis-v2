import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid itmes-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
}
