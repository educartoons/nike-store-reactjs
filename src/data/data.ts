export interface DirectoryItem {
  name: string;
  type: "folder" | "file";
  children?: DirectoryItem[];
}

export const DIRECTORY: DirectoryItem = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "Documents",
      type: "folder",
      children: [
        { name: "Resume.pdf", type: "file" },
        { name: "CoverLetter.docx", type: "file" },
        {
          name: "Projects",
          type: "folder",
          children: [
            { name: "project1.docx", type: "file" },
            { name: "project2.xlsx", type: "file" },
            {
              name: "Research",
              type: "folder",
              children: [
                { name: "notes.txt", type: "file" },
                { name: "references.bib", type: "file" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Photos",
      type: "folder",
      children: [
        {
          name: "Vacation",
          type: "folder",
          children: [
            { name: "beach.png", type: "file" },
            { name: "mountains.jpg", type: "file" },
          ],
        },
        {
          name: "Family",
          type: "folder",
          children: [
            { name: "birthday_2024.jpg", type: "file" },
            { name: "wedding.png", type: "file" },
          ],
        },
      ],
    },
    {
      name: "Music",
      type: "folder",
      children: [
        { name: "rock.mp3", type: "file" },
        { name: "jazz.mp3", type: "file" },
        {
          name: "Playlists",
          type: "folder",
          children: [
            { name: "favorites.m3u", type: "file" },
            { name: "chill.m3u", type: "file" },
          ],
        },
      ],
    },
    {
      name: "todo.txt",
      type: "file",
    },
    {
      name: "readme.md",
      type: "file",
    },
  ],
};
