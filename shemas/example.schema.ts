/** Schemas.
 * Require:
 * Name: [Name entity] + Schema. Example: ExampleSchema.
 * Object type: Using type is provide from mongooes.
 */
import * as mongoose from 'mongoose';
export const ExampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
