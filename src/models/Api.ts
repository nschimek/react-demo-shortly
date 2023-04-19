export type ApiJson = { [key: string]: unknown };

/* this isn't really needed for this project, but for larger projects, a simple interface like this helps promote code re-use
  the adapter pattern in particular allows us to rename/map incoming JSON fields, which can be incredibly useful
  furthermore, if the API JSON schema ever changes, we only need to make the update in a single place: the adapt() method. */
export interface ApiModel<T> {
  adapt(json: ApiJson): T | undefined;
}

export {};
