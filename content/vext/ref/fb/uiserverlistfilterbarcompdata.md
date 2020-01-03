---
title: UIServerListFilterBarCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| UIServerListFilterBarCompData()                                                          | Create a new instance of this container type.                                                                                                     |
| UIServerListFilterBarCompData(UIServerListFilterBarCompData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| UIServerListFilterBarCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIServerListFilterBarCompData](UIServerListFilterBarCompData).                  |
| UIServerListFilterBarCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIServerListFilterBarCompData](UIServerListFilterBarCompData).                                      |
| UIServerListFilterBarCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIServerListFilterBarCompData](UIServerListFilterBarCompData). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIServerListFilterBarCompData](UIServerListFilterBarCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIServerListFilterBarCompData](UIServerListFilterBarCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
