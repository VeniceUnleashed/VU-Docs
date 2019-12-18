---
title: AIAimingConstraintsData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| AIAimingConstraintsData()                                                          | Create a new instance of this container type.                                                                                         |
| AIAimingConstraintsData(AIAimingConstraintsData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| AIAimingConstraintsData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AIAimingConstraintsData](AIAimingConstraintsData). |

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
| [AIAimingConstraintsData](AIAimingConstraintsData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AIAimingConstraintsData](AIAimingConstraintsData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
