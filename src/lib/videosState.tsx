import { create } from "zustand";
import axios from "axios";

import { Video, VideoDetails } from "./types";

// type FilterType = "all" | "favorites";

type VideosStore = {
  isLoading: boolean;
  videos: Video[];
  videosDetails: VideoDetails[];
  getVideos: () => Promise<void>;
  getVideosDetails: (videos: Video[]) => Promise<void>;
  deleteVideo: (videoId: string) => Promise<void>;
  updateVideo: (updatedVideo: Video) => Promise<void>;
  setVideos: (videos: string) => Promise<void>;
  setVideosDetails: (videosDetails: VideoDetails[]) => Promise<void>;
};

const useVideosState = create<VideosStore>()((set, get) => ({
  isLoading: true,
  videos: [],
  videosDetails: [],
  getVideos: async () => {
    chrome.storage.local.get(["videos"], (res) => {
      const videos = JSON.parse(res.videos || "[]");
      set({ videos });
    });
  },
  getVideosDetails: async (videos: Video[]) => {
    try {
      const data: VideoDetails[] = await Promise.all(
        videos.map(async (item) => {
          try {
            const res = await axios.get(
              `https://www.youtube.com/oembed?url=${item.url}&format=json`
            );
            return { itemDetails: item, ...res.data };
          } catch (error) {
            console.error("Failed to load video:", item);
            return { itemDetails: item };
          }
        })
      );
      data.sort(
        (a, b) =>
          new Date(b.itemDetails.dateAdded).getTime() -
          new Date(a.itemDetails.dateAdded).getTime()
      );
      set({ videosDetails: data, isLoading: false });
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  },

  deleteVideo: async (videoId) => {
    const { videos, videosDetails } = get();
    const newVideos = videos.filter((video) => video._id !== videoId);
    const newVideosDetails = videosDetails.filter(
      (video) => video.itemDetails._id !== videoId
    );
    set({
      videos: newVideos,
      videosDetails: newVideosDetails,
    });
    chrome.storage.local.set({ videos: JSON.stringify(newVideos) });
  },
  updateVideo: async (updatedVideo) => {
    const { videos } = get();
    const newVideos = videos.map((item) =>
      item._id === updatedVideo._id ? updatedVideo : item
    );
    set({ videos: newVideos });
    chrome.storage.local.set({ videos: JSON.stringify(newVideos) });
  },
  setVideos: async (videos) => {
    chrome.storage.local.set({ videos });
    set({ videos: JSON.parse(videos || "[]") });
  },
  setVideosDetails: async (videosDetails) => {
    set({ videosDetails });
  },
}));

export default useVideosState;
