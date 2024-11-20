import { iconsLib } from "../lib/constants";

type IconName = keyof typeof iconsLib;

interface IIcons {
  name: IconName;
}

export default function Icons({ name }: IIcons) {
  return iconsLib[name] ? iconsLib[name] : null;
}
