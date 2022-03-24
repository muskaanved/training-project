import { courses } from "../config";

export default function handler(req, res) {
    res.status(200).json({ courses })
  }