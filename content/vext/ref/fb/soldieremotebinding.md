---
title: SoldierEmoteBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| SoldierEmoteBinding()                          | Create a new instance of this structure type.            |
| SoldierEmoteBinding(SoldierEmoteBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type             | Description |
| ----------------------- | ---------------- | ----------- |
| speak                   | [AntRef](AntRef) |             |
| isSquadLeader           | [AntRef](AntRef) |             |
| emoteSpot               | [AntRef](AntRef) |             |
| emoteOk                 | [AntRef](AntRef) |             |
| emoteNeedARide          | [AntRef](AntRef) |             |
| emoteGoGoGo             | [AntRef](AntRef) |             |
| emoteNeedBackup         | [AntRef](AntRef) |             |
| emoteThanks             | [AntRef](AntRef) |             |
| emoteNeedMedic          | [AntRef](AntRef) |             |
| emoteFollowMe           | [AntRef](AntRef) |             |
| emoteNeedAmmo           | [AntRef](AntRef) |             |
| emoteSorry              | [AntRef](AntRef) |             |
| emoteNo                 | [AntRef](AntRef) |             |
| emoteDefendCapturePoint | [AntRef](AntRef) |             |
| emoteAttackCapturePoint | [AntRef](AntRef) |             |
| emoteMoveToPosition     | [AntRef](AntRef) |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [SoldierEmoteBinding](SoldierEmoteBinding) | [Clone](#clone) |            |

### Clone

> [SoldierEmoteBinding](SoldierEmoteBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
