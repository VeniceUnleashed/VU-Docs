---
title: WaterData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| WaterData()                                                          | Create a new instance of this container type.                                                             |
| WaterData(WaterData other)                                           | Create a reference copy of an instance of the same type.                                                  |
| WaterData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [WaterData](WaterData).                                      |
| WaterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WaterData](WaterData). |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [WaterData](WaterData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WaterData](WaterData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
