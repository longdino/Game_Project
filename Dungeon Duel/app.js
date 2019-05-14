var express = require('express')
var app = express();
var serv = require('http').Server(app);
var io = require('socket.io')(serv, {});
var fs = require("fs");

app.use(express.static('public'))
app.use(express.static(__dirname + '/assets'))
app.use(express.static(__dirname + '/Images'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/title.html')
});
app.get('/title.css', function (req, res) {
    res.sendFile(__dirname + '/title.css')
});

app.get('/howtoplay', function (req, res) {
    res.sendFile(__dirname + '/how_to_play.html')
});
app.get('/how_to_play.css', function (req, res) {
    res.sendFile(__dirname + '/how_to_play.css')
});
app.get('/howtoplay2', function (req, res) {
	res.sendFile(__dirname + '/how_to_play_pg2.html')
});
app.get('/how_to_play_pg2.css', function (req, res) {
    res.sendFile(__dirname + '/how_to_play_pg2.css')
});

app.get('/credits', function (req, res) {
	res.sendFile(__dirname + '/credits.html')
});
app.get('/credits.css', function (req, res) {
	res.sendFile(__dirname + '/credits.css')
});

app.get('/difficulty', function (req, res) {
    res.sendFile(__dirname + '/difficulty.html')
});
app.get('/difficulty.css', function (req, res) {
    res.sendFile(__dirname + '/difficulty.css')
});

app.get('/gameover', function (req, res) {
    res.sendFile(__dirname + '/gameover.html')
});
app.get('/gameover.css', function (req, res) {
    res.sendFile(__dirname + '/gameover.css')
});

app.get('/too_much_people', function (req, res) {
    res.sendFile(__dirname + '/too_much_people.html')
});
app.get('/too_much_people.css', function (req, res) {
    res.sendFile(__dirname + '/too_much_people.css')
});

app.get('/styles.css', function (req, res) {
    res.sendFile(__dirname + '/styles.css')
});
app.get('/game', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/Images/Maps/OpenSpace.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/OpenSpace.png')
});
app.get('/Images/Maps/Boss.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/Boss.png')
});

app.get('/Images/Characters/Player1/Left/Regular.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player1/Left/Regular.png')
});
app.get('/Images/Characters/Player1/Left/Damaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player1/Left/Damaged.png')
});
app.get('/Images/Characters/Player1/Left/StraightAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player1/Left/StraightAttack.png')
});
app.get('/Images/Characters/Player1/Left/UpAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player1/Left/UpAttack.png')
});
app.get('/Images/Characters/Player1/Left/DownAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player1/Left/DownAttack.png')
});
app.get('/Images/Characters/Player1/Right/Regular.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player1/Right/Regular.png')
});
app.get('/Images/Characters/Player1/Right/Damaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player1/Right/Damaged.png')
});
app.get('/Images/Characters/Player1/Right/StraightAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player1/Right/StraightAttack.png')
});
app.get('/Images/Characters/Player1/Right/UpAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player1/Right/UpAttack.png')
});
app.get('/Images/Characters/Player1/Right/DownAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player1/Right/DownAttack.png')
});

app.get('/Images/Characters/Player2/Left/Regular.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player2/Left/Regular.png')
});
app.get('/Images/Characters/Player2/Left/Damaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player2/Left/Damaged.png')
});
app.get('/Images/Characters/Player2/Left/StraightAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player2/Left/StraightAttack.png')
});
app.get('/Images/Characters/Player2/Left/UpAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player2/Left/UpAttack.png')
});
app.get('/Images/Characters/Player2/Left/DownAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player2/Left/DownAttack.png')
});
app.get('/Images/Characters/Player2/Right/Regular.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player2/Right/Regular.png')
});
app.get('/Images/Characters/Player2/Right/Damaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player2/Right/Damaged.png')
});
app.get('/Images/Characters/Player2/Right/StraightAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player2/Right/StraightAttack.png')
});
app.get('/Images/Characters/Player2/Right/UpAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player2/Right/UpAttack.png')
});
app.get('/Images/Characters/Player2/Right/DownAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player2/Right/DownAttack.png')
});

app.get('/Images/Characters/Player3/Left/Regular.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player3/Left/Regular.png')
});
app.get('/Images/Characters/Player3/Left/Damaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player3/Left/Damaged.png')
});
app.get('/Images/Characters/Player3/Left/StraightAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player3/Left/StraightAttack.png')
});
app.get('/Images/Characters/Player3/Left/UpAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player3/Left/UpAttack.png')
});
app.get('/Images/Characters/Player3/Left/DownAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player3/Left/DownAttack.png')
});
app.get('/Images/Characters/Player3/Right/Regular.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player3/Right/Regular.png')
});
app.get('/Images/Characters/Player3/Right/Damaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player3/Right/Damaged.png')
});
app.get('/Images/Characters/Player3/Right/StraightAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player3/Right/StraightAttack.png')
});
app.get('/Images/Characters/Player3/Right/UpAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player3/Right/UpAttack.png')
});
app.get('/Images/Characters/Player3/Right/DownAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player3/Right/DownAttack.png')
});

app.get('/Images/Characters/Player4/Left/Regular.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player4/Left/Regular.png')
});
app.get('/Images/Characters/Player4/Left/Damaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player4/Left/Damaged.png')
});
app.get('/Images/Characters/Player4/Left/StraightAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player4/Left/StraightAttack.png')
});
app.get('/Images/Characters/Player4/Left/UpAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player4/Left/UpAttack.png')
});
app.get('/Images/Characters/Player4/Left/DownAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player4/Left/DownAttack.png')
});
app.get('/Images/Characters/Player4/Right/Regular.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player4/Right/Regular.png')
});
app.get('/Images/Characters/Player4/Right/Damaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player4/Right/Damaged.png')
});
app.get('/Images/Characters/Player4/Right/StraightAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player4/Right/StraightAttack.png')
});
app.get('/Images/Characters/Player4/Right/UpAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player4/Right/UpAttack.png')
});
app.get('/Images/Characters/Player4/Right/DownAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Player4/Right/DownAttack.png')
});

app.get('/Images/Characters/Slime/Regular/Left.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Regular/Left.png')
});
app.get('/Images/Characters/Slime/Regular/LeftDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Regular/LeftDamaged.png')
});
app.get('/Images/Characters/Slime/Regular/Right.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Regular/Right.png')
});
app.get('/Images/Characters/Slime/Regular/RightDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Regular/RightDamaged.png')
});

app.get('/Images/Characters/Slime/Silver/Left.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Silver/Left.png')
});
app.get('/Images/Characters/Slime/Silver/LeftDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Silver/LeftDamaged.png')
});
app.get('/Images/Characters/Slime/Silver/Right.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Silver/Right.png')
});
app.get('/Images/Characters/Slime/Silver/RightDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Silver/RightDamaged.png')
});

app.get('/Images/Characters/Slime/Dark/Left.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Dark/Left.png')
});
app.get('/Images/Characters/Slime/Dark/LeftDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Dark/LeftDamaged.png')
});
app.get('/Images/Characters/Slime/Dark/Right.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Dark/Right.png')
});
app.get('/Images/Characters/Slime/Dark/RightDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Slime/Dark/RightDamaged.png')
});


app.get('/Images/Characters/Boss/SlimeKing/Left.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Boss/SlimeKing/Left.png')
});
app.get('/Images/Characters/Boss/SlimeKing/LeftDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Boss/SlimeKing/LeftDamaged.png')
});
app.get('/Images/Characters/Boss/SlimeKing/Right.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Boss/SlimeKing/Right.png')
});
app.get('/Images/Characters/Boss/SlimeKing/RightDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Boss/SlimeKing/RightDamaged.png')
});
app.get('/Images/Characters/Boss/SlimeKing/Shield.png', function (req, res) {
	res.sendFile(__dirname + '/Images/Characters/Boss/SlimeKing/Shield.png')
});

app.get('/Images/Characters/Skeleton/Regular/Left.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Skeleton/Regular/Left.png')
});
app.get('/Images/Characters/Skeleton/Regular/LeftDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Skeleton/Regular/LeftDamaged.png')
});
app.get('/Images/Characters/Skeleton/Regular/Right.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Skeleton/Regular/Right.png')
});
app.get('/Images/Characters/Skeleton/Regular/RightDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Skeleton/Regular/RightDamaged.png')
});

app.get('/Images/Characters/Skeleton/Dark/Left.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Skeleton/Dark/Left.png')
});
app.get('/Images/Characters/Skeleton/Dark/LeftDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Skeleton/Dark/LeftDamaged.png')
});
app.get('/Images/Characters/Skeleton/Dark/Right.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Skeleton/Dark/Right.png')
});
app.get('/Images/Characters/Skeleton/Dark/RightDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Skeleton/Dark/RightDamaged.png')
});

app.get('/Images/Characters/Boss/SkeletonKing/Left.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Boss/SkeletonKing/Left.png')
});
app.get('/Images/Characters/Boss/SkeletonKing/LeftDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Boss/SkeletonKing/LeftDamaged.png')
});
app.get('/Images/Characters/Boss/SkeletonKing/Right.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Boss/SkeletonKing/Right.png')
});
app.get('/Images/Characters/Boss/SkeletonKing/RightDamaged.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Boss/SkeletonKing/RightDamaged.png')
});
app.get('/Images/Characters/Boss/SkeletonKing/Shield.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Characters/Boss/SkeletonKing/Shield.png')
});

app.get('/Images/Characters/Bee/Left.png', function (req, res) {
	res.sendFile(__dirname + '/Images/Characters/Bee/Left.png')
});
app.get('/Images/Characters/Bee/Right.png', function (req, res) {
	res.sendFile(__dirname + '/Images/Characters/Bee/Right.png')
});

app.get('/Images/Characters/Boss/Beehive/Left.png', function (req, res) {
	res.sendFile(__dirname + '/Images/Characters/Boss/Beehive/Left.png')
});

app.get('/Images/Characters/Boss/AbandonedChild/Regular.png', function (req, res) {
	res.sendFile(__dirname + '/Images/Characters/Boss/AbandonedChild/Regular.png')
});
app.get('/Images/Characters/Boss/AbandonedChild/Damaged.png', function (req, res) {
	res.sendFile(__dirname + '/Images/Characters/Boss/AbandonedChild/Damaged.png')
});
app.get('/Images/Characters/Boss/AbandonedChild/Attack.png', function (req, res) {
	res.sendFile(__dirname + '/Images/Characters/Boss/AbandonedChild/Attack.png')
});
app.get('/Images/Characters/Boss/AbandonedChild/Shield.png', function (req, res) {
	res.sendFile(__dirname + '/Images/Characters/Boss/AbandonedChild/Shield.png')
});

app.get('/Images/Weapons/PowerSwordRight.png', function (req, res) {
	res.sendFile(__dirname + '/Images/Weapons/PowerSwordRight.png')
});
app.get('/Images/Weapons/WoodenSwordRight.png', function (req, res) {
	res.sendFile(__dirname + '/Images/Weapons/WoodenSwordRight.png')
});

app.get('/Images/Projectiles/Sphere.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Projectiles/Sphere.png')
});
app.get('/Images/Projectiles/DarkBullet.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Projectiles/DarkBullet.png')
});
app.get('/Images/Projectiles/SilverBullet.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Projectiles/SilverBullet.png')
});

app.get('/Images/Weapons/RusticSwordLeft.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Weapons/RusticSwordLeft.png')
});
app.get('/Images/Weapons/RusticSwordRight.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Weapons/RusticSwordRight.png')
});
app.get('/Images/Weapons/RusticSwordUp.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Weapons/RusticSwordUp.png')
});
app.get('/Images/Weapons/RusticSwordDown.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Weapons/RusticSwordDown.png')
});

