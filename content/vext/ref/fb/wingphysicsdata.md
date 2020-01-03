---
title: WingPhysicsData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| WingPhysicsData()                                                          | Create a new instance of this container type.                                                                         |
| WingPhysicsData(WingPhysicsData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| WingPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WingPhysicsData](/vext/ref/fb/wingphysicsdata/). |

## Properties

| Name                        | Type                               | Description |
| --------------------------- | ---------------------------------- | ----------- |
| lift                        | number                             |             |
| flapLift                    | number                             |             |
| liftCoefficient             | [Curve2D](/vext/ref/fb/curve2d/)                 |             |
| drag                        | number                             |             |
| flapDrag                    | number                             |             |
| dragCoefficient             | [Curve2D](/vext/ref/fb/curve2d/)                 |             |
| angularVelocityLiftModifier | number                             |             |
| dragRotationModifier        | number                             |             |
| baseAngleOfAttack           | number                             |             |
| inputForFlap                | number                             |             |
| flapTurnSpeed               | number                             |             |
| visualFlapTurnSpeed         | number                             |             |
| visualFlapAngleLimit        | number                             |             |
| maxFlapAngleScaleFactor     | [Curve2D](/vext/ref/fb/curve2d/)                 |             |
| landingFlapLift             | number                             |             |
| landingFlapLogic            | [LandingFlapData](/vext/ref/fb/landingflapdata/) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [WingPhysicsData](/vext/ref/fb/wingphysicsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WingPhysicsData](/vext/ref/fb/wingphysicsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
