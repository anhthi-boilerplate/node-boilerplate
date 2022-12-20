import { SchemaOptions } from "mongoose";

export const getSchemeOptions = (moreOptions = {}): SchemaOptions => ({
  timestamps: true,
  toJSON: { getters: true, virtuals: false },
  toObject: { getters: true, virtuals: false },
  ...moreOptions,
});
