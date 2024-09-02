interface MenuList {
  id: number;
  href: string;
  title: string;
  imgUrl: string;
}

export const menuList: MenuList[] = [
  { id: 1, href: "/", title: "My Posts", imgUrl: "/posts.png" },
  { id: 2, href: "/", title: "Activity", imgUrl: "/activity.png" },
  { id: 3, href: "/", title: "Marketplace", imgUrl: "/market.png" },
  { id: 4, href: "/", title: "Events", imgUrl: "/events.png" },
  { id: 5, href: "/", title: "Albums", imgUrl: "/albums.png" },
  { id: 6, href: "/", title: "Videos", imgUrl: "/videos.png" },
  { id: 7, href: "/", title: "News", imgUrl: "/news.png" },
  { id: 8, href: "/", title: "Courses", imgUrl: "/courses.png" },
  { id: 9, href: "/", title: "Lists", imgUrl: "/lists.png" },
  { id: 10, href: "/", title: "Settings", imgUrl: "/settings.png" },
];
