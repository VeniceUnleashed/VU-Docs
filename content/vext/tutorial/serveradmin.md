---
title: Server Administration
---
## Introduction
In this tutorial you'll learn how to configure and administer your server.
You should have followed the [Getting Started](#) guide before getting here.
Without configuration, the VU server will function identically to a vanilla Battlefield 3 server.

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
vars.friendlyFire true 
vars.idleTimeout 0 
vars.teamKillCountForKick 5
vars.teamKillValueForKick 4
vars.teamKillValueIncrease 1
vars.teamKillValueDecreasePerSecond 0
vars.autoBalance false
vars.killCam false
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
punkBuster.activate false #VU does not use Punkbuster regardless of this setting
vars.premiumStatus false #There is no VU premium (yet)

vu.ColorCorrectionEnabled true #Blue filter enabled
vu.DesertingAllowed false #Can go out of bounds
vu.DestructionEnabled true
vu.FrequencyMode high120 #Tickrate (high60, high120)
vu.HighPerformanceReplication false #See note
vu.SpawnProtectionEnabled true
vu.SpectatorCount 4
vu.SquadSize 6
vu.SunFlareEnabled true #Sunglare and flashlight glare enabled
vu.SuppressionMultiplier 1
vu.TimeScale 1
vu.VehicleDisablingEnabled true

```
Notes:
- **vu.ColorCorrectionEnabled** false will cause mods that rely on color correction look worse. 
- **vu.HighPerformanceReplication**: Normally the game sends less updates for ghosts the further away from your local player they are, setting this to true makes it so they all send updates at the same rate regardless of distance
- **vu.DesertingAllowed** true disables out-of-bounds restriction, but you will encounter buggy terrain when going far outside of bounds.
To resolve this, use the `-highresterrain` launch option on the server. 
This makes the server use more memory, but it fixes the glitching terrain.

## Using RCON
You can also configure your server while it is running. Keep in mind that some changes requires a restart or a mapchange to work.
I recommend that you use [Procon](https://myrcon.net/topic/2-procon-1x/).
This guide will only cover VU-spesifics. If you need more information I suggest you google procon guides.

### Rcon commands and variables
```
bool vu.ColorCorrectionEnabled
bool vu.DesertingAllowed
bool vu.DestructionEnabled
void vu.FadeInAll
void vu.FadeOutAll
[regular|high60|high120] vu.FrequencyMode
bool vu.HighPerformanceReplication
int vu.SetTeamTicketCount
bool vu.SpawnProtectionEnabled
int vu.SpectatorCount
int vu.SquadSize
bool vu.SunFlareEnabled
float vu.SuppressionMultiplier
float vu.TimeScale
bool vu.VehicleDisablingEnabled
string modlist.Add
void modlist.AvailableMods
void modlist.Clear
bool modlist.Debug
void modlist.List
void modlist.ReloadExtensions
string modlist.Remove
void modlist.Save
void modlist.UnloadExtensions
```
