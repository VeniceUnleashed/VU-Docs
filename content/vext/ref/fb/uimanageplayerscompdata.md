---
title: UIManagePlayersCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UIManagePlayersCompData()                                                          | Create a new instance of this container type.                                                                                         |
| UIManagePlayersCompData(UIManagePlayersCompData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UIManagePlayersCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIManagePlayersCompData](UIManagePlayersCompData).                  |
| UIManagePlayersCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIManagePlayersCompData](UIManagePlayersCompData).                                      |
| UIManagePlayersCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIManagePlayersCompData](UIManagePlayersCompData). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIManagePlayersCompData](UIManagePlayersCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIManagePlayersCompData](UIManagePlayersCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