app.get('/Images/Maps/htmlBorder/WallsAllClosedDoorBorder.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/htmlBorder/WallsAllClosedDoorBorder.png')
});
app.get('/Images/Maps/htmlBorder/WallsAllOpenDoorBorder.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/htmlBorder/WallsAllOpenDoorBorder.png')
});
app.get('/Images/Maps/htmlBorder/WallsBottomClosedDoorBorder.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/htmlBorder/WallsBottomClosedDoorBorder.png')
});
app.get('/Images/Maps/htmlBorder/WallsBottomRightClosedDoorBorder.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/htmlBorder/WallsBottomRightClosedDoorBorder.png')
});
app.get('/Images/Maps/htmlBorder/WallsLeftBottomClosedDoorBorder.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/htmlBorder/WallsLeftBottomClosedDoorBorder.png')
});
app.get('/Images/Maps/htmlBorder/WallsLeftClosedDoorBorder.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/htmlBorder/WallsLeftClosedDoorBorder.png')
});
app.get('/Images/Maps/htmlBorder/WallsLeftTopClosedDoorBorder.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/htmlBorder/WallsLeftTopClosedDoorBorder.png')
});
app.get('/Images/Maps/htmlBorder/WallsRightClosedDoorBorder.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/htmlBorder/WallsRightClosedDoorBorder.png')
});
app.get('/Images/Maps/htmlBorder/WallsTopClosedDoorBorder.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/htmlBorder/WallsTopClosedDoorBorder.png')
});
app.get('/Images/Maps/htmlBorder/WallsTopRightClosedDoorBorder.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/htmlBorder/WallsTopRightClosedDoorBorder.png')
});
app.get('/Images/Maps/htmlBorder/WallsTopRightClosedDoorBorder.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Maps/htmlBorder/WallsTopRightClosedDoorBorder.png')
});

app.get('/Images/Misc/Heart/Full.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Misc/Heart/Full.png')
});
app.get('/Images/Misc/Heart/Half.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Misc/Heart/Half.png')
});
app.get('/Images/Misc/Heart/Empty.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Misc/Heart/Empty.png')
});

app.get('/Images/Misc/Grid/Map.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Misc/Grid/Map.png')
});
app.get('/Images/Misc/Grid/ClearedSpace.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Misc/Grid/ClearedSpace.png')
});
app.get('/Images/Misc/Grid/PurpleSpace.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Misc/Grid/PurpleSpace.png')
});
app.get('/Images/Misc/Grid/RedSpace.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Misc/Grid/RedSpace.png')
});
app.get('/Images/Misc/Grid/GreenSpace.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Misc/Grid/GreenSpace.png')
});
app.get('/Images/Misc/Grid/BlueSpace.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Misc/Grid/BlueSpace.png')
});


app.get('/Images/Misc/ItemBar.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Misc/ItemBar.png')
});
app.get('/Images/Items/Health.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Items/Health.png')
});
app.get('/Images/Items/MaxHealth.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Items/MaxHealth.png')
});
app.get('/Images/Items/Attack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Items/Attack.png')
});
app.get('/Images/Items/QuickAttack.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Items/QuickAttack.png')
});
app.get('/Images/Items/Speed.png', function (req, res) {
    res.sendFile(__dirname + '/Images/Items/Speed.png')
});

app.get('/Audio/playerdeath.mp3', function (req, res) {
	res.sendFile(__dirname + '/Audio/playerdeath.mp3')
});
app.get('/Audio/punchsound.mp3', function (req, res) {
	res.sendFile(__dirname + '/Audio/punchsound.mp3')
});
app.get('/Audio/hitplayer.m4a', function (req, res) {
	res.sendFile(__dirname + '/Audio/hitplayer.m4a')
});
app.get('/Audio/hitslime.mp3', function (req, res) {
	res.sendFile(__dirname + '/Audio/hitslime.mp3')
});
app.get('/Audio/hitskull.m4a', function (req, res) {
	res.sendFile(__dirname + '/Audio/hitskull.m4a')
});
app.get('/Audio/item.m4a', function (req, res) {
	res.sendFile(__dirname + '/Audio/item.m4a')
});
app.get('/Audio/powerup.m4a', function (req, res) {
	res.sendFile(__dirname + '/Audio/powerup.m4a')
});

app.get('/Audio/DungeonDuel.mp3', function (req, res) {
	res.sendFile(__dirname + '/Audio/DungeonDuel.mp3')
});
app.get('/Audio/slimeking.mp3', function (req, res) {
	res.sendFile(__dirname + '/Audio/slimeking.mp3')
});
app.get('/Audio/skeletonking.mp3', function (req, res) {
	res.sendFile(__dirname + '/Audio/skeletonking.mp3')
});
app.get('/Audio/beehive.mp3', function (req, res) {
	res.sendFile(__dirname + '/Audio/beehive.mp3')
});
app.get('/Audio/childboss.mp3', function (req, res) {
	res.sendFile(__dirname + '/Audio/childboss.mp3')
});

/*
 * enemyType - 0: slime, 1: skeleton, 2: slimeKing, 3: skeletonKing, 4: bee, 5: hive, 6: slime-silver, 7: slime-dark, 8: skeleton-dark, 9: child
 */


var frameCount;
var startingSecondsLeft;
var secondsLeft;

var roomList;

var gameover;
var victory;

const roomWidth = 800;
const roomHeight = 600;

var f = false;

//back end only; does not including new player
function startGame() {
    PLAYER_LIST = [];
    SOCKET_LIST = [];
    roomList = [];
    frameCount = 0;
	startingSecondsLeft = 180;
	secondsLeft = startingSecondsLeft;
    gameover = false;
	victory = false;
    player_count = 0;

    // Randomly populate each room with enemies
    for (let i = 0; i < 16; i++) {
        let tempList = [];
        let numEnemies = Math.floor(Math.random() * 5) + 1; // Range(int): 1-4, inclusive
        let generateBoss = Math.random() * 3 > 2; // 1/3 chance for miniboss
		
        while (numEnemies > 0) {
            let enemyType = 0;
            if (numEnemies == 1 && generateBoss == true) { // Generate miniboss
                enemyType = 1;
            }
            tempList.push(enemyType);
            numEnemies--;
        }

        tempEnemyList = [];
        enemiesLeft = tempList.length;
		
        for (let i = 0; i < tempList.length; i++) {
            if (tempList[i] == 1) { // Miniboss
				let roll = Math.floor(Math.random()*3); // 1/3 chance of dark, 2/3 chance of regular skeleton
				if (roll <= 1) {
					let skeleton = new Enemy(119, 107, roomWidth / 2 - 50, roomHeight / 2 - 50, 0.5, 500, 1, 100, 1);
					skeleton.setHitbox();
					tempEnemyList.push(skeleton);
				} else {
					let skeletonDark = new Enemy(119, 107, roomWidth / 2 - 50, roomHeight / 2 - 50, 0.5, 240, 1, 100, 8);
					skeletonDark.setHitbox();
					tempEnemyList.push(skeletonDark);
				}
            } else {
                let xPos = Math.round(Math.random() * (roomWidth - 250)) + 100; // Range: 100-650
                let yPos = Math.round(Math.random() * (roomHeight - 250)) + 100; // Range: 100-450
				let roll = Math.floor(Math.random()*12); // 7/12 chance of regular, 3/12 chance of silver, 2/12 chance of dark
                
				if (roll <= 6) {
					let slime = new Enemy(72, 41, xPos, yPos, 1, 250, 3, 50, 0);
					slime.setHitbox();
					tempEnemyList.push(slime);
				} else if (roll <= 9) {
					let slimeSilver = new Enemy(72, 41, xPos, yPos, 2, 400, 3, 50, 6);
					slimeSilver.setHitbox();
					tempEnemyList.push(slimeSilver);
				} else {
					let slimeDark = new Enemy(72, 41, xPos, yPos, 2, 400, 3, 50, 7);
					slimeDark.setHitbox();
					tempEnemyList.push(slimeDark);
				}
            }
        }

        // Generate item
        let itemId = -1;
		
        if (generateBoss) { // miniboss rooms drop powerups
            itemId = Math.floor(Math.random() * 4) + 1; // [1-4]; 1: maxHealth (pup), 2: attack (pup), 3: quickAttack (pup), 4: speed (pup)
        } else { // non-miniboss rooms drop health item
            itemId = Math.floor(Math.random() * 2) - 1; // [-1-0]; 50% chance drops healthItem, 50% chance drops nothing
			//itemId = Math.floor(Math.random() * 5);
        }

        roomList.push(new Room(i, tempEnemyList, generateBoss, 0, tempEnemyList.length, itemId));
    }

    // Populate Boss Room 1 (Slime King)
    let tempEnemyList1 = [];

    // Generate Slime King
    let slimeKing = new Enemy(250, 160, roomWidth / 2 - 125, roomHeight / 2 - 80, 0, 200, 2, 400, 2);
    slimeKing.setHitbox();
    tempEnemyList1.push(slimeKing);

    // Inner Circle: Generate 4 Slimes
    let slimeLeft = new Enemy(72, 41, 270, roomHeight / 2 - 20, 1, 150, 1.5, 50, 0);
    slimeLeft.setHitbox();
    slimeLeft.wanderType = 1;
    slimeLeft.circleX = roomWidth / 2;
    slimeLeft.circleY = roomHeight / 2;
    slimeLeft.circleRadius = roomWidth / 2 - 270 + slimeLeft.width / 2;
    slimeLeft.angularSpeed = 0.02;
    slimeLeft.clockwise = true;
    slimeLeft.shootVertically = true;

    let slimeRight = new Enemy(72, 41, 650, roomHeight / 2 - 20, 1, 150, 1.5, 50, 0);
    slimeRight.setHitbox();
    slimeRight.wanderType = 1;
    slimeRight.circleX = roomWidth / 2;
    slimeRight.circleY = roomHeight / 2;
    slimeRight.circleRadius = roomWidth / 2 - 270 + slimeRight.width / 2;
    slimeRight.angularSpeed = 0.02;
    slimeRight.clockwise = true;
    slimeRight.shootVertically = true;

    let slimeUp = new Enemy(72, 41, roomWidth / 2 - 35, 70, 1, 150, 1.5, 50, 0);
    slimeUp.setHitbox();
    slimeUp.wanderType = 1;
    slimeUp.circleX = roomWidth / 2;
    slimeUp.circleY = roomHeight / 2;
    slimeUp.circleRadius = roomWidth / 2 - 270 + slimeUp.width / 2;
    slimeUp.angularSpeed = 0.02;
    slimeUp.clockwise = true;
    slimeUp.shootVertically = true;

    let slimeDown = new Enemy(72, 41, roomWidth / 2 - 35, 660, 1, 250, 1.5, 50, 0);
    slimeDown.setHitbox();
    slimeDown.wanderType = 1;
    slimeDown.circleX = roomWidth / 2;
    slimeDown.circleY = roomHeight / 2;
    slimeDown.circleRadius = roomWidth / 2 - 270 + slimeDown.width / 2;
    slimeDown.angularSpeed = 0.02;
    slimeDown.clockwise = true;
    slimeDown.shootVertically = true;

	// Outer Circle: Generate 4 Slimes
    let slime2Left = new Enemy(72, 41, 200, roomHeight / 2 - 20, 1, 250, 1.5, 50, 0);
    slime2Left.setHitbox();
    slime2Left.wanderType = 1;
    slime2Left.circleX = roomWidth / 2;
    slime2Left.circleY = roomHeight / 2;
    slime2Left.circleRadius = roomWidth / 2 - 200 + slime2Left.width / 2;
    slime2Left.angularSpeed = 0.02;
    slime2Left.clockwise = false;

    let slime2Right = new Enemy(72, 41, 600, roomHeight / 2 - 20, 1, 250, 1.5, 50, 0);
    slime2Right.setHitbox();
    slime2Right.wanderType = 1;
    slime2Right.circleX = roomWidth / 2;
    slime2Right.circleY = roomHeight / 2;
    slime2Right.circleRadius = roomWidth / 2 - 200 + slime2Right.width / 2;
    slime2Right.angularSpeed = 0.02;
    slime2Right.clockwise = false;

    let slime2Up = new Enemy(72, 41, roomWidth / 2 - 35, 0, 1, 250, 1.5, 50, 0);
    slime2Up.setHitbox();
    slime2Up.wanderType = 1;
    slime2Up.circleX = roomWidth / 2;
    slime2Up.circleY = roomHeight / 2;
    slime2Up.circleRadius = roomWidth / 2 - 200 + slime2Up.width / 2;
    slime2Up.angularSpeed = 0.02;
    slime2Up.clockwise = false;

    let slime2Down = new Enemy(72, 41, roomWidth / 2 - 35, 760, 1, 250, 1.5, 50, 0);
    slime2Down.setHitbox();
    slime2Down.wanderType = 1;
    slime2Down.circleX = roomWidth / 2;
    slime2Down.circleY = roomHeight / 2;
    slime2Down.circleRadius = roomWidth / 2 - 200 + slime2Down.width / 2;
    slime2Down.angularSpeed = 0.02;
    slime2Down.clockwise = false;

    tempEnemyList1.push(slimeLeft);
    tempEnemyList1.push(slimeRight);
    tempEnemyList1.push(slimeUp);
    tempEnemyList1.push(slimeDown);
    tempEnemyList1.push(slime2Left);
    tempEnemyList1.push(slime2Right);
    tempEnemyList1.push(slime2Up);
    tempEnemyList1.push(slime2Down);

    roomList.push(new Room(16, tempEnemyList1, true, 0, tempEnemyList1.length, Math.floor(Math.random() * 4) + 1));

    // Populate Boss Room 2 (Skeleton King)
    let tempEnemyList2 = [];

    // Generate Skeleton King
    let skeletonKing = new Enemy(176, 177, roomWidth / 2 - 88, roomHeight / 2 - 88, 0, 320, 2, 400, 3);
    skeletonKing.setHitbox();
    tempEnemyList2.push(skeletonKing);

    // Generate 4 Skeletons
    // Left Skeleton
    let skeletonLeft = new Enemy(119, 107, 250, roomHeight / 2 - 50, 0.5, 300, 1, 100, 1);
    skeletonLeft.setHitbox();
    skeletonLeft.wanderType = 1;
    skeletonLeft.circleX = roomWidth / 2;
    skeletonLeft.circleY = roomHeight / 2;
    skeletonLeft.circleRadius = roomWidth / 2 - 250 + skeletonLeft.width / 2;
    skeletonLeft.angularSpeed = 0.01;

    // Right Skeleton
    let skeletonRight = new Enemy(119, 107, 550, roomHeight / 2 - 50, 0.5, 300, 1, 100, 1);
    skeletonRight.setHitbox();
    skeletonRight.wanderType = 1;
    skeletonRight.circleX = roomWidth / 2;
    skeletonRight.circleY = roomHeight / 2;
    skeletonRight.circleRadius = roomWidth / 2 - 250 + skeletonRight.width / 2;
    skeletonRight.angularSpeed = 0.01;

    // Top Skeleton
    let skeletonUp = new Enemy(119, 107, roomWidth / 2 - 60, 50, 0.5, 300, 1, 100, 1);
    skeletonUp.setHitbox();
    skeletonUp.wanderType = 1;
    skeletonUp.circleX = roomWidth / 2;
    skeletonUp.circleY = roomHeight / 2;
    skeletonUp.circleRadius = roomWidth / 2 - 250 + skeletonUp.width / 2;
    skeletonUp.angularSpeed = 0.01;

    // Bottom Skeleton
    let skeletonDown = new Enemy(119, 107, roomWidth / 2 - 60, 550, 0.5, 300, 1, 100, 1);
    skeletonDown.setHitbox();
    skeletonDown.wanderType = 1;
    skeletonDown.circleX = roomWidth / 2;
    skeletonDown.circleY = roomHeight / 2;
    skeletonDown.circleRadius = roomWidth / 2 - 250 + skeletonDown.width / 2;
    skeletonDown.angularSpeed = 0.01;

    tempEnemyList2.push(skeletonLeft);
    tempEnemyList2.push(skeletonRight);
    tempEnemyList2.push(skeletonUp);
    tempEnemyList2.push(skeletonDown);

    roomList.push(new Room(17, tempEnemyList2, true, 0, tempEnemyList2.length, Math.floor(Math.random() * 4) + 1));
	
	// Populate Boss Room 3 (Hive)
	let tempEnemyList3 = [];
	
	let hive = new Enemy(179, 281, roomWidth - 179 - 20, roomHeight / 2 - 140, 0, 720, 1, 600, 5);
    hive.setHitbox();
    tempEnemyList3.push(hive);
	
	roomList.push(new Room(18, tempEnemyList3, true, 0, tempEnemyList3.length, Math.floor(Math.random() * 4) + 1));
	
	// Populate Boss Room 4 (Child)
	let tempEnemyList4 = [];
	
	let child = new Enemy(100, 100, roomWidth - 100 - 100, roomHeight/2 - 50, 2, 400, 5, 800, 9);
	child.setHitbox();
	tempEnemyList4.push(child);
	
	let childSlime = new Enemy(72, 41, roomWidth/2, roomHeight/2-50, 1, 250, 3, 50, 0);
	childSlime.setHitbox();
	tempEnemyList4.push(childSlime);
	
	let childSlimeSilver = new Enemy(72, 41, roomWidth/2, roomHeight/2, 2, 400, 3, 50, 6);
	childSlimeSilver.setHitbox();
	tempEnemyList4.push(childSlimeSilver);
	
	let childSlimeDark = new Enemy(72, 41, roomWidth/2, roomHeight/2+50, 2, 400, 3, 50, 7);
	childSlimeDark.setHitbox();
	tempEnemyList4.push(childSlimeDark);
	
	let childSkeleton = new Enemy(119, 107, roomWidth/2 + 200, roomHeight/2 - 50, 0.5, 500, 1, 100, 1);
	childSkeleton.setHitbox();
	tempEnemyList4.push(childSkeleton);
	
	let childSkeletonDark = new Enemy(119, 107, roomWidth/2 + 200, roomHeight/2 + 50, 0.5, 240, 1, 100, 8);
	childSkeletonDark.setHitbox();
	tempEnemyList4.push(childSkeletonDark);
	
	roomList.push(new Room(19, tempEnemyList4, true, 0, tempEnemyList4.length, Math.floor(Math.random() * 4) + 1));
	
	if (f == false)
		f = setInterval(everyFrame, 20);
}


