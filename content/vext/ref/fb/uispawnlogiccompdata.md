---
title: UISpawnLogicCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UISpawnLogicCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UISpawnLogicCompData(UISpawnLogicCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UISpawnLogicCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UISpawnLogicCompData](UISpawnLogicCompData).                  |
| UISpawnLogicCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UISpawnLogicCompData](UISpawnLogicCompData).                                      |
| UISpawnLogicCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UISpawnLogicCompData](UISpawnLogicCompData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UISpawnLogicCompData](UISpawnLogicCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UISpawnLogicCompData](UISpawnLogicCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
