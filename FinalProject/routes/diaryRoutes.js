import express from "express";
import {
 createEntry,
 getAllEntries,
 getEntryById,
 updateEntry,
 deleteEntry,
} from "../controllers/diaryController.js";

import { fetchWeather } from "../controllers/weatherController.js";

const router = express.Router();
/**
* @route  GET /api/diary
* @desc   Fetch all diary entries
* @access Public (Authentication will be added in Part 2)
*/
router.get("/", getAllEntries);
/**
* @route  GET /api/diary/:id
* @desc   Fetch a specific diary entry by ID
* @access Public (Authentication will be added in Part 2)
*/
router.get("/:id", getEntryById);

/**
 * @route   POST /api/diary
 * @desc    Create a new diary entry
 * @access  Public (Authentication will be added in Part 2)
 */
router.post("/", createEntry)

/**
 * @route   PUT /api/diary/:id
 * @desc    Update an exissting diary entry
 * @access  Public (Authentication will be added in Part 2)
 */
router.put("/:id", updateEntry)

/**
 * @route   DELETE /api/diary/:id
 * @desc    Delete a diary entry
 * @access  Public (Authentication will be added in Part 2)
 */
router.delete("/:id", deleteEntry);

// Test route for checking weather API
router.get("/weather/test", async (req, res) => {
    const { location } = req.query; // Pass location as a query param
    if (!location) {
      return res.status(400).json({ message: "Location is required!" });
    }
  
    try {
      // Call the fetchWeather function
      const weatherData = await fetchWeather(location);
      res.status(200).json(weatherData);
    } catch (error) {
      console.error("Error fetching weather:", error.message);
      res.status(500).json({ message: "Error fetching weather data" });
    }
  });

export default router;
