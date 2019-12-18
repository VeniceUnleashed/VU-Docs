---
title: DynamicDataContainer (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| DynamicDataContainer()                                                          | Create a new instance of this container type.                                                                                   |
| DynamicDataContainer(DynamicDataContainer other)                                | Create a reference copy of an instance of the same type.                                                                        |
| DynamicDataContainer([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DynamicDataContainer](DynamicDataContainer). |

## Properties

| Name   | Type                       | Description |
| ------ | -------------------------- | ----------- |
| fields | [DataField](DataField)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [DynamicDataContainer](DynamicDataContainer) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DynamicDataContainer](DynamicDataContainer) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
