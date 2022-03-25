import {course} from "../../data/course"

export default function handler(req, res) {
    res.status(200).json({ course: `http://94.237.3.78:4000/api/get_course`})
  }