---
title: UINavigationCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UINavigationCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UINavigationCompData(UINavigationCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UINavigationCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UINavigationCompData](UINavigationCompData).                  |
| UINavigationCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UINavigationCompData](UINavigationCompData).                                      |
| UINavigationCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINavigationCompData](UINavigationCompData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UINavigationCompData](UINavigationCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UINavigationCompData](UINavigationCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
