---
title: Player (Client Class)
---
## Description

## Properties

| Name                   | Type                                                | Writable | Description |
| ---------------------- | --------------------------------------------------- | -------- | ----------- |
| name                   | string                                              |          |             |
| id                     | int                                                 |          |             |
| teamId                 | [TeamId](/vext/ref/cls/fb/teamid)                |          |             |
| squadId                | [SquadId](/vext/ref/cls/fb/squadid)              |          |             |
| inVehicle              | bool                                                |          |             |
| soldier                | [SoldierEntity](/vext/ref/cls/clt/soldierentity) |          |             |
| corpse                 | [SoldierEntity](/vext/ref/cls/clt/soldierentity) |          |             |
| attachedControllable   | [Entity](/vext/ref/cls/shr/entity)               |          |             |
| controlledControllable | [Entity](/vext/ref/cls/shr/entity)               |          |             |
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
| [LinearTransform](/vext/ref/cls/shr/lineartransform) | [GetCameraTransform](#getcameratransform) |            |

### GetKills

> int **GetKills**()

### GetDeaths

> int **GetDeaths**()

### GetTime

> int **GetTime**()

### GetScore

> int **GetScore**()

### GetCameraTransform

> [LinearTransform](/vext/ref/cls/shr/lineartransform) **GetCameraTransform**()
