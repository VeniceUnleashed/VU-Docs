---
title: PhysicsDrivenAnimationEntityBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                                    | Description                                              |
| ------------------------------------------------------------------------------ | -------------------------------------------------------- |
| PhysicsDrivenAnimationEntityBinding()                                          | Create a new instance of this structure type.            |
| PhysicsDrivenAnimationEntityBinding(PhysicsDrivenAnimationEntityBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type             | Description |
| ---------------------- | ---------------- | ----------- |
| aimLeftRight           | [AntRef](AntRef) |             |
| aimUpDown              | [AntRef](AntRef) |             |
| crouch                 | [AntRef](AntRef) |             |
| forceSetTrajectory     | [AntRef](AntRef) |             |
| inAir                  | [AntRef](AntRef) |             |
| skydive                | [AntRef](AntRef) |             |
| parachute              | [AntRef](AntRef) |             |
| swim                   | [AntRef](AntRef) |             |
| inputBackward          | [AntRef](AntRef) |             |
| inputForward           | [AntRef](AntRef) |             |
| inputLeft              | [AntRef](AntRef) |             |
| inputRight             | [AntRef](AntRef) |             |
| isEnemy                | [AntRef](AntRef) |             |
| jump                   | [AntRef](AntRef) |             |
| leanLeftRight          | [AntRef](AntRef) |             |
| prone                  | [AntRef](AntRef) |             |
| sprint                 | [AntRef](AntRef) |             |
| groundSupported        | [AntRef](AntRef) |             |
| groundNormal           | [AntRef](AntRef) |             |
| groundDistance         | [AntRef](AntRef) |             |
| groundAngleZ           | [AntRef](AntRef) |             |
| groundAngleX           | [AntRef](AntRef) |             |
| groundAngleFromNormal  | [AntRef](AntRef) |             |
| isClientAnimatable     | [AntRef](AntRef) |             |
| customizationScreen    | [AntRef](AntRef) |             |
| minimal3pServer        | [AntRef](AntRef) |             |
| verticalImpact         | [AntRef](AntRef) |             |
| falseSignal            | [AntRef](AntRef) |             |
| lockArmsToCameraWeight | [AntRef](AntRef) |             |

## Methods

| Type                                                                       | Name            | Parameters |
| -------------------------------------------------------------------------- | --------------- | ---------- |
| [PhysicsDrivenAnimationEntityBinding](PhysicsDrivenAnimationEntityBinding) | [Clone](#clone) |            |

### Clone

> [PhysicsDrivenAnimationEntityBinding](PhysicsDrivenAnimationEntityBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
