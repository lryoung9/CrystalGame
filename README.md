# :gem: **Crystal Collector Game** :gem:

## About
There will be four crystals displayed as buttons on the page.

The player will be shown a random numerical goal at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

Your game will hide this amount. The only way a player can determine the crystals' values is by clicking a crystal and see the resulting difference in the score.

The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

## Design Notes
* The random number shown as the goal to start the game will be between 19 - 120.
* Each crystal should has a random hidden value between 1 - 12

## Built With
* [Bootstrap](https://getbootstrap.com/docs/3.3/) - The web framework used
* [jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js) - JavaScript library
* [Google Fonts - Lakki Reddy](https://fonts.googleapis.com/css?family=Lakki+Reddy) - CSS font styling

## Author

**Lydia Young** - [lryoung9](https://github.com/lryoung9)