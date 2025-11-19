import LoaderIcon from "@/components/icon/LoaderIcon";

export default function LoadingScreen() {
  return (
    <div className="h-screen absolute z-[999999] w-full bg-background flex items-center justify-center">
      <div className="flex gap-2 h-40 w-full items-center justify-center">
        <LoaderIcon />
        Loading...
      </div>
    </div>
  );
}
