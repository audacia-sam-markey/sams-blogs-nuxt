import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { IAuthor } from "./interfaces/author.interface";

export class Author {
  authorDetails!: IAuthor;

  constructor(authorDetails: ParsedContent) {
    this.authorDetails = {
      _path: authorDetails._path as string,
      body: authorDetails["about-me"],
      displayName: authorDetails["display-name"],
      name: authorDetails.name,
      position: authorDetails.position,
      profilePicture: authorDetails["profile-picture"],
    };
  }
}