function Room(index, enemyList, bossRoom, type, enemiesLeft, itemId) {
    this.index = index;
    this.enemyList = enemyList;
    this.cleared = false; // Cleared if no enemies left and visited by a player
    this.bossRoom = bossRoom;
    this.type = type; // Determines layout of room (e.g., open space, parallel walls, etc.)
    this.enemiesLeft = enemiesLeft;
    this.itemId = itemId; // -1: no item in room currently
}

function Player(width, height, x, y, speed, health, damage, id, start_room, type) {

    this.id = id;
	this.name = "Player " + id;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.speed = speed;
    this.health = health;
    this.healthCapacity = health;

    this.itemList = [-1, -1];

    this.damage = damage;
    this.canAttack = true;
    this.attackPeriod = 20;
    this.attackCooldownStartFrame = 0;
    this.attackCooldownPeriod = 70;
    this.attackDirection = -1; // 0: left, 1: right, 2: up, 3: down
    this.hurtStartFrame = -30;
    this.hurtPeriod = 20;
    this.x = x;
    this.y = y;
    this.direction = 1; // 0: facing left, 1: facing right
    this.room = start_room;
    this.type = type; // 0-3, determines player sprite

    //kept track whether player's key is hold down
    this.Right = false;
    this.Left = false;
    this.Up = false;
    this.Down = false;
    this.atkRight = false;
    this.atkLeft = false;
    this.aktUp = false;
    this.aktDown = false;
    this.q = false;
    this.e = false;

    this.isVulnerable = true;
    this.invulnerablePeriod = 10;
    this.invulnerableStartFrame = 0;
	
	this.respawnTime = 13; // player takes this long to respawn
	this.respawnTimeLeft = -1; // if negative, then alive (alternatively, check health)
    /*
        now = new Date();
        let time = (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
        log_file[time] = ("Player " + this.id + " spawned in room " + this.room);
    */
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.speedX < 0)
            this.direction = 0;
        else if (this.speedX > 0)
            this.direction = 1;
    }

    this.checkBounds = function () {
        // If door is open, check if player enters door
        if (roomList[this.room].cleared) { // If room is cleared

            // If all rooms are cleared, go to boss room
            let allRoomsCleared = true;
            for (let i = 0; i < 16; i++) {
                if (!roomList[i].cleared) {
                    allRoomsCleared = false;
                    break;
                }
            }

            if (this.speedY < 0 && this.y < -1 * this.speedY && this.x > roomWidth / 2 - 40 && this.x + this.width < roomWidth / 2 + 40) { // Player is at top-middle and moving up
				if (allRoomsCleared || roomList[16].cleared) {
					if (!roomList[16].cleared)
						enterBossRoom1(this, 0);
                    else if (!roomList[17].cleared)
                    	enterBossRoom2(this, 0);
					else if (!roomList[18].cleared)
						enterBossRoom3(this, 0);
					else if (!roomList[19].cleared)
						enterBossRoom4(this, 0);
					return;
				} else if (this.room >= 4) { // Current room is not the top-most row
                    enterRoom(this, this.room - 4, 3);
                    return;
                }
            } if (this.speedY > 0 && this.y + this.height + this.speedY > roomHeight && this.x > roomWidth / 2 - 40 && this.x + this.width < roomWidth / 2 + 40) { // Player is at bottom-middle and moving down
                if (allRoomsCleared || roomList[16].cleared) {
					if (!roomList[16].cleared)
						enterBossRoom1(this, 1);
                    else if (!roomList[17].cleared)
                    	enterBossRoom2(this, 1);
					else if (!roomList[18].cleared)
						enterBossRoom3(this, 0);
					else if (!roomList[19].cleared)
						enterBossRoom4(this, 0);
					return;
				} else if (this.room <= 11) { // Current room is not the bottom-most row
                    enterRoom(this, this.room + 4, 2);
                    return;
                }
            } if (this.speedX < 0 && this.x < -1 * this.speedX && this.y > roomHeight / 2 - 40 && this.y + this.height < roomHeight / 2 + 60) { // Player is at left-middle and moving left
                if (allRoomsCleared || roomList[16].cleared) {
					if (!roomList[16].cleared)
                    	enterBossRoom1(this, 1);
                    else if (!roomList[17].cleared)
						enterBossRoom2(this, 1);
					else if (!roomList[18].cleared)
						enterBossRoom3(this, 0);
					else if (!roomList[19].cleared)
						enterBossRoom4(this, 0);
					return;
				} else if (this.room != 0 && this.room != 4 && this.room != 8 && this.room != 12) { // Current room is not the left-most column
					enterRoom(this, this.room - 1, 1);
                    return;
                }
            } if (this.speedX > 0 && this.x + this.width + this.speedX > roomWidth && this.y > roomHeight / 2 - 60 && this.y + this.height < roomHeight / 2 + 40) { // Player is at right-middle and moving right
                if (allRoomsCleared || roomList[16].cleared) {
					if (!roomList[16].cleared)
                    	enterBossRoom1(this, 0);
                    else if (!roomList[17].cleared)
						enterBossRoom2(this, 0);
					else if (!roomList[18].cleared)
						enterBossRoom3(this, 0);
					else if (!roomList[19].cleared)
						enterBossRoom4(this, 0);
					return;
				} else if (this.room != 3 && this.room != 7 && this.room != 11 && this.room != 15) { // Current room is not the right-most column
					enterRoom(this, this.room + 1, 0);
                    return;
                }
            }
        }

        // Boundary checking
        if (this.x < 0)
            this.x = 0;
        if (this.x + this.width > roomWidth)
            this.x = roomWidth - this.width;
        if (this.y < 0)
            this.y = 0;
        if (this.y + this.height > roomHeight)
            this.y = roomHeight - this.height;

        // Check if player touches item/powerup (room must be cleared and player must have an open item slot)
        if (roomList[this.room].cleared
            //&& (this.itemList[0] == -1 || this.itemList[1] == -1)
            && checkCollisionRectangle(this.x, this.y, this.width, this.height, roomWidth / 2 - 17, roomHeight / 2 - 30, 35, 35) != -1
            && roomList[this.room].itemId != -1
        ) {
            this.addItem(roomList[this.room].itemId);
        }
    }

    this.knockback = function (direction) {
        /* Push back player in a given direction
         * direction == 0 means left
         * direction == 1 means right
         * direction == 2 means up
         * direction == 3 means down
         */
        if (direction == 0)
            this.x = Math.max(1, this.x - 40);
        else if (direction == 1)
            this.x = Math.min(roomWidth - 1, this.x + 40);
        else if (direction == 2)
            this.y = Math.max(1, this.y - 40);
        else if (direction == 3)
            this.y = Math.min(roomHeight - 1, this.y + 40);
    }

    this.attackUp = function () {
        // Check if sword hits an enemy
        for (let i = 0; i < roomList[this.room].enemyList.length; i++) {
            let e = roomList[this.room].enemyList[i];

            if (e.alive && e.isVulnerable) {
                if (this.type == 0 || this.type == 1 || this.type == 2) {
                    if (this.direction == 0 && checkCollisionRectangle(this.x - 10, this.y + this.height / 2 - 83, 24, 62, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1
                        || this.direction == 1 && checkCollisionRectangle(this.x + this.width - 11, this.y + this.height / 2 - 83, 24, 62, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1
                    ) {
                        e.isVulnerable = false;
                        e.invulnerableStartFrame = frameCount;
                        e.takeDamage(this.damage, this.room, this.id);
                    }
                } else if (this.type == 3) {
                    if (this.direction == 0 && checkCollisionRectangle(this.x - 10, this.y + this.height / 2 - 73, 24, 62, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1
                        || this.direction == 1 && checkCollisionRectangle(this.x + this.width - 11, this.y + this.height / 2 - 73, 24, 62, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1
                    ) {
                        e.isVulnerable = false;
                        e.invulnerableStartFrame = frameCount;
                        e.takeDamage(this.damage, this.room, this.id);
                    }
                }
            }
        }

		/*
        for (let i in PLAYER_LIST) {
            if (PLAYER_LIST[i].id == this.id || PLAYER_LIST[i].room != this.room || !PLAYER_LIST[i].isVulnerable)
                continue;
            if (this.direction == 0 && checkCollisionRectangle(this.x - 11, this.y + this.height / 2 - 62, 24, 62, PLAYER_LIST[i].x, PLAYER_LIST[i].y, PLAYER_LIST[i].width, PLAYER_LIST[i].height) != -1
                || this.direction == 1 && checkCollisionRectangle(this.x + this.width - 11, this.y + this.height / 2 - 62, 24, 62, PLAYER_LIST[i].x, PLAYER_LIST[i].y, PLAYER_LIST[i].width, PLAYER_LIST[i].height) != -1) {
                PLAYER_LIST[i].isVulnerable = false;
                PLAYER_LIST[i].invulnerableStartFrame = frameCount;
                PLAYER_LIST[i].takeDamage(1);
            }
        }
		*/
    }

    this.attackDown = function () {
        // Check if sword hits an enemy
        for (let i = 0; i < roomList[this.room].enemyList.length; i++) {
            let e = roomList[this.room].enemyList[i];
            if (e.alive && e.isVulnerable) {
                if (this.type == 0 || this.type == 1 || this.type == 2) {
                    if (this.direction == 0 && checkCollisionRectangle(this.x - 9, this.y + this.height / 2, 24, 62, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1
                        || this.direction == 1 && checkCollisionRectangle(this.x + this.width - 10, this.y + this.height / 2, 24, 62, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1
                    ) {
                        e.isVulnerable = false;
                        e.invulnerableStartFrame = frameCount;
                        e.takeDamage(this.damage, this.room, this.id);
                    }
                } else if (this.type == 3) {
                    if (this.direction == 0 && checkCollisionRectangle(this.x - 9, this.y + this.height / 2 + 10, 24, 62, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1
                        || this.direction == 1 && checkCollisionRectangle(this.x + this.width - 10, this.y + this.height / 2 + 10, 24, 62, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1
                    ) {
                        e.isVulnerable = false;
                        e.invulnerableStartFrame = frameCount;
                        e.takeDamage(this.damage, this.room, this.id);
                    }
                }
            }
        }

		/*
        for (let i in PLAYER_LIST) {
            if (PLAYER_LIST[i].id == this.id || PLAYER_LIST[i].room != this.room || !PLAYER_LIST[i].isVulnerable)
                continue;
            if (this.direction == 0 && checkCollisionRectangle(this.x - 11, this.y + this.height / 2, 24, 62, PLAYER_LIST[i].x, PLAYER_LIST[i].y, PLAYER_LIST[i].width, PLAYER_LIST[i].height) != -1
                || this.direction == 1 && checkCollisionRectangle(this.x + this.width - 8, this.y + this.height / 2, 24, 62, PLAYER_LIST[i].x, PLAYER_LIST[i].y, PLAYER_LIST[i].width, PLAYER_LIST[i].height) != -1) {
                PLAYER_LIST[i].isVulnerable = false;
                PLAYER_LIST[i].invulnerableStartFrame = frameCount;
                PLAYER_LIST[i].takeDamage(1);
            }
        }
		*/
    }

    this.attackLeft = function () {
        // Check if sword hits an enemy
        this.direction = 0;
        for (let i = 0; i < roomList[this.room].enemyList.length; i++) {
            let e = roomList[this.room].enemyList[i];
            if (e.alive && e.isVulnerable) {
                if (((this.type == 0 || this.type == 1) && checkCollisionRectangle(this.x - 57, this.y + this.height / 2 - 20, 24, 62, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1)
                    || (this.type == 2 && checkCollisionRectangle(this.x - 57, this.y + this.height / 2 - 15, 24, 62, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1)
                    || (this.type == 3 && checkCollisionRectangle(this.x - 57, this.y + this.height / 2 - 10, 24, 62, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1)
                ) {
                    e.isVulnerable = false;
                    e.invulnerableStartFrame = frameCount;
                    e.takeDamage(this.damage, this.room, this.id);
                }
            }
        }

		/*
        for (let i in PLAYER_LIST) {
            if (PLAYER_LIST[i].id == this.id || PLAYER_LIST[i].room != this.room || !PLAYER_LIST[i].isVulnerable)
                continue;
            if (PLAYER_LIST[i].isVulnerable && checkCollisionRectangle(this.x - 58, this.y + this.height / 2 - 10, 24, 62, PLAYER_LIST[i].x, PLAYER_LIST[i].y, PLAYER_LIST[i].width, PLAYER_LIST[i].height) != -1) {
                PLAYER_LIST[i].isVulnerable = false;
                PLAYER_LIST[i].invulnerableStartFrame = frameCount;
                PLAYER_LIST[i].takeDamage(1);
            }
        }
		*/
    }

    this.attackRight = function () {
        // Check if sword hits an enemy
        this.direction = 1;
        for (let i = 0; i < roomList[this.room].enemyList.length; i++) {
            let e = roomList[this.room].enemyList[i];
            if (e.alive && e.isVulnerable) {
                if (((this.type == 0 || this.type == 1) && checkCollisionRectangle(this.x + this.width, this.y + this.height / 2 - 20, 62, 24, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1)
                    || (this.type == 2 && checkCollisionRectangle(this.x + this.width, this.y + this.height / 2 - 15, 62, 24, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1)
                    || (this.type == 3 && checkCollisionRectangle(this.x + this.width, this.y + this.height / 2 - 10, 62, 24, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight) != -1)
                ) {
                    e.isVulnerable = false;
                    e.invulnerableStartFrame = frameCount;
                    e.takeDamage(this.damage, this.room, this.id);
                }
            }
        }

		/*
        for (let i in PLAYER_LIST) {
            if (PLAYER_LIST[i].id == this.id || PLAYER_LIST[i].room != this.room || !PLAYER_LIST[i].isVulnerable)
                continue;
            if (PLAYER_LIST[i].isVulnerable && checkCollisionRectangle(this.x + this.width - 4, this.y + this.height / 2 - 10, 62, 24, PLAYER_LIST[i].x, PLAYER_LIST[i].y, PLAYER_LIST[i].width, PLAYER_LIST[i].height) != -1) {
                PLAYER_LIST[i].isVulnerable = false;
                PLAYER_LIST[i].invulnerableStartFrame = frameCount;
                PLAYER_LIST[i].takeDamage(1);
            }
        }
		*/
    }

    this.handleCollision = function (collisionResult, damage, gainInvulnerability) {
        switch (collisionResult) {
            case 0: // enemy is touching on the right
                this.knockback(0); // Push player to the left
                this.takeDamage(damage, gainInvulnerability);
                break;
            case 1: // enemy is touching on the left
                this.knockback(1); // Push player to the right
                this.takeDamage(damage, gainInvulnerability);
                break;
            case 2: // enemy is touching above
                this.knockback(3); // Push player down
                this.takeDamage(damage, gainInvulnerability);
                break;
            case 3: // enemy is touching below
                this.knockback(2); // Push player up
                this.takeDamage(damage, gainInvulnerability);
                break;
            default: // Not touching
                break;
        }

        // Give player invulnerability frames after touching an enemy
        if (collisionResult != -1) {
            this.isVulnerable = false;
            this.invulnerableStartFrame = frameCount;
			return 1;
        }
		return -1;
    }

    this.takeDamage = function (damage, gainInvulnerability) {
        if (this.health == 0)
            return;
        if (this.isVulnerable) {
            this.health -= damage;
			io.emit('playerTakeDamage', this.id);
		}
        if (this.health <= 0) {
            this.health = 0;
			this.die();
            //gameover = true;
            /*
			now = new Date();
            let time = (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
            log_file[time] = ("Player " + this.id + " died!");
			*/
        }
		if (gainInvulnerability)
			this.hurtStartFrame = frameCount;
    }

    this.addItem = function (itemId) {
        if (itemId == -1)
            return;

        // 0: health (item), 1: maxHealth (pup), 2: attack (pup), 3: quickAttack (pup), 4: speed (pup)

        if (itemId <= 0) { // type: item
            if (this.itemList[0] == -1)
                this.itemList[0] = itemId;
            else if (this.itemList[1] == -1)
                this.itemList[1] = itemId;
            else // No empty slots
                return;
			io.emit("itemPickup", this.id);
        } else { // type: powerup
            if (itemId == 1) { // maxHealth: increase health and healthCapacity by 1
                if (this.healthCapacity >= 8) {
                    if (this.health == 8)
                        return;
                    if (this.health + 1 >= this.healthCapacity)
                        this.health = this.healthCapacity;
                    else
                        this.health++;
                }
                else {
                    this.healthCapacity++;
                    this.health++;
                }
            } else if (itemId == 2) { // attack: increase attack by 10 (base is 20); changes sword appearance (wooden -> rustic -> power)
                this.damage += 10;
            } else if (itemId == 3) { // quickAttack: reduce attack cooldown by 20 (base is 70, min allowed is 30)
                if (this.attackCooldownPeriod <= 30) {
                    return;
                }
                this.attackCooldownPeriod -= 20;
            } else if (itemId == 4) { // speed: increase speed by 0.5 (base is 2)
                this.speed += 0.5;
            }
			io.emit("powerupPickup", this.id);
        }
        roomList[this.room].itemId = -1; // Remove item from room
    }

    this.useItem = function (itemSide) { // // itemSide: 0 = left, 1 = right
        let itemId = this.itemList[itemSide];
        if (itemId == 0) {
            this.health = this.healthCapacity;
            this.itemList[itemSide] = -1; // Remove item
        }
    }
	
	this.die = function () {
		io.emit("playerDeath", this.id);
		
		this.respawnTimeLeft = this.respawnTime;
		
		// Check if all players are dead
		let allDead = true;
		for (let i in PLAYER_LIST) {
			let p = PLAYER_LIST[i];
			if (p.respawnTimeLeft <= 0)
				allDead = false;
		}
		if (allDead)
			gameover = true;
	}
	
	this.respawn = function() {
		this.health = Math.floor(this.healthCapacity / 2);
		this.x = 20;
		this.y = roomHeight/2-this.height/2;
	}
}

function Enemy(width, height, x, y, speed, shootFreq, bulletSpeed, health, enemyType) {
    this.width = width;
    this.height = height;

    this.hitboxOffsetX = 0;
    this.hitboxOffsetY = 0;
    this.hitboxWidth = width;
    this.hitboxHeight = height;

    this.speedX = 0;
    this.speedY = 0;
    this.speed = speed;
    this.distance = 0;
    this.direction = 0;
	this.faceDirection = 0;
	this.angle = 0;
    this.shootFreq = shootFreq; // Shoot every x frames
    this.bulletSpeed = bulletSpeed;
    this.health = health;
    this.healthCapacity = health;
    this.wanderType = 0; // Default: wanderRandomly
    this.circleX = 0;
    this.circleY = 0;
    this.circleRadius = 0;
    this.angularSpeed = 0;
    this.clockwise = true;
    this.shootVertically = false; // Applies to enemyType = 0 only
    this.hurtStartFrame = -30;
    this.hurtPeriod = 20;
    this.isHurt = false;
	this.attacking = false; // Used for child only

    // 0: Slime, 1: Skeleton
    this.enemyType = enemyType;

    this.alive = true;
    this.x = x;
    this.y = y;
    this.bulletList = [];
    this.isVulnerable = true;
    this.invulnerableStartFrame = 0;
    this.invulnerablePeriod = 21;

    this.setHitbox = function () {
        if (this.enemyType == 0 || this.enemyType == 6 || this.enemyType == 7) { // slime, slime-silver, slime-dark
            this.hitboxOffsetX = 2;
            this.hitboxOffsetY = 2;
            this.hitboxWidth = this.width - 4;
            this.hitboxHeight = this.height - 4;
        } else if (this.enemyType == 1 || this.enemyType == 8) { // skeleton, skeleton-dark
            this.hitboxOffsetX = 5;
            this.hitboxOffsetY = 0;
            this.hitboxWidth = this.width - 10;
            this.hitboxHeight = this.height;
        } else if (this.enemyType == 2) { // slimeKing
            this.hitboxOffsetX = 0;
            this.hitboxOffsetY = 35;
            this.hitboxWidth = this.width;
            this.hitboxHeight = this.height - 35;
        } else if (this.enemyType == 3) { // skeletonKing
            this.hitboxOffsetX = 15;
            this.hitboxOffsetY = 28;
            this.hitboxWidth = this.width - 40;
            this.hitboxHeight = this.height - 40;
        } else if (this.enemyType == 4) { // bee
			this.hitboxOffsetX = 8;
			this.hitboxOffsetY = 0;
			this.hitboxWidth = this.width - 8;
			this.hitboxHeight = this.height;
		} else if (this.enemyType == 5) { // hive
			this.hitboxOffsetX = 10;
			this.hitboxOffsetY = 10;
			this.hitboxWidth = this.width-20;
			this.hitboxHeight = this.height-100;
		}
    }

    this.updateBullets = function () {
        // Draw bullets, update position, remove bullet if reached boundary
        for (let key in this.bulletList) {
            let bullet = this.bulletList[key];

            // Update bullet position
            bullet.x += bullet.spdX;
            bullet.y += bullet.spdY;

            // Remove bullet if reached boundary
            if (bullet.x <= 0 || bullet.x + bullet.width >= roomWidth || bullet.y <= 0 || bullet.y + bullet.height >= roomHeight)
                delete this.bulletList[bullet.id];
        }
    }

    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;

		if (this.speedX < 0)
			this.direction = 0;
		else if (this.speedX > 0)
			this.direction = 1;
		else if (this.speedY > 0)
			this.direction = 2;
		else if (this.speedY < 0)
			this.direction = 3;
		
        if (this.speedX > 0)
            this.faceDirection = 1;
        else if (this.speedX < 0)
            this.faceDirection = 0;
    }

    this.generateBullet = function () { // id, x, y, spdX, spdY, width, height
        // Generate new bullet and add to bulletList
        let left = bullet(Math.random(), this.x - 10, this.y + this.height / 2 - 5, -1 * this.bulletSpeed, 0, 20, 20, 0);
        this.bulletList[left.id] = left;
        let right = bullet(Math.random(), this.x + this.width, this.y + this.height / 2 - 5, this.bulletSpeed, 0, 20, 20, 0);
        this.bulletList[right.id] = right;

        if (this.enemyType == 0 && this.shootVertically) {
            let up = bullet(Math.random(), this.x + this.width / 2 - 5, this.y - 10, 0, -1 * this.bulletSpeed, 20, 20, 0);
            this.bulletList[up.id] = up;
            let down = bullet(Math.random(), this.x + this.width / 2 - 5, this.y + this.height, 0, this.bulletSpeed, 20, 20, 0);
            this.bulletList[down.id] = down;
        }

        if (this.enemyType == 1) {
            let up = bullet(Math.random(), this.x + this.width / 2 - 5, this.y - 10, 0, -1 * this.bulletSpeed, 20, 20, 0);
            this.bulletList[up.id] = up;
            let down = bullet(Math.random(), this.x + this.width / 2 - 5, this.y + this.height, 0, this.bulletSpeed, 20, 20, 0);
            this.bulletList[down.id] = down;
            let upLeft = bullet(Math.random(), this.x - 10, this.y - 10, -1 * this.bulletSpeed, -1 * this.bulletSpeed, 20, 20, 0);
            this.bulletList[upLeft.id] = upLeft;
            let upRight = bullet(Math.random(), this.x + this.width, this.y - 10, this.bulletSpeed, -1 * this.bulletSpeed, 20, 20, 0);
            this.bulletList[upRight.id] = upRight;
            let downLeft = bullet(Math.random(), this.x - 10, this.y + this.height, -1 * this.bulletSpeed, this.bulletSpeed, 20, 20, 0);
            this.bulletList[downLeft.id] = downLeft;
            let downRight = bullet(Math.random(), this.x + this.width, this.y + this.height, this.bulletSpeed, this.bulletSpeed, 20, 20, 0);
            this.bulletList[downRight.id] = downRight;
        }
    }

    this.generateBulletAngle = function (angle, speed, type, offsetX, offsetY) {
        let b;
		if (this.enemyType == 9) { // Child sword has bigger hitbox
			b = bullet(Math.random(), this.x + this.hitboxOffsetX + this.hitboxWidth / 2 + offsetX, this.y + this.hitboxOffsetY + this.hitboxHeight / 2 + offsetY, speed * Math.cos(angle), speed * Math.sin(angle), 40, 40, type);
		} else {
			b = bullet(Math.random(), this.x + this.hitboxOffsetX + this.hitboxWidth / 2 + offsetX, this.y + this.hitboxOffsetY + this.hitboxHeight / 2 + offsetY, speed * Math.cos(angle), speed * Math.sin(angle), 20, 20, type);
        }
		b.angle = angle;
		this.bulletList[b.id] = b;
    }
	
	this.generateBee = function (room, n) {
		if (n == 0 || n == 2) {
			let beeUp = new Enemy(35, 28, this.x+this.width/2, this.y+10, 2.5, 100, 1, 10, 4);
			beeUp.wanderType = 2;
			beeUp.setHitbox();
			
			let beeDown = new Enemy(35, 28, this.x+this.width/2, this.y+this.hitboxHeight-10, 2.5, 100, 1, 10, 4);
			beeDown.wanderType = 2;
			beeDown.setHitbox();
			
			let beeLeft = new Enemy(35, 28, this.x+10, this.y+this.hitboxHeight/2, 2.5, 100, 1, 10, 4);
			beeLeft.wanderType = 2;
			beeLeft.setHitbox();
			
			let beeRight = new Enemy(35, 28, this.x+this.width-10, this.y+this.hitboxHeight/2, 2.5, 100, 1, 10, 4);
			beeRight.wanderType = 2;
			beeRight.setHitbox();
			
			roomList[room].enemyList.push(beeUp);
			roomList[room].enemyList.push(beeDown);
			roomList[room].enemyList.push(beeLeft);
			roomList[room].enemyList.push(beeRight);
			
			roomList[room].enemiesLeft += 4;
		}
		
		if (n == 1) {
			let bee1 = new Enemy(35, 28, 10, roomHeight/2-14, 2.5, 100, 1, 10, 4);
			bee1.wanderType = 2;
			bee1.setHitbox();
			
			let bee2 = new Enemy(35, 28, roomWidth-40, roomHeight/2-14, 2.5, 100, 1, 10, 4);
			bee2.wanderType = 2;
			bee2.setHitbox();
			
			let bee3 = new Enemy(35, 28, roomWidth/2-17, 10, 2.5, 100, 1, 10, 4);
			bee3.wanderType = 2;
			bee3.setHitbox();
			
			let bee4 = new Enemy(35, 28, roomWidth/2-17, roomHeight-40, 2.5, 100, 1, 10, 4);
			bee4.wanderType = 2;
			bee4.setHitbox();
			
			roomList[room].enemyList.push(bee1);
			roomList[room].enemyList.push(bee2);
			roomList[room].enemyList.push(bee3);
			roomList[room].enemyList.push(bee4);
			
			roomList[room].enemiesLeft += 4;
		}
		
		if (n == 2) {
			let beeUpLeft = new Enemy(35, 28, this.x, this.y, 2.5, 100, 1, 10, 4);
			beeUpLeft.wanderType = 2;
			beeUpLeft.setHitbox();
			
			let beeUpRight = new Enemy(35, 28, this.x+this.width, this.y, 2.5, 100, 1, 10, 4);
			beeUpRight.wanderType = 2;
			beeUpRight.setHitbox();
			
			let beeDownLeft = new Enemy(35, 28, this.x, this.y+this.hitboxHeight, 2.5, 100, 1, 10, 4);
			beeDownLeft.wanderType = 2;
			beeDownLeft.setHitbox();
			
			let beeDownRight = new Enemy(35, 28, this.x+this.width, this.y+this.hitboxHeight, 2.5, 100, 1, 10, 4);
			beeDownRight.wanderType = 2;
			beeDownRight.setHitbox();
			
			roomList[room].enemyList.push(beeUpLeft);
			roomList[room].enemyList.push(beeUpRight);
			roomList[room].enemyList.push(beeDownLeft);
			roomList[room].enemyList.push(beeDownRight);
			
			roomList[room].enemiesLeft += 4;
		}
	}
	
	this.generateSlimes = function (room) {
		let slime1 = new Enemy(72, 41, this.x+this.hitboxOffsetX/2, this.y+this.hitboxOffsetY/2-10, 1, 250, 3, 50, 0);
        slime1.setHitbox();
		let slime2 = new Enemy(72, 41, this.x+this.hitboxOffsetX/2, this.y+this.hitboxOffsetY/2+10, 1, 250, 3, 50, 0);
        slime2.setHitbox();
		
		let slimeSilver = new Enemy(72, 41, this.x+this.hitboxOffsetX/2-10, this.y+this.hitboxOffsetY/2, 2, 400, 3, 50, 6);
		slimeSilver.setHitbox();
		
		let slimeDark = new Enemy(72, 41, this.x+this.hitboxOffsetX/2+10, this.y+this.hitboxOffsetY/2, 2, 400, 3, 50, 7);
		slimeDark.setHitbox();
		
		roomList[room].enemyList.push(slime1);
		roomList[room].enemyList.push(slime2);
		roomList[room].enemyList.push(slimeSilver);
		roomList[room].enemyList.push(slimeDark);
		
		roomList[room].enemiesLeft += 4;
	}
	
	this.generateSkeletons = function (room) {
		let skeleton1 = new Enemy(119, 107, this.x+this.hitboxOffsetX/2, this.y+this.hitboxOffsetY/2-20, 0.5, 500, 1, 100, 1);
		skeleton1.setHitbox();
		let skeleton2 = new Enemy(119, 107, this.x+this.hitboxOffsetX/2, this.y+this.hitboxOffsetY/2+20, 0.5, 500, 1, 100, 1);
		skeleton2.setHitbox();
		
		let skeletonDark = new Enemy(119, 107, this.x+this.hitboxOffsetX/2, this.y+this.hitboxOffsetY/2, 0.5, 240, 1, 100, 8);
		skeletonDark.setHitbox();
		tempEnemyList.push(skeletonDark);
		
		roomList[room].enemyList.push(skeleton1);
		roomList[room].enemyList.push(skeleton2);
		roomList[room].enemyList.push(skeletonDark);
		
		roomList[room].enemiesLeft += 3;
	}
	
	this.generateEverything = function(room) {
		let childSlime = new Enemy(72, 41, this.x + 50, this.y + 50, 1, 250, 3, 50, 0);
		childSlime.setHitbox();
		
		let childSlimeSilver = new Enemy(72, 41, this.x + 50, this.y, 2, 400, 3, 50, 6);
		childSlimeSilver.setHitbox();
		
		let childSlimeDark = new Enemy(72, 41, this.x, this.y + 50, 2, 400, 3, 50, 7);
		childSlimeDark.setHitbox();
		
		let childSkeleton = new Enemy(119, 107, this.x, this.y + 100, 0.5, 500, 1, 100, 1);
		childSkeleton.setHitbox();
		
		let childSkeletonDark = new Enemy(119, 107, this.x, this.y, 0.5, 240, 1, 100, 8);
		childSkeletonDark.setHitbox();
		
		roomList[room].enemyList.push(childSlime);
		roomList[room].enemyList.push(childSlimeSilver);
		roomList[room].enemyList.push(childSlimeDark);
		roomList[room].enemyList.push(childSkeleton);
		roomList[room].enemyList.push(childSkeletonDark);
		
		roomList[room].enemiesLeft += 5;
	}

    this.wanderRandomly = function () {
        if (this.distance <= 0) {
            let newDirection = Math.floor(Math.random() * 4);
            if (newDirection == 0) { // Start moving left
                this.speedX = -1 * this.speed;
                this.speedY = 0;
                this.distance = Math.random() * (this.x) / 1.5;
            } else if (newDirection == 1) { // Start moving right
                this.speedX = this.speed;
                this.speedY = 0;
                this.distance = Math.random() * (roomWidth - this.x - this.width) / 1.5;
            } else if (newDirection == 2) { // Start moving up
                this.speedY = -1 * this.speed;
                this.speedX = 0;
                this.distance = Math.random() * (this.y) / 1.5;
            } else { // Start moving down
                this.speedY = this.speed;
                this.speedX = 0;
                this.distance = Math.random() * (roomHeight - this.y - this.height) / 1.5;
            }
        }
        this.distance -= Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
    }

    // x: x coord of center of circle, y: y coord of center, radius: radius, clockwise: true if rotating clockwise
    this.wanderCircle = function (x, y, radius, angularSpeed, clockwise) {
        let centerX = this.x + this.width / 2;
        let centerY = this.y + this.height / 2;

        // Angle in radians measured from <1, 0> vector counterclockwise
        let dx = centerX - x;
        let dy = centerY - y;
        let angle;
        if (Math.abs(dx) < 0.1) { // dx = 0
            if (dy > 0)
                angle = Math.PI / 2;
            else
                angle = -1 * Math.PI / 2;
        }
        else
            angle = Math.atan2((centerY - y), (centerX - x));
        let newAngle;
        if (clockwise)
            newAngle = angle + angularSpeed;
        else
            newAngle = angle - angularSpeed;

        this.x = Math.round(radius * Math.cos(newAngle) + x - this.width / 2);
        this.y = Math.round(radius * Math.sin(newAngle) + y - this.height / 2);

        if (newAngle > 0) {
            if (clockwise)
                this.direction = 0;
            else
                this.direction = 1;
        } else {
            if (clockwise)
                this.direction = 1;
            else
                this.direction = 0;
        }
    }
	
	this.followPlayer = function() {
		let closestDistance = 10000;
        let angle = 0;
		
		let ex = this.x + this.width/2;
		let ey = this.y + this.height/2;
		
        for (let pid in PLAYER_LIST) {
			if (PLAYER_LIST[pid].respawnTimeLeft > 0) {
				continue;
			}
			
			let px = PLAYER_LIST[pid].x + PLAYER_LIST[pid].width/2;
			let py = PLAYER_LIST[pid].y + PLAYER_LIST[pid].height/2;
			
			let distance = Math.sqrt((px - ex) * (px - ex) + (py - ey) * (py - ey))
			if (distance < closestDistance) {
				closestDistance = distance;
				let dx = px - ex;
				let dy = py - ey;
				if (Math.abs(dx) < 0.1) { // dx = 0
					if (dy > 0)
						angle = Math.PI / 2;
					else
						angle = -1 * Math.PI / 2;
				}
				else
					angle = Math.atan2(dy, dx);
			}
        }
		
		this.angle = angle;
		this.speedX = this.speed * Math.cos(angle);
		this.speedY = this.speed * Math.sin(angle);
		this.x += this.speedX;
		this.y += this.speedY;
	}

    this.takeDamage = function (damage, room, playerId) {
		if (this.enemyType == 2) { // If slimeKing, spawn extra slimes when hurt
			let h = this.health;
			let h2 = this.health - damage;
			let hc = this.healthCapacity;
			if ((h > hc*3/4 && h2 <= hc*3/4) || (h > hc/2 && h2 <= hc/2) || (h > hc/4 && h2 <= hc/4) || h2 <= 0) {
				this.generateSlimes(room);
			}
		} else if (this.enemyType == 3) { // If skeletonKing, spawn extra skeletons when hurt
			let h = this.health;
			let h2 = this.health - damage;
			let hc = this.healthCapacity;
			if ((h > hc*3/4 && h2 <= hc*3/4) || (h > hc/2 && h2 <= hc/2) || (h > hc/4 && h2 <= hc/4) || h2 <= 0) {
				this.generateSkeletons(room);
			}
		} else if (this.enemyType == 5) { // If hive, spawn extra bees when hurt
			let h = this.health;
			let h2 = this.health - damage;
			let hc = this.healthCapacity;
			if ((h > hc*3/4 && h2 <= hc*3/4) || (h > hc/2 && h2 <= hc/2) || (h > hc/4 && h2 <= hc/4) || h2 <= 0) {
				this.generateBee(room, 2);
			}
		} else if (this.enemyType == 9) { //If child, spawn everything when hurt
			let h = this.health;
			let h2 = this.health - damage;
			let hc = this.healthCapacity;
			if ((h > hc*3/4 && h2 <= hc*3/4) || (h > hc/2 && h2 <= hc/2) || (h > hc/4 && h2 <= hc/4) || h2 <= 0) {
				this.speed = 0;
				this.speedX = 0;
				this.speedY = 0;
				this.generateEverything(room);
			}
		}
		
        this.health -= damage;
        this.hurtStartFrame = frameCount;
		
        if (this.health <= 0) {
            this.health = 0;
            this.alive = false;
            roomList[room].enemiesLeft--;
			
			if (this.enemyType == 9) {
				// Delete all bullets from list
				for (let j in this.bulletList) {
					delete this.bulletList[j];
				}
			}
			
            /*
			if (this.enemyType == 0) {
                now = new Date();
                let time = (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
                log_file[time] = ("Slime killed in room " + room);
            }
            else if (this.enemyType == 1) {
                now = new Date();
                let time = (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
                log_file[time] = ("Skeleton killed in room " + room);
            }
            */
            if (roomList[room].enemiesLeft == 0)
                completedRoom(room);
        }
		
		if (this.enemyType == 0 || this.enemyType == 2 || this.enemyType == 6 || this.enemyType == 7)
			io.emit("slimeTakeDamage", playerId);
		else if (this.enemyType == 1 || this.enemyType == 3 || this.enemyType == 8)
			io.emit("skeletonTakeDamage", playerId);
    }
}

function bullet(id, x, y, spdX, spdY, width, height, type) {
    return {
        x: x,
        y: y,
        spdX: spdX,
        spdY: spdY,
        id: id,
        width: width,
        height: height,
		type: type,
		angle: 0
    };
}

function updateGameArea() {
	if (gameover) {
		stopInterval();
		return;
	}
    frameCount++;
	if (secondsLeft >= 0)
		secondsLeft = Math.floor(startingSecondsLeft - (frameCount / 50));
	
    update_log = [];
    for (let i = 0; i < 16; i++) {
        update_log.push(false);
    }
    for (let i in PLAYER_LIST) {
        let player = PLAYER_LIST[i];
		
		if (player.respawnTimeLeft > 0) {
			if (frameCount % 50 == 0)
				player.respawnTimeLeft--;
			if (player.respawnTimeLeft <= 0) {
				player.respawn();
			}
		}
		
		if (secondsLeft < 0 && secondsLeft >= -5) {
			enterBossRoom1(player, Math.floor(Math.random() * 2));
			continue;
		}
		
		if (secondsLeft < -8 && player.room < 16) {
			if (!roomList[16].cleared)
				enterBossRoom1(player, Math.floor(Math.random() * 2));
			else if (!roomList[17].cleared)
				enterBossRoom2(player, Math.floor(Math.random() * 2));
			else if (!roomList[18].cleared)
				enterBossRoom3(player, 0);
			else
				enterBossRoom4(player, 0);
			continue;
		}
		
		if (player.respawnTimeLeft <= 0) {

			if (!player.canAttack && frameCount >= player.attackCooldownStartFrame + player.attackCooldownPeriod) {
				player.canAttack = true;
			}

			if (!player.isVulnerable && frameCount >= player.invulnerableStartFrame + player.invulnerablePeriod) {
				player.isVulnerable = true;
			}

			player.speedX = 0;
			player.speedY = 0;
			if (player.Left) {
				player.speedX = -1 * player.speed;
			}
			if (player.Right) {
				player.speedX = player.speed;
			}
			if (player.Up) {
				player.speedY = -1 * player.speed;
			}
			if (player.Down) {
				player.speedY = player.speed;
			}


			if (player.canAttack) {
				if (player.atkUp) {
					player.canAttack = false;
					player.attackCooldownStartFrame = frameCount;
					player.attackDirection = 2;
				}
				else if (player.atkDown) {
					player.canAttack = false;
					player.attackCooldownStartFrame = frameCount;
					player.attackDirection = 3;
				}
				else if (player.atkLeft) {
					player.canAttack = false;
					player.attackCooldownStartFrame = frameCount;
					player.attackDirection = 0;
				}
				else if (player.atkRight) {
					player.canAttack = false;
					player.attackCooldownStartFrame = frameCount;
					player.attackDirection = 1;
				}
			}

			if (!player.canAttack && frameCount <= player.attackCooldownStartFrame + player.attackPeriod) {
				if (player.attackDirection == 0)
					player.attackLeft();
				else if (player.attackDirection == 1)
					player.attackRight();
				else if (player.attackDirection == 2)
					player.attackUp();
				else
					player.attackDown();
			}

			// Use left item
			if (player.q) {
				player.useItem(0);
			}

			// Use right item
			if (player.e) {
				player.useItem(1);
			}

			player.newPos();
			player.checkBounds();
		}

        for (let i = 0; i < roomList[player.room].enemyList.length; i++) {
            let e = roomList[player.room].enemyList[i];

            // Update enemy vulnerability
            if (e.alive && e.enemyType == 3 && roomList[player.room].enemiesLeft > 1) { // Skeleton King is invulnerable until his minions are killed
                e.isVulnerable = false;
            } else if (e.alive && e.enemyType == 2 && roomList[player.room].enemiesLeft > 1) {
                e.isVulnerable = false;
            } else if (e.alive && e.enemyType == 9 && roomList[player.room].enemiesLeft > 1) {
                e.isVulnerable = false;
            } else if (e.alive && !e.isVulnerable && frameCount >= e.invulnerableStartFrame + e.invulnerablePeriod) {
                e.isVulnerable = true;
            }

			
			if (player.respawnTimeLeft <= 0) {
				// Check if player collides with enemy
				if (e.alive) {
					if (player.handleCollision(checkCollisionRectangle(player.x + 8, player.y, player.width - 10, player.height, e.x + e.hitboxOffsetX, e.y + e.hitboxOffsetY, e.hitboxWidth, e.hitboxHeight), 0.5, e.enemyType != 4) != -1 && e.enemyType == 4) {
						e.takeDamage(100, player.room, player.id); // If bee touches player, bee dies
					}
				}

				// Check if player collides with bullet
				for (let key in e.bulletList) {
					if (typeof e.bulletList[key] == 'undefined')
						break;
					//if (checkCollision(player, e.bulletList[key]) != -1) {
					if (checkCollisionRectangle(player.x + 8, player.y, player.width - 10, player.height, e.bulletList[key].x, e.bulletList[key].y, e.bulletList[key].width, e.bulletList[key].height) != -1) {
						player.takeDamage(0.5, false);
						delete e.bulletList[key];
					}
				}
			}

            // Run this once for every room that players are in
            if (!update_log[player.room]) {
                // Generate bullets for enemy
                if (e.enemyType == 0 && e.alive && frameCount % e.shootFreq == 0)
                    e.generateBullet();
                else if (e.enemyType == 1 && e.alive) {
                    if (e.wanderType == 0) {
                        if (frameCount % e.shootFreq == 0 || frameCount % e.shootFreq == 80 || frameCount % e.shootFreq == 160)
                            e.generateBullet();
                    } else if (e.wanderType == 1) {
                        if (frameCount % e.shootFreq == 0)
                            e.generateBullet();
                    }
                } else if (e.enemyType == 2 && e.alive && roomList[player.room].enemiesLeft == 1) {
                    let n = frameCount % e.shootFreq;
                    if (n == 0 || n == e.shootFreq / 2) {
                        let mouthX = e.x + e.width / 2; // TODO: bullets shoot from mouth? (different based on direction facing)
                        let mouthY = e.y + e.height / 2 + 10;
                        let closestDistance = 10000;
                        let angle = 0;

                        for (let pid in PLAYER_LIST) {
							if (PLAYER_LIST[pid].respawnTimeLeft > 0) {
								continue;
							}
							
							let px = PLAYER_LIST[pid].x + PLAYER_LIST[pid].width/2;
							let py = PLAYER_LIST[pid].y + PLAYER_LIST[pid].height/2;
							
                            let distance = Math.sqrt((px - mouthX) * (px - mouthX) + (py - mouthY) * (py - mouthY));
														
                            if (distance < closestDistance) {
                                closestDistance = distance;
                                let dx = px - mouthX;
                                let dy = py - mouthY;
                                
								if (Math.abs(dx) < 0.1) { // dx = 0
                                    if (dy > 0)
                                        angle = Math.PI / 2;
                                    else
                                        angle = -1 * Math.PI / 2;
                                }
                                else
                                    angle = Math.atan2(dy, dx);
                            }
                        }
						if (angle > Math.PI/2 || angle < -1*Math.PI/2)
							e.direction = 0;
						else
							e.direction = 1;

                        if (n == 0) {
                            e.generateBulletAngle(angle + Math.PI/2, 1.7, 0, 0, 0);
                            e.generateBulletAngle(angle - 0.2, 1.7, 0, 0, 0);
                            e.generateBulletAngle(angle, 2, 0, 0, 0);
                            e.generateBulletAngle(angle + 0.2, 1.7, 0, 0, 0);
                            e.generateBulletAngle(angle + Math.PI/2, 1.7, 0, 0, 0);

                            e.generateBulletAngle(Math.PI + angle + Math.PI/2, 1.7, 0, 0, 0);
                            e.generateBulletAngle(Math.PI + angle - 0.2, 1.7, 0, 0, 0);
                            e.generateBulletAngle(Math.PI + angle, 2, 0, 0, 0);
                            e.generateBulletAngle(Math.PI + angle + 0.2, 1.7, 0, 0, 0);
                            e.generateBulletAngle(Math.PI + angle + Math.PI/2, 1.7, 0, 0, 0);
                        } else if (n == e.shootFreq / 2) {
                            e.generateBulletAngle(Math.PI / 2 + angle + Math.PI/2, 1.2, 0, 0, 0);
                            e.generateBulletAngle(Math.PI / 2 + angle - 0.2, 1.2, 0, 0, 0);
                            e.generateBulletAngle(Math.PI / 2 + angle, 1.4, 0, 0, 0);
                            e.generateBulletAngle(Math.PI / 2 + angle + 0.2, 1.2, 0, 0, 0);
                            e.generateBulletAngle(Math.PI / 2 + angle + Math.PI/2, 1.2, 0, 0, 0);

                            e.generateBulletAngle(angle + Math.PI/2 - Math.PI / 2, 1.2, 0, 0, 0);
                            e.generateBulletAngle(angle - 0.2 - Math.PI / 2, 1.2, 0, 0, 0);
                            e.generateBulletAngle(angle - Math.PI / 2, 1.4, 0, 0, 0);
                            e.generateBulletAngle(angle + 0.2 - Math.PI / 2, 1.2, 0, 0, 0);
                            e.generateBulletAngle(angle + Math.PI/2 - Math.PI / 2, 1.2, 0, 0, 0);
                        }
                    }
                } else if (e.enemyType == 3 && e.alive && roomList[player.room].enemiesLeft == 1) {
                    let n = frameCount % e.shootFreq;

                    if (n == 0) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle(j * Math.PI / 2, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq / 16) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((8 * j + 1) * Math.PI / 16, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq / 8) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((4 * j + 1) * Math.PI / 8, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq * 3 / 16) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((8 * j + 3) * Math.PI / 16, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq / 4) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((2 * j + 1) * Math.PI / 4, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq * 5 / 16) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((8 * j + 5) * Math.PI / 16, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq * 3 / 8) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((4 * j + 3) * Math.PI / 8, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq * 7 / 16) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((8 * j + 7) * Math.PI / 16, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq / 2) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle(j * Math.PI / 2, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq * 9 / 16) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((2 * j + 1) * Math.PI / 4, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq * 5 / 8) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((4 * j + 1) * Math.PI / 8, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq * 11 / 16) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((4 * j + 3) * Math.PI / 8, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq * 5 / 4) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((8 * j + 1) * Math.PI / 16, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq * 13 / 16) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((8 * j + 5) * Math.PI / 16, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq * 7 / 8) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((8 * j + 3) * Math.PI / 16, 2, 0, 0, 0);
                        }
                    } else if (n == e.shootFreq * 15 / 16) {
                        for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((8 * j + 7) * Math.PI / 16, 2, 0, 0, 0);
                        }
                    }
                } else if (e.enemyType == 4 && e.alive) {
					
				} else if (e.enemyType == 5 && e.alive) {
					let n = frameCount % e.shootFreq;
					
					if (n == e.shootFreq/2 || n == e.shootFreq/4)
						e.generateBee(player.room, 0);
					
					if (n == 0)
						e.generateBee(player.room, 1);
				} else if (e.enemyType == 6 && e.alive) {
					let n = frameCount % e.shootFreq;
					if (n == 0) {
						e.generateBulletAngle(0, e.bulletSpeed, 1, 0, 0);
						e.generateBulletAngle(Math.PI, e.bulletSpeed, 1, 0, 0);
					} else if (n == e.shootFreq/2) {
						e.generateBulletAngle(Math.PI/2, e.bulletSpeed, 1, 0, 0);
						e.generateBulletAngle(-1*Math.PI/2, e.bulletSpeed, 1, 0, 0);
					}
				} else if (e.enemyType == 7 && e.alive) {
					let n = frameCount % e.shootFreq;
					if (n == 0) {
						e.generateBulletAngle(0, e.bulletSpeed, 2, 0, 0);
						e.generateBulletAngle(Math.PI/2, e.bulletSpeed, 2, 0, 0);
						e.generateBulletAngle(Math.PI, e.bulletSpeed, 2, 0, 0);
						e.generateBulletAngle(-1*Math.PI/2, e.bulletSpeed, 2, 0, 0);
					} else if (n == e.shootFreq/2) {
						e.generateBulletAngle(Math.PI/4, e.bulletSpeed, 2, 0, 0);
						e.generateBulletAngle(Math.PI*3/4, e.bulletSpeed, 2, 0, 0);
						e.generateBulletAngle(-1*Math.PI/4, e.bulletSpeed, 2, 0, 0);
						e.generateBulletAngle(-1*Math.PI*3/4, e.bulletSpeed, 2, 0, 0);
					}
				} else if (e.enemyType == 8 && e.alive) {
					let n = frameCount % e.shootFreq;
					if (n == 0) {
						for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle(j * Math.PI / 2, 2, 2, 0, 0);
                        }
					} else if (n == e.shootFreq/8) {
						for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((4 * j + 1) * Math.PI / 8, 2, 2, 0, 0);
                        }
					} else if (n == e.shootFreq/4) {
						for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((2 * j + 1) * Math.PI / 4, 2, 2, 0, 0);
                        }
					} else if (n == e.shootFreq*3/8) {
						for (let j = 0; j < 4; j++) {
                            e.generateBulletAngle((4 * j + 3) * Math.PI / 8, 2, 2, 0, 0);
                        }
					}
				} else if (e.enemyType == 9 && e.alive) {
					if (roomList[player.room].enemiesLeft != 1) {
						e.attacking = false;
						// Delete all bullets from list
						for (let j in e.bulletList) {
							delete e.bulletList[j];
						}
					} else {
						let n = frameCount % e.shootFreq;
						if (n == 0) {
							e.speed = 2;
							e.attacking = false;
							if (e.direction == 0) {
								e.speedX = -1*e.speed;
								e.speedY = 0;
							} else if (e.direction == 1) {
								e.speedX = e.speed;
								e.speedY = 0;
							} else if (e.direction == 2) {
								e.speedX = 0;
								e.speedY = -1*e.speed;
							} else {
								e.speedX = 0;
								e.speedY = e.speed;
							}
						} else if (n == e.shootFreq/2) {
							e.speed = 0;
							e.speedX = 0;
							e.speedY = 0;
							e.attacking = true;
							e.generateBulletAngle(-1 * Math.PI/2, 2, 3, -120, 0);
							e.generateBulletAngle(-1 * Math.PI/2, 2, 4, 70, 0);
							e.generateBulletAngle(-1 * Math.PI/2, 2, 5, -30, -100);
						} else if (n > e.shootFreq/2 && n < e.shootFreq*3/4) {
							for (let j in e.bulletList) {
								let angle = 0;
								let closestDistance = 10000;
								
								let b = e.bulletList[j];
								
								let bx = b.x + b.width/2;
								let by = b.y + b.height/2;
															
								for (let pid in PLAYER_LIST) {
									if (PLAYER_LIST[pid].respawnTimeLeft > 0) {
										continue;
									}
									
									let px = PLAYER_LIST[pid].x + PLAYER_LIST[pid].width/2;
									let py = PLAYER_LIST[pid].y + PLAYER_LIST[pid].height/2;
									
									let distance = Math.sqrt((px - bx) * (px - bx) + (py - by) * (py - by));
									if (distance < closestDistance) {
										closestDistance = distance;
										let dx = px - bx;
										let dy = py - by;
										if (Math.abs(dx) < 0.1) { // dx = 0
											if (dy > 0)
												angle = Math.PI / 2;
											else
												angle = -1 * Math.PI / 2;
										}
										else
											angle = Math.atan2(dy, dx);
									}
								}
								b.angle = angle;
								b.spdX = e.bulletSpeed * Math.cos(angle);
								b.spdY = e.bulletSpeed * Math.sin(angle);
							}
						} else {
							e.updateBullets();
						}
					}
				}

                // Move enemy and update bullet position
                if (e.alive) {
                    // Update isHurt status
                    e.isHurt = frameCount >= e.hurtStartFrame && frameCount <= e.hurtStartFrame + e.hurtPeriod;

                    if (e.wanderType == 0) {
						if (e.enemyType != 9 || roomList[player.room].enemiesLeft == 1) {
							e.wanderRandomly();
						}
						e.newPos();
                    } else if (e.wanderType == 1) {
                        e.wanderCircle(e.circleX, e.circleY, e.circleRadius, e.angularSpeed, e.clockwise);
					} else if (e.wanderType == 2) {
						if (e.enemyType != 9 || roomList[player.room].enemiesLeft == 1)
							e.followPlayer();
					}
                }
				
				if (e.enemyType != 9)
					e.updateBullets();
            }
        }

        update_log[player.room] = true;

        //player.checkBounds();
    }
	
	if (secondsLeft < 0 && secondsLeft >= -5) {
		secondsLeft = -10;
	}
}

/* Check whether 2 entities (rectangles) are touching
 * Return -1 if entities are not touching
 * Return 0 if obj2 is touching obj1 on the right
 * Return 1 if          ...          on the left
 * Return 2 if          ...          above
 * Return 3 if          ...          below
 */
function checkCollision(obj1, obj2) {
    if (obj1.x > obj2.x) {
        if (obj1.y > obj2.y) {
            if (obj1.x - obj2.x < obj2.width && obj1.y - obj2.y < obj2.height) {
                if (obj1.x - obj2.x > obj1.y - obj2.y) { return 1; }
                return 2;
            }
        } else {
            if (obj1.x - obj2.x < obj2.width && obj2.y - obj1.y < obj1.height) {
                if (obj1.x - obj2.x > obj2.y - obj1.y) { return 1; }
                return 3;
            }
        }
    } else {
        if (obj1.y > obj2.y) {
            if (obj2.x - obj1.x < obj1.width && obj1.y - obj2.y < obj2.height) {
                if (obj2.x - obj1.x > obj1.y - obj2.y) { return 0; }
                return 2;
            }
        } else {
            if (obj2.x - obj1.x < obj1.width && obj2.y - obj1.y < obj1.height) {
                if (obj2.x - obj1.x > obj2.y - obj1.y) { return 0; }
                return 3;
            }
        }
    }
    return -1;
}

// Check whether 2 rectangles are touching
function checkCollisionRectangle(x1, y1, width1, height1, x2, y2, width2, height2) {
    if (x1 > x2) {
        if (y1 > y2) {
            if (x1 - x2 < width2 && y1 - y2 < height2) {
                if (x1 - x2 > y1 - y2) { return 1; }
                return 2;
            }
        } else {
            if (x1 - x2 < width2 && y2 - y1 < height1) {
                if (x1 - x2 > y2 - y1) { return 1; }
                return 3;
            }
        }
    } else {
        if (y1 > y2) {
            if (x2 - x1 < width1 && y1 - y2 < height2) {
                if (x2 - x1 > y1 - y2) { return 0; }
                return 2;
            }
        } else {
            if (x2 - x1 < width1 && y2 - y1 < height1) {
                if (x2 - x1 > y2 - y1) { return 0; }
                return 3;
            }
        }
    }
    return -1;
}

function enterRoom(player, roomId, startSide) {
    player.room = roomId;
    if (startSide == 0) { // left
        player.x = 50;
        //player.y = roomHeight/2-50;
    } else if (startSide == 1) { // right
        player.x = roomWidth - player.width - 50;
        //player.y = roomHeight/2-50;
    } else if (startSide == 2) { // up
        //player.x = roomWidth/2-50;
        player.y = 50;
    } else { // down
        //player.x = roomWidth/2-50;
        player.y = roomHeight - player.height - 50;
    }
	/*
    now = new Date();
    let time = (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    log_file[time] = (player.id + " entered room " + roomId);
    */
    //generateEnemyList(roomList[roomId]);

    //updateRoomNumber(roomId);
}

// Slime King Boss Room
// roomid: 16
function enterBossRoom1(player, startSide) {
    player.room = 16;
    if (startSide == 0) { // left
        player.x = 50;
        player.y = roomHeight / 2 - 50;
    } else if (startSide == 1) { // right
        player.x = roomWidth - player.width - 50;
        player.y = roomHeight / 2 - 50;
    } else if (startSide == 2) { // up
        player.x = roomWidth / 2 - 50;
        player.y = 50;
    } else { // down
        player.x = roomWidth / 2 - 50;
        player.y = roomHeight - player.height - 50;
    }
	
	if (secondsLeft >= 0)
		secondsLeft = -10;
	
	// Restore all health to players
	for (let i in PLAYER_LIST) {
		PLAYER_LIST[i].health = PLAYER_LIST[i].healthCapacity;
	}
	
	io.emit("enterSlimeKing", 0);
	
	/*
	now = new Date();
    let time = (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    log_file[time] = (player.id + " entered Boss Room 1");
	*/
}

// Skeleton King Boss Room
// roomid: 17
function enterBossRoom2(player, startSide) {
    player.room = 17;
    if (startSide == 0) { // left
        player.x = 50;
        player.y = roomHeight / 2 - 50;
    } else if (startSide == 1) { // right
        player.x = roomWidth - player.width - 50;
        player.y = roomHeight / 2 - 50;
    } else if (startSide == 2) { // up
        player.x = roomWidth / 2 - 50;
        player.y = 50;
    } else { // down
        player.x = roomWidth / 2 - 50;
        player.y = roomHeight - player.height - 50;
    }
	
	if (secondsLeft >= 0)
		secondsLeft = -10;
	
	// Restore all health to players
	for (let i in PLAYER_LIST) {
		PLAYER_LIST[i].health = PLAYER_LIST[i].healthCapacity;
	}
	
	io.emit("enterSkeletonKing", 0);
	/*
	now = new Date();
    let time = (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    log_file[time] = (player.id + " entered Boss Room 2");
	*/
}

// Hive Boss Room
// roomid: 18
function enterBossRoom3 (player, startSide) {
	player.room = 18;
    if (startSide == 0) { // left
        player.x = 50;
        player.y = roomHeight / 2 - 50;
    } else if (startSide == 1) { // right
        player.x = roomWidth - player.width - 50;
        player.y = roomHeight / 2 - 50;
    } else if (startSide == 2) { // up
        player.x = roomWidth / 2 - 50;
        player.y = 50;
    } else { // down
        player.x = roomWidth / 2 - 50;
        player.y = roomHeight - player.height - 50;
    }
	
	// Restore all health to players
	for (let i in PLAYER_LIST) {
		PLAYER_LIST[i].health = PLAYER_LIST[i].healthCapacity;
	}
	
	if (secondsLeft >= 0)
		secondsLeft = -10;
	
	io.emit("enterHive", 0);
}

// Child Boss Room
// roomid: 19
function enterBossRoom4 (player, startSide) {
	player.room = 19;
    if (startSide == 0) { // left
        player.x = 50;
        player.y = roomHeight / 2 - 50;
    } else if (startSide == 1) { // right
        player.x = roomWidth - player.width - 50;
        player.y = roomHeight / 2 - 50;
    } else if (startSide == 2) { // up
        player.x = roomWidth / 2 - 50;
        player.y = 50;
    } else { // down
        player.x = roomWidth / 2 - 50;
        player.y = roomHeight - player.height - 50;
    }
	
	// Restore all health to players
	for (let i in PLAYER_LIST) {
		PLAYER_LIST[i].health = PLAYER_LIST[i].healthCapacity;
	}
	
	if (secondsLeft >= 0)
		secondsLeft = -10;
	
	io.emit("enterChild", 0);
}

function completedRoom(room) {
    roomList[room].cleared = true;
	if (room == 19)
		victory = true;
    //io.emit("log", "Room " + room + " cleared.");
}

//end of work bench for migration

//procedure: start game, creat 
serv.listen(3000, function () {
    console.log('Server Started. listening on *:3000');
});

var PLAYER_LIST = [];
var SOCKET_LIST = [];
//socket for chatting tool

var player_count = 0;
var totalPlayers = 0;
var now;
//var log_file = {};
var file_name;

io.sockets.on('connection', function (socket) {
    if (totalPlayers == 0) {
        now = new Date();
        file_name = now.getMonth() + "," + now.getDate() + "," + now.getFullYear()
            + "," + now.getHours() + ":" + now.getMinutes();
        startGame();
    }
    totalPlayers++;
    console.log('total players: ' + totalPlayers);
    socket.id = player_count;
    io.emit('id_issuing', [socket.id, totalPlayers]);
    player_count++;

    let startingRoom = Math.floor(Math.random() * 16);

    // width, height, x, y, speed, health, damage, socket, room, type
    // TODO: change damage back to 20 when done testing
    var player = new Player(47, 73, 10, 300, 2, 5, 20, socket.id, startingRoom, (totalPlayers - 1) % 4);

    PLAYER_LIST[socket.id] = player;

    SOCKET_LIST[socket.id] = socket;

    socket.on('disconnect', function () {
        console.log(PLAYER_LIST[socket.id].name + ' disconnected');
        for (let i in PLAYER_LIST) {
            if (PLAYER_LIST[i].id == socket.id) {
                delete PLAYER_LIST[i];
                totalPlayers--;
				break;
            }
        }
        if (totalPlayers == 0) {
            //console.log(log_file);
            //console.log(file_name);
            /*let writeStream = fs.createWriteStream("./log/" + file_name + ".json");

            writeStream.write(JSON.stringify(log_file));

            writeStream.on('finish', () => {
                console.log('wrote all data to file');
            });

            writeStream.end();*/
            //log_file = {};
        }
    });
	
	socket.on('name', function (data) {
		PLAYER_LIST[socket.id].name = data.playerName;
		console.log(PLAYER_LIST[socket.id].name + " connected");
	});
	
    socket.on('chat message', function (msg) {
        io.emit('chat message', {name: PLAYER_LIST[socket.id].name, message: msg});
    });
	
    socket.on('keyPressed', function (data) {
        if (data.inputID === 'left') {
            PLAYER_LIST[socket.id].Left = data.state;
        }
        else if (data.inputID === 'right') {
            PLAYER_LIST[socket.id].Right = data.state;
        }
        else if (data.inputID === 'up') {
            PLAYER_LIST[socket.id].Up = data.state;
        }
        else if (data.inputID === 'down') {
            PLAYER_LIST[socket.id].Down = data.state;
        }
        else if (data.inputID === 'leftatk') {
            PLAYER_LIST[socket.id].atkLeft = data.state;
        }
        else if (data.inputID === 'rightatk') {
            PLAYER_LIST[socket.id].atkRight = data.state;
        }
        else if (data.inputID === 'upatk') {
            PLAYER_LIST[socket.id].atkUp = data.state;
        }
        else if (data.inputID === 'downatk') {
            PLAYER_LIST[socket.id].atkDown = data.state;
        }
        else if (data.inputID === 'q') {
            PLAYER_LIST[socket.id].q = data.state;
        }
        else if (data.inputID === 'e') {
            PLAYER_LIST[socket.id].e = data.state;
        }
    });
    socket.on('log_key_event', function (data) {
        now = new Date();
        let time = (now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
        let key_pressed;
        if (data >= 37 && data <= 40) { // left, up, right, down
            if (data == 37) key_pressed = ('Left');
            if (data == 38) key_pressed = ('Up');
            if (data == 39) key_pressed = ('Right');
            if (data == 40) key_pressed = ('Down');
        } else if (data >= 65 && data <= 90 || data >= 48 && data <= 57) { // 0-9 and A-Z
            key_pressed = (String.fromCharCode(data));
        } else if (data == 16) { // Shift key
            key_pressed = ('Shift');
        } else if (data == 32) {
            key_pressed = ('Spacebar'); // Spacebar
        } else {
            key_pressed = ('Other key pressed');
        }
        //log_file[time] = key_pressed;
    });
	/*
	socket.on('enterRoom, function (roomId) {
		if (roomId >= 0 && roomId <= 15)
			enterRoom(roomId);
		else if (roomId == 17)
			enterBossRoom2();
	}
	*/
})

function everyFrame() {
	if (Object.keys(SOCKET_LIST).length > 0) {
        let pack = [];
        updateGameArea();
        for (let i in PLAYER_LIST) {
            let player = PLAYER_LIST[i];
            let attacking = (!player.canAttack && frameCount <= player.attackCooldownStartFrame + player.attackPeriod);
            let isHurt = frameCount >= player.hurtStartFrame && frameCount <= player.hurtStartFrame + player.hurtPeriod;
            let bList = [];
            for (let j in roomList[player.room].enemyList) {
                for (let k in roomList[player.room].enemyList[j].bulletList) {
                    bList.push({
                        x: roomList[player.room].enemyList[j].bulletList[k].x,
                        y: roomList[player.room].enemyList[j].bulletList[k].y,
						type: roomList[player.room].enemyList[j].bulletList[k].type,
						angle: roomList[player.room].enemyList[j].bulletList[k].angle
                    });
                }
            }
            pack.push({
                player: player,
                attacking: attacking,
                isHurt: isHurt,
                room: roomList[player.room],
                bulletList: bList,
                roomList: roomList,
                gameover: gameover,
				victory: victory,
                secondsLeft: secondsLeft
            });
        }
        io.emit('packages', pack);
    }
}

/*
var f = setInterval(function () {
    if (Object.keys(SOCKET_LIST).length > 0) {
        let pack = [];
        updateGameArea();
        for (let i in PLAYER_LIST) {
            let player = PLAYER_LIST[i];
            let attacking = (!player.canAttack && frameCount <= player.attackCooldownStartFrame + player.attackPeriod);
            let isHurt = frameCount >= player.hurtStartFrame && frameCount <= player.hurtStartFrame + player.hurtPeriod;
            let bList = [];
            for (let j in roomList[player.room].enemyList) {
                for (let k in roomList[player.room].enemyList[j].bulletList) {
                    bList.push({
                        x: roomList[player.room].enemyList[j].bulletList[k].x,
                        y: roomList[player.room].enemyList[j].bulletList[k].y,
						type: roomList[player.room].enemyList[j].bulletList[k].type,
						angle: roomList[player.room].enemyList[j].bulletList[k].angle
                    });
                }
            }
            pack.push({
                player: player,
                attacking: attacking,
                isHurt: isHurt,
                room: roomList[player.room],
                bulletList: bList,
                roomList: roomList,
                gameover: gameover,
				victory: victory,
                secondsLeft: secondsLeft
            });
        }
        io.emit('packages', pack);
    }
}, 20)
*/
function stopInterval() {
	clearInterval(f);
	f = false;
}
