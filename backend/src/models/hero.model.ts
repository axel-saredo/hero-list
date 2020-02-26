import mongoose, { Document, Schema } from 'mongoose';

export interface IHero extends Document {
  name: string;
  superpowers: string[];
  weaknesses: string[];
  img: string;
}

export const HeroSchema = new Schema({
  name: { type: String, required: true },
  superpowers: { type: Array, required: true },
  weaknesses: { type: Array, required: true },
  img: { type: String, required: true }
});

const Hero = mongoose.model<IHero>('Hero', HeroSchema);
export default Hero;
