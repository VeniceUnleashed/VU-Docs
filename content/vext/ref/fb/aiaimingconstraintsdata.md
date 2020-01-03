---
title: AIAimingConstraintsData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AIAimingConstraintsData()                                                          | Create a new instance of this container type.                                                                                         |
| AIAimingConstraintsData(AIAimingConstraintsData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| AIAimingConstraintsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata/). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| minYaw   | number |             |
| maxYaw   | number |             |
| minPitch | number |             |
| maxPitch | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
