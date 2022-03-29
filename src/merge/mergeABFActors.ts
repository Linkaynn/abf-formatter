import { merge } from "lodash";
import { Actor } from "../types/actor/Actor";

export const mergeABFActors = (source: Actor, parsed: Actor) => {
  return merge(source, parsed);
};
