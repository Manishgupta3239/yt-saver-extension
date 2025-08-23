import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import useVideosState from "@/lib/videosState";
import { ChevronLeftIcon, DownloadIcon, UploadIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {
  const { videos, setVideos } = useVideosState();
  let navigate = useNavigate();
  const [inputData, setInputData] = useState("");
  return (
    <div className="w-96 h-[32rem] flex flex-col p-4 gap-4 border rounded-md shadow-lg">
      <div className="flex flex-col items-center justify-between w-full gap-2">
        <div className="flex justify-between items-center w-full gap-4">
          <div className="flex items-center gap-2 flex-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                navigate("/index.html");
              }}
            >
              <ChevronLeftIcon />
            </Button>
            <div className="text-2xl font-bold">Settings</div>
          </div>
        </div>
      </div>
      <div className="border-b" />
      <ScrollArea>
        <div className="flex flex-col gap-4">
          <textarea
            placeholder="Paste your data here"
            className="h-40 w-full border rounded-md p-2"
            onChange={(e) => setInputData(e.target.value)}
          />
          <Button
            className="w-full"
            onClick={() => {
              setVideos(inputData);
            }}
          >
            <UploadIcon className="mr-2 h-4 w-4" />
            Import Data
          </Button>
          <Button
            className="w-full"
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(videos));
            }}
          >
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}
