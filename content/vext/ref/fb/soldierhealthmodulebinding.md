---
title: SoldierHealthModuleBinding
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
| headShot                | [AntRef](/vext/ref/fb/antref/) |             |
| leftArmHit              | [AntRef](/vext/ref/fb/antref/) |             |
| rightArmHit             | [AntRef](/vext/ref/fb/antref/) |             |
| leftLegHit              | [AntRef](/vext/ref/fb/antref/) |             |
| rightLegHit             | [AntRef](/vext/ref/fb/antref/) |             |
| onGround                | [AntRef](/vext/ref/fb/antref/) |             |
| deathAnimationTriggered | [AntRef](/vext/ref/fb/antref/) |             |
| randomAnimationIndex    | [AntRef](/vext/ref/fb/antref/) |             |
| sprinting               | [AntRef](/vext/ref/fb/antref/) |             |
| hitLeft                 | [AntRef](/vext/ref/fb/antref/) |             |
| hitRight                | [AntRef](/vext/ref/fb/antref/) |             |
| hitFront                | [AntRef](/vext/ref/fb/antref/) |             |
| hitBack                 | [AntRef](/vext/ref/fb/antref/) |             |
| deathHitDirection       | [AntRef](/vext/ref/fb/antref/) |             |
| explosion               | [AntRef](/vext/ref/fb/antref/) |             |
| dead                    | [AntRef](/vext/ref/fb/antref/) |             |
| revived                 | [AntRef](/vext/ref/fb/antref/) |             |
| randomValue             | [AntRef](/vext/ref/fb/antref/) |             |
| pose                    | [AntRef](/vext/ref/fb/antref/) |             |
| rightSpeed              | [AntRef](/vext/ref/fb/antref/) |             |
| forwardSpeed            | [AntRef](/vext/ref/fb/antref/) |             |
| criticallyHit           | [AntRef](/vext/ref/fb/antref/) |             |
| interactiveManDown      | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [SoldierHealthModuleBinding](/vext/ref/fb/soldierhealthmodulebinding/) | [Clone](#clone) |            |

### Clone

> [SoldierHealthModuleBinding](/vext/ref/fb/soldierhealthmodulebinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
