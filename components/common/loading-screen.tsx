import LoaderIcon from "@/components/icon/LoaderIcon";

export default function LoadingScreen() {
  return (
    <div className="bg-background absolute z-[999999] flex h-screen w-full items-center justify-center">
      <div className="flex h-40 w-full items-center justify-center gap-2">
        <LoaderIcon />
        Loading...
      </div>
    </div>
  );
}
