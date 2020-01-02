---
title: LandingFlapData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| LandingFlapData()                                                          | Create a new instance of this container type.                                                                         |
| LandingFlapData(LandingFlapData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| LandingFlapData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LandingFlapData](LandingFlapData). |

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
| [LandingFlapData](LandingFlapData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LandingFlapData](LandingFlapData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
