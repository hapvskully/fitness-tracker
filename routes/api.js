const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then((dbworkout) => {
        res.json(dbworkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(params.id);
    console.log(body);
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body} },

        { new: true, runValidators: true }
    )
    .then((dbworkout) => {res.json(dbworkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

// look at the total amount of exercises in a workout
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(dbWorkouts => {
        res.send(dbWorkouts);
      })
      .catch(err => {
        res.send(err);
      });
  });
  
// router.get("/api/workouts/range", (req, res) => {
//     Workout.create({})
//     .then((dbworkout) => {
//         res.json(dbworkout);
//     })
//     .catch((err) => {
//         res.json(err);
//     });
// });

module.exports = router;


