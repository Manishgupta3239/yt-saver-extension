import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function SettingsSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Link
            to={"/settings"}
            className="border cursor-pointer hover:bg-secondary rounded-md py-2 px-4"
          >
            Settings
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
