---
title: MobilityData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| MobilityData()                                                          | Create a new instance of this container type.                                                                   |
| MobilityData(MobilityData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| MobilityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MobilityData](MobilityData). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| maxSpeed       | number |             |
| use3DWaypoints | bool   |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [MobilityData](MobilityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MobilityData](MobilityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
