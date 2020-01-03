---
title: RotationBodyData
---
### Base Classes

[MovingBodyData](/vext/ref/fb/movingbodydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| RotationBodyData()                                                          | Create a new instance of this container type.                                                                           |
| RotationBodyData(RotationBodyData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| RotationBodyData([MovingBodyData](/vext/ref/fb/movingbodydata/) other)                    | Upcast an instance of type [MovingBodyData](/vext/ref/fb/movingbodydata/) to [RotationBodyData](/vext/ref/fb/rotationbodydata/).                    |
| RotationBodyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RotationBodyData](/vext/ref/fb/rotationbodydata/). |

## Properties

| Name                        | Type                                               | Description |
| --------------------------- | -------------------------------------------------- | ----------- |
| angularMomentumMultiplier   | number                                             |             |
| angularMomentumThreshold    | number                                             |             |
| angularMomentumDamping      | number                                             |             |
| angularMomentumDampingAcc   | number                                             |             |
| angularMomentumDampingDeacc | number                                             |             |
| angularConstraintMin        | number                                             |             |
| extendedConstraints         | [ExtendedConstraintsData](/vext/ref/fb/extendedconstraintsdata/) |             |
| angularConstraintMax        | number                                             |             |
| rotationAxis                | number                                             |             |
| usePostSatisfyConstraints   | bool                                               |             |
| useAngularMomentumThreshold | bool                                               |             |
| useAngularMomentumDamping   | bool                                               |             |
| useAngularConstraint        | bool                                               |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [RotationBodyData](/vext/ref/fb/rotationbodydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RotationBodyData](/vext/ref/fb/rotationbodydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
