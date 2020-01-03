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
| aimLeftRight           | [AntRef](/vext/ref/fb/antref/) |             |
| aimUpDown              | [AntRef](/vext/ref/fb/antref/) |             |
| crouch                 | [AntRef](/vext/ref/fb/antref/) |             |
| forceSetTrajectory     | [AntRef](/vext/ref/fb/antref/) |             |
| inAir                  | [AntRef](/vext/ref/fb/antref/) |             |
| skydive                | [AntRef](/vext/ref/fb/antref/) |             |
| parachute              | [AntRef](/vext/ref/fb/antref/) |             |
| swim                   | [AntRef](/vext/ref/fb/antref/) |             |
| inputBackward          | [AntRef](/vext/ref/fb/antref/) |             |
| inputForward           | [AntRef](/vext/ref/fb/antref/) |             |
| inputLeft              | [AntRef](/vext/ref/fb/antref/) |             |
| inputRight             | [AntRef](/vext/ref/fb/antref/) |             |
| isEnemy                | [AntRef](/vext/ref/fb/antref/) |             |
| jump                   | [AntRef](/vext/ref/fb/antref/) |             |
| leanLeftRight          | [AntRef](/vext/ref/fb/antref/) |             |
| prone                  | [AntRef](/vext/ref/fb/antref/) |             |
| sprint                 | [AntRef](/vext/ref/fb/antref/) |             |
| groundSupported        | [AntRef](/vext/ref/fb/antref/) |             |
| groundNormal           | [AntRef](/vext/ref/fb/antref/) |             |
| groundDistance         | [AntRef](/vext/ref/fb/antref/) |             |
| groundAngleZ           | [AntRef](/vext/ref/fb/antref/) |             |
| groundAngleX           | [AntRef](/vext/ref/fb/antref/) |             |
| groundAngleFromNormal  | [AntRef](/vext/ref/fb/antref/) |             |
| isClientAnimatable     | [AntRef](/vext/ref/fb/antref/) |             |
| customizationScreen    | [AntRef](/vext/ref/fb/antref/) |             |
| minimal3pServer        | [AntRef](/vext/ref/fb/antref/) |             |
| verticalImpact         | [AntRef](/vext/ref/fb/antref/) |             |
| falseSignal            | [AntRef](/vext/ref/fb/antref/) |             |
| lockArmsToCameraWeight | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                                                       | Name            | Parameters |
| -------------------------------------------------------------------------- | --------------- | ---------- |
| [PhysicsDrivenAnimationEntityBinding](/vext/ref/fb/physicsdrivenanimationentitybinding/) | [Clone](#clone) |            |

### Clone

> [PhysicsDrivenAnimationEntityBinding](/vext/ref/fb/physicsdrivenanimationentitybinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
