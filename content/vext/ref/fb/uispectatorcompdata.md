---
title: UISpectatorCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UISpectatorCompData()                                                          | Create a new instance of this container type.                                                                                 |
| UISpectatorCompData(UISpectatorCompData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UISpectatorCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UISpectatorCompData](UISpectatorCompData).                  |
| UISpectatorCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UISpectatorCompData](UISpectatorCompData).                                      |
| UISpectatorCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UISpectatorCompData](UISpectatorCompData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UISpectatorCompData](UISpectatorCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UISpectatorCompData](UISpectatorCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
