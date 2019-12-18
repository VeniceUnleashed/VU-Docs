---
title: DataBusData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| DataBusData()                                                          | Create a new instance of this container type.                                                                 |
| DataBusData(DataBusData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| DataBusData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DataBusData](DataBusData).                                      |
| DataBusData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DataBusData](DataBusData). |

## Properties

| Name                | Type                                         | Description |
| ------------------- | -------------------------------------------- | ----------- |
| propertyConnections | [PropertyConnection](PropertyConnection)\[\] |             |
| linkConnections     | [LinkConnection](LinkConnection)\[\]         |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [DataBusData](DataBusData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DataBusData](DataBusData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
