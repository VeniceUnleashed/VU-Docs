---
title: WingPhysicsData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| WingPhysicsData()                                                          | Create a new instance of this container type.                                                                         |
| WingPhysicsData(WingPhysicsData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| WingPhysicsData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WingPhysicsData](WingPhysicsData). |

## Properties

| Name                        | Type                               | Description |
| --------------------------- | ---------------------------------- | ----------- |
| lift                        | number                             |             |
| flapLift                    | number                             |             |
| liftCoefficient             | [Curve2D](Curve2D)                 |             |
| drag                        | number                             |             |
| flapDrag                    | number                             |             |
| dragCoefficient             | [Curve2D](Curve2D)                 |             |
| angularVelocityLiftModifier | number                             |             |
| dragRotationModifier        | number                             |             |
| baseAngleOfAttack           | number                             |             |
| inputForFlap                | number                             |             |
| flapTurnSpeed               | number                             |             |
| visualFlapTurnSpeed         | number                             |             |
| visualFlapAngleLimit        | number                             |             |
| maxFlapAngleScaleFactor     | [Curve2D](Curve2D)                 |             |
| landingFlapLift             | number                             |             |
| landingFlapLogic            | [LandingFlapData](LandingFlapData) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [WingPhysicsData](WingPhysicsData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WingPhysicsData](WingPhysicsData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
