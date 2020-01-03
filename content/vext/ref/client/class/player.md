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
| soldier                | [SoldierEntity](/vext/ref/cls/clt/soldierentity) |          |             |
| corpse                 | [SoldierEntity](/vext/ref/cls/clt/soldierentity) |          |             |
| attachedControllable   | [Entity](/vext/ref/shared/class/entity)               |          |             |
| controlledControllable | [Entity](/vext/ref/shared/class/entity)               |          |             |
| isSquadLeader          | bool                                                |          |             |
| alive                  | bool                                                |          |             |

## Operators

| Operator | Parameters                                      |
| -------- | ----------------------------------------------- |
| \==      | [Player](/vext/ref/cls/clt/player) **other** |

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
