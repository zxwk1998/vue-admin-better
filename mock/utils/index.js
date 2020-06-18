import { Random } from "mockjs";
export function handleRandomImage(width = 50, height = 50) {
  return `https://picsum.photos/${width}/${height}?random=${Random.guid()}`;
}
