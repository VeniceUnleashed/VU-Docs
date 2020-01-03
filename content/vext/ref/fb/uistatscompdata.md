---
title: UIStatsCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UIStatsCompData()                                                          | Create a new instance of this container type.                                                                         |
| UIStatsCompData(UIStatsCompData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UIStatsCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIStatsCompData](UIStatsCompData).                  |
| UIStatsCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIStatsCompData](UIStatsCompData).                                      |
| UIStatsCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIStatsCompData](UIStatsCompData). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UIStatsCompData](UIStatsCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIStatsCompData](UIStatsCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
