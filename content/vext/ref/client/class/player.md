---
title: Player
---
## Description

## Properties

| Name                   | Type                                                | Writable | Description |
| ---------------------- | --------------------------------------------------- | -------- | ----------- |
| name                   | string                                              |          |             |
| id                     | int                                                 |          |             |
| teamId                 | [TeamId](/vext/ref/fb/teamid)                |          |             |
| squadId                | [SquadId](/vext/ref/fb/squadid)              |          |             |
| inVehicle              | bool                                                |          |             |
| soldier                | [SoldierEntity](/vext/ref/client/class/soldierentity) |          |             |
| corpse                 | [SoldierEntity](/vext/ref/client/class/soldierentity) |          |             |
| attachedControllable   | [Entity](/vext/ref/shared/class/entity)               |          |             |
| controlledControllable | [Entity](/vext/ref/shared/class/entity)               |          |             |
| isSquadLeader          | bool                                                |          |             |
| alive                  | bool                                                |          |             |

## Operators

| Operator | Parameters                                      |
| -------- | ----------------------------------------------- |
| \==      | [Player](/vext/ref/client/class/player) **other** |

## Methods

| Type                                                    | Name                                      | Parameters |
| ------------------------------------------------------- | ----------------------------------------- | ---------- |
| int                                                     | [GetKills](#getkills)                     |            |
| int                                                     | [GetDeaths](#getdeaths)                   |            |
| int                                                     | [GetTime](#gettime)                       |            |
| int                                                     | [GetScore](#getscore)                     |            |
| [LinearTransform](/vext/ref/shared/class/lineartransform) | [GetCameraTransform](#getcameratransform) |            |

### GetKills

> int **GetKills**()

### GetDeaths

> int **GetDeaths**()

### GetTime

> int **GetTime**()

### GetScore

> int **GetScore**()

### GetCameraTransform

> [LinearTransform](/vext/ref/shared/class/lineartransform) **GetCameraTransform**()
