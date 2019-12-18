---
title: SoldierHealthModuleBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| SoldierHealthModuleBinding()                                 | Create a new instance of this structure type.            |
| SoldierHealthModuleBinding(SoldierHealthModuleBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type             | Description |
| ----------------------- | ---------------- | ----------- |
| headShot                | [AntRef](AntRef) |             |
| leftArmHit              | [AntRef](AntRef) |             |
| rightArmHit             | [AntRef](AntRef) |             |
| leftLegHit              | [AntRef](AntRef) |             |
| rightLegHit             | [AntRef](AntRef) |             |
| onGround                | [AntRef](AntRef) |             |
| deathAnimationTriggered | [AntRef](AntRef) |             |
| randomAnimationIndex    | [AntRef](AntRef) |             |
| sprinting               | [AntRef](AntRef) |             |
| hitLeft                 | [AntRef](AntRef) |             |
| hitRight                | [AntRef](AntRef) |             |
| hitFront                | [AntRef](AntRef) |             |
| hitBack                 | [AntRef](AntRef) |             |
| deathHitDirection       | [AntRef](AntRef) |             |
| explosion               | [AntRef](AntRef) |             |
| dead                    | [AntRef](AntRef) |             |
| revived                 | [AntRef](AntRef) |             |
| randomValue             | [AntRef](AntRef) |             |
| pose                    | [AntRef](AntRef) |             |
| rightSpeed              | [AntRef](AntRef) |             |
| forwardSpeed            | [AntRef](AntRef) |             |
| criticallyHit           | [AntRef](AntRef) |             |
| interactiveManDown      | [AntRef](AntRef) |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [SoldierHealthModuleBinding](SoldierHealthModuleBinding) | [Clone](#clone) |            |

### Clone

> [SoldierHealthModuleBinding](SoldierHealthModuleBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
