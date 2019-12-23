---
title: Server Administration
---

*This guide will only cover VU-spesifics.*


## Introduction
Without configuration, the VU server will function identically to a vanilla Battlefield 3 server.

You should have followed the [Getting Started](#) guide before getting here.

The listed commands and variables are available by default, mods can register their own commands and variables.



## Startup.txt
Located inside the Admin directory, the Startup.txt file is executed every time you start the server.
This is where persistent server configuration variables are stored.

Comments begin with a `#` at the start of a line.
Quotations are optional for single words, but are required if the parameter contains spaces:
```
# Correct:   admin.password Hello
# Correct:   admin.password "Hello"
# Incorrect: admin.password Hello World
# Correct:   admin.password "Hello World"
```

### Example:
```
#Primary variables
vars.serverName "ExampleServer" #Server name
admin.password "ChangeThisPassword" #Rcon password
vars.gamePassword "" #Password used when connecting to the server
vars.maxPlayers 64 # Max is 124

#Gameplay variables
vars.friendlyFire false 
vars.idleTimeout 0 
vars.teamKillCountForKick 5
vars.teamKillValueForKick 4
vars.teamKillValueIncrease 1
vars.teamKillValueDecreasePerSecond 0
vars.autoBalance false
vars.killCam true
vars.miniMap true
vars.3dSpotting true
vars.miniMapSpotting true
vars.3pCam true
vars.idleBanRounds 0
vars.vehicleSpawnAllowed true
vars.vehicleSpawnDelay 100
vars.bulletDamage 100
vars.nameTag true
vars.regenerateHealth true
vars.roundRestartPlayerCount 8
vars.roundStartPlayerCount 8
vars.onlySquadLeaderSpawn false
vars.gunMasterWeaponsPreset 0
vars.soldierHealth 100
vars.hud true
vars.playerManDownTime 100
vars.playerRespawnTime 100
vars.gameModeCounter 100
vars.ctfRoundTimeModifier 100"
vars.roundLockdownCountdown 15
vars.roundWarmupTimeout 600

#Unused variables (But mods can use them)
vars.serverMessage "Some Server Message" 
vars.serverDescription "Some Server Description"
vars.premiumStatus false

vu.SpectatorCount 4
vu.SquadSize 6
vu.VehicleDisablingEnabled true
vu.ColorCorrectionEnabled true #Blue filter enabled
vu.SunFlareEnabled true #Sunglare and flashlight glare enabled
vu.SuppressionMultiplier 1
vu.SpawnProtectionEnabled true
vu.DesertingAllowed false #Can go out of bounds
vu.DestructionEnabled true
vu.HighPerformanceReplication false #See note
vu.TimeScale 1
```
Notes:
- **vu.ColorCorrectionEnabled**: false will cause mods that rely on color correction look worse. 
- **vu.HighPerformanceReplication**: Normally the game sends less updates for ghosts the further away from your local player they are, setting this to true makes it so they all send updates at the same rate regardless of distance
- **vu.DesertingAllowed**: true disables out-of-bounds restriction, but you will encounter buggy terrain when going far outside of bounds.
To resolve this, use the `-highresterrain` launch option on the server. 
This makes the server use more memory, but it fixes the glitching terrain.

## Using RCON
You can also configure your server while it is running. Keep in mind that some changes requires a restart or a mapchange to work.
I recommend that you use [Procon](https://myrcon.net/topic/2-procon-1x/).

### Rcon commands and variables
```
bool vu.ColorCorrectionEnabled
bool vu.DesertingAllowed
bool vu.DestructionEnabled
bool vu.SpawnProtectionEnabled
float vu.SuppressionMultiplier
bool vu.VehicleDisablingEnabled
bool vu.SunFlareEnabled
int vu.SquadSize

bool vu.HighPerformanceReplication
float vu.TimeScale

void vu.FadeInAll
void vu.FadeOutAll
int vu.SetTeamTicketCount

void modlist.AvailableMods
string modlist.Add
string modlist.Remove
void modlist.Save
void modlist.Clear
bool modlist.Debug
void modlist.List
void modlist.ReloadExtensions
void modlist.UnloadExtensions


int vu.SpectatorCount (read-only)
[regular|high60|high120] vu.FrequencyMode (read-only)
```

## Modlist.txt
Stored in the Admin directory, Modlist.txt lists the mods that will be loaded at server launch, one entry per line (case-insensitive).
The name should match the directory name of the mod.

### Example:
```
ExampleMod
SuperSoldier
PropHunt
```

## Maplist.txt
Stored in the Admin diretory, Maplist.txt is the list of levels your server is running on repeat, called `MapRotation`.
I recommend that you select your maprotation using Procon, as not all maps support all gamemodes.

Format: MapName GameModeName RoundCount
### Example:
```
XP2_Skybar TeamDeathMatchC0 2
MP_018 ConquestLarge0 2
MP_001 ConquestLarge0 2
```

### Maps
Singleplayer maps do not work out-of-the-box, and requires additional mods to load.
TODO: Reference SP/Coop loading mods
```
Coop_002         -    Fire from the Sky
Coop_003         -    Exfiltration
Coop_006         -    Hit and Run
Coop_007         -    Drop 'Em Like Liquid
Coop_009         -    Operation Exodus
Coop_010         -    The Eleventh Hour
SP_Bank          -    Operation Guillotine
SP_Earthquake    -    Operation Swordbreaker
SP_Earthquake2   -    Uprising
SP_Finale        -    The Great Destroyer
SP_Interrogation -    Intro
SP_Jet           -    Going Hunting
SP_New_York      -    Semper Fidelis
SP_Paris         -    Comrades
SP_Sniper        -    Night Shift
SP_Tank          -    Thunder Run
SP_Tank_b        -    Fear No Evil
SP_Valley        -    Rock and a Hard Place
SP_Villa         -    Kaffarov
MP_001           -    Grand Bazaar
MP_003           -    Teheran Highway
MP_007           -    Caspian Border
MP_011           -    Seine Crossing
MP_012           -    Operation Firestorm
MP_013           -    Damavand Peak
MP_017           -    Noshahr Canals
MP_018           -    Kharg Island
MP_Subway        -    Operation Metro
XP1_001          -    Strike at Karkand
XP1_002          -    Gulf of Oman
XP1_003          -    Sharqi Peninsula
XP1_004          -    Wake Island
XP2_Factory      -    Scrapmetal
XP2_Office       -    Operation 925
XP2_Palace       -    Donya Fortress
XP2_Skybar       -    Ziba Tower
XP3_Alborz       -    Alborz Mountains
XP3_Desert       -    Bandar Desert
XP3_Shield       -    Armored Shield
XP3_Valley       -    Death Valley
XP4_FD           -    Markaz Monolith
XP4_Parl         -    Azadi Palace
XP4_Quake        -    Epicenter
XP4_Rubble       -    Talah Market
XP5_001          -    Operation Riverside
XP5_002          -    Nebandan Flats
XP5_003          -    Kiasar Railroad
XP5_004          -    Sabalan Pipeline
```

### Gamemodes
```
ConquestLarge0
ConquestSmall0
ConquestAssaultLarge0
ConquestAssaultSmall0
ConquestAssaultSmall1
RushLarge0
SquadRush0
SquadDeathMatch0
TeamDeathMatch0
TeamDeathMatchC0
Domination0
GunMaster0
TankSuperiority0
Scavenger0
CaptureTheFlag0
AirSuperiority0
```
