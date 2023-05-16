const router = require("express").Router();
const { User, validate } = require("../models/user");
const { Goal } = require("../models/goal");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});


router.get("/all", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get("/allVolunteer", async (req, res) => {
  try {
    const users = await User.find({ isVolunteer: true }); // Find users where isVolunteer is true
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post("/toggle-admin", async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    if (user.isAdmin) {
      user.isAdmin = false;
    } else {
      user.isAdmin = true;
    }

    await user.save();

    if (user.isAdmin) {
      res.status(200).send({ message: "Admin added successfully" });
    } else {
      res.status(200).send({ message: "Admin removed successfully" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/toggle-volunteer", async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    if (user.isVolunteer) {
      user.isVolunteer = false;
    } else {
      user.isVolunteer = true;
    }

    await user.save();

    if (user.isVolunteer) {
      res.status(200).send({ message: "Admin added successfully" });
    } else {
      res.status(200).send({ message: "Admin removed successfully" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});


// Set up the /setgoals route
router.post("/setgoals", async (req, res) => {
  try {
    const { email, currentWeight, goalWeight, muscleGain, exerciseDays } = req.body;
    const user = await Goal.findOne({ email });

    if (!user) {
      // If goal doesn't exist for the user, create a new one
      const newGoal = new Goal({
        email,
        currentWeight,
        goalWeight,
        muscleGain,
        exerciseDays,
      });
      await newGoal.save();
    } else {
      // If goal already exists, update the existing goal
      user.currentWeight = currentWeight;
      user.goalWeight = goalWeight;
      user.muscleGain = muscleGain;
      user.exerciseDays = exerciseDays;
      await user.save();
    }

    return res.status(200).send({ message: "Goals set successfully" });
  } catch (error) {
    console.error("Error setting goals:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
});


router.get("/getgoals", async (req, res) => {
  try {
    //const { em } = req.query;
    const em = req.query.email; // Retrieve the value of the 'email' query parameter
    //const em = "salahqe@ac.sce.ac.il" ;
    //console.log(em);
    const user = await Goal.findOne({ email:em });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ message: "Goals retrieved successfully", goals: user });
  } catch (error) {
    console.error("Error retrieving goals:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

router.delete("/deleteuser", async (req, res) => {
  try {
    const em = req.query.email;
    const user = await User.deleteOne({ email:em });

    // Check if the user was found and deleted
    if (user.deletedCount === 1) {
      // Send a success response
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      // User not found or not deleted
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    // Handle any errors
    console.log("deleteUser error:", error);
    res.status(500).json({ error: "An error occurred while deleting the user" });
  }
});


/*
router.get("/allgoals", async (req, res) => {
  try {
    const users = await Goal.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
*/
module.exports = router;

