---
title: StabilizerData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| StabilizerData()                                                          | Create a new instance of this container type.                                                                       |
| StabilizerData(StabilizerData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| StabilizerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StabilizerData](/vext/ref/fb/stabilizerdata/). |

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
| [StabilizerData](/vext/ref/fb/stabilizerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StabilizerData](/vext/ref/fb/stabilizerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
