(function() { this.JST || (this.JST = {}); this.JST["heats/highscores"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<button class="start-new-game">Race Again?</button>\n\nDEM SCORES DOH\n<header class="highscore-header">\n<span class="race-all-time-scores">Fastest Typists</span>\n<span class="race-personal-scores">My Scores</span>\n</header>\n\n<table class="show-scores">\n\t<tr>\n\t\t<th>User</th><th>Speed</th>\n\t</tr>\n\t');  list.forEach(function(score) { ; __p.push('\n\t\t<tr>\n\t\t<td>',(''+ score.username ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'</td><td>',  score.wpm ,' wpm</td>\n\t\t</th>\n\t');  }) ; __p.push('\n</table>\n');}return __p.join('');};
}).call(this);