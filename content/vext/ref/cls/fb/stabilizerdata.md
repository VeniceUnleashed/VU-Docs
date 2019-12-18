---
title: StabilizerData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| StabilizerData()                                                          | Create a new instance of this container type.                                                                       |
| StabilizerData(StabilizerData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| StabilizerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StabilizerData](StabilizerData). |

## Properties

| Name                     | Type   | Description |
| ------------------------ | ------ | ----------- |
| pitchStrength            | number |             |
| rollStrength             | number |             |
| verticalVelocityStrength | number |             |
| yawStrength              | number |             |
| advancedYaw              | bool   |             |
| advanced                 | bool   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [StabilizerData](StabilizerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StabilizerData](StabilizerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
