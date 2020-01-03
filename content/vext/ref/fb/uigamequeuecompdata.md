---
title: UIGameQueueCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIGameQueueCompData()                                                          | Create a new instance of this container type.                                                                                 |
| UIGameQueueCompData(UIGameQueueCompData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIGameQueueCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIGameQueueCompData](UIGameQueueCompData).                  |
| UIGameQueueCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIGameQueueCompData](UIGameQueueCompData).                                      |
| UIGameQueueCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGameQueueCompData](UIGameQueueCompData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIGameQueueCompData](UIGameQueueCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIGameQueueCompData](UIGameQueueCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
