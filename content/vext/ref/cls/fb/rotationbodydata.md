---
title: RotationBodyData (Frostbite Container)
---
### Base Classes

[MovingBodyData](MovingBodyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| RotationBodyData()                                                          | Create a new instance of this container type.                                                                           |
| RotationBodyData(RotationBodyData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| RotationBodyData([MovingBodyData](MovingBodyData) other)                    | Upcast an instance of type [MovingBodyData](MovingBodyData) to [RotationBodyData](RotationBodyData).                    |
| RotationBodyData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RotationBodyData](RotationBodyData). |

## Properties

| Name                        | Type                                               | Description |
| --------------------------- | -------------------------------------------------- | ----------- |
| angularMomentumMultiplier   | number                                             |             |
| angularMomentumThreshold    | number                                             |             |
| angularMomentumDamping      | number                                             |             |
| angularMomentumDampingAcc   | number                                             |             |
| angularMomentumDampingDeacc | number                                             |             |
| angularConstraintMin        | number                                             |             |
| extendedConstraints         | [ExtendedConstraintsData](ExtendedConstraintsData) |             |
| angularConstraintMax        | number                                             |             |
| rotationAxis                | number                                             |             |
| usePostSatisfyConstraints   | bool                                               |             |
| useAngularMomentumThreshold | bool                                               |             |
| useAngularMomentumDamping   | bool                                               |             |
| useAngularConstraint        | bool                                               |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [RotationBodyData](RotationBodyData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RotationBodyData](RotationBodyData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
