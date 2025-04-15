export type MarkerType = {
  author: string;
  ride_location: {lat: number, lng: number};
  created_at: string;
  ride_date: string;
  ride_time: string;
  description: string;
  discipline: string;
  title: string;
  public: boolean;
  participants: object;
};

 export const markers: MarkerType[] = [
  {
    author: "victortaylor",
    ride_location: { lat: 54.6578, lng: -1.8615 },
    created_at: "2025-03-26T00:00:00Z",
    ride_date: "2025-04-17",
    ride_time: "16:11",
    description:
      "Gonna hit some jumps and tech lines. Bring pads and let’s send it!",
    discipline: "Downhill",
    title: "Shred Day at Pine Hollow – Tech & Gnar!",
    public: true,
    participants: [],
  },
  {
    author: "crawfordjeff",
    ride_location: { lat: 54.6589, lng: -1.8602 },
    created_at: "2025-03-31T00:00:00Z",
    ride_date: "2025-04-26",
    ride_time: "12:10",
    description:
      "Chilled cruise with scenic views – perfect for a Sunday ride.",
    discipline: "Casual",
    title: "Flow Day at Foxglove Corner – Loops & Vibes!",
    public: true,
    participants: [],
  },
  {
    author: "epeterson",
    ride_location: { lat: 54.6565, lng: -1.8648 },
    created_at: "2025-04-04T00:00:00Z",
    ride_date: "2025-04-28",
    ride_time: "19:36",
    description: "Bring your best berm game – it's fast and fun.",
    discipline: "Cross Country",
    title: "Shred Day at Ranger's Rest – Jumps & Vibes!",
    public: true,
    participants: [],
  },
  {
    author: "istevens",
    ride_location: { lat: 54.6591, lng: -1.8623 },
    created_at: "2025-03-28T00:00:00Z",
    ride_date: "2025-04-19",
    ride_time: "03:43",
    description: "Bring your best berm game – it's fast and fun.",
    discipline: "Cross Country",
    title: "Flow Day at Bracken Rise – Tech & Descents!",
    public: true,
    participants: [],
  },
  {
    author: "powersvalerie",
    ride_location: { lat: 54.6557, lng: -1.8599 },
    created_at: "2025-04-05T00:00:00Z",
    ride_date: "2025-04-21",
    ride_time: "03:57",
    description: "Flowy laps with a bit of tech to keep it spicy.",
    discipline: "Cross Country",
    title: "Cruise Day at Hawk's Crag – Jumps & Descents!",
    public: true,
    participants: [],
  },
  {
    author: "gregoryryan",
    ride_location: { lat: 54.6582, lng: -1.8637 },
    created_at: "2025-03-22T00:00:00Z",
    ride_date: "2025-04-29",
    ride_time: "06:23",
    description: "Nothing too serious – flow trails and fun vibes.",
    discipline: "Cross Country",
    title: "Loop Day at Fern Hollow – Loops & Descents!",
    public: true,
    participants: [],
  },
  {
    author: "cynthia92",
    ride_location: { lat: 54.6561, lng: -1.8605 },
    created_at: "2025-03-27T00:00:00Z",
    ride_date: "2025-04-22",
    ride_time: "13:02",
    description: "Loop ride with a quick café stop after.",
    discipline: "Casual",
    title: "Loop Day at Badger's Run – Tech & Gnar!",
    public: true,
    participants: [],
  },
  {
    author: "anthonygonzales",
    ride_location: { lat: 54.6575, lng: -1.8652 },
    created_at: "2025-04-02T00:00:00Z",
    ride_date: "2025-04-27",
    ride_time: "19:39",
    description: "Expect roots, rocks and maybe a few laughs!",
    discipline: "Casual",
    title: "Flow Day at Heather Pass – Tech & Gnar!",
    public: true,
    participants: [],
  },
  {
    author: "jamesgriffith",
    ride_location: { lat: 54.6584, lng: -1.861 },
    created_at: "2025-03-30T00:00:00Z",
    ride_date: "2025-04-25",
    ride_time: "21:49",
    description:
      "Climbs, descents, and everything in between. It’s gonna be a blast!",
    discipline: "Cross Country",
    title: "Cruise Day at Birch Bluff – Loops & Fun!",
    public: true,
    participants: [],
  },
  {
    author: "anthony07",
    ride_location: { lat: 54.6593, lng: -1.8634 },
    created_at: "2025-03-20T00:00:00Z",
    ride_date: "2025-04-20",
    ride_time: "14:58",
    description: "XC style – steady pace, great terrain.",
    discipline: "Cross Country",
    title: "Cruise Day at Stonecrop Trail – Tech & Vibes!",
    public: true,
    participants: [],
  },
];
