---
title: LandingFlapData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| LandingFlapData()                                                          | Create a new instance of this container type.                                                                         |
| LandingFlapData(LandingFlapData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| LandingFlapData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LandingFlapData](LandingFlapData). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| activationHeight   | number |             |
| heightTolerance    | number |             |
| activationVelocity | number |             |
| velocityTolerance  | number |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [LandingFlapData](LandingFlapData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LandingFlapData](LandingFlapData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
