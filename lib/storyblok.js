import StoryblokClient from "storyblok-js-client";
 
const Storyblok = new StoryblokClient({
  accessToken: "zmem3JJ0p0BZN9G8RGMhAgtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});