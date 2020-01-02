---
title: UISpawnPointCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UISpawnPointCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UISpawnPointCompData(UISpawnPointCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UISpawnPointCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UISpawnPointCompData](UISpawnPointCompData).                  |
| UISpawnPointCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UISpawnPointCompData](UISpawnPointCompData).                                      |
| UISpawnPointCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UISpawnPointCompData](UISpawnPointCompData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UISpawnPointCompData](UISpawnPointCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UISpawnPointCompData](UISpawnPointCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
