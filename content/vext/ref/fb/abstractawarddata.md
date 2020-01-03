---
title: AbstractAwardData
---
### Base Classes

[TreeNodeBase](/vext/ref/fb/treenodebase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AbstractAwardData()                                                          | Create a new instance of this container type.                                                                             |
| AbstractAwardData(AbstractAwardData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| AbstractAwardData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [AbstractAwardData](/vext/ref/fb/abstractawarddata/).                        |
| AbstractAwardData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AbstractAwardData](/vext/ref/fb/abstractawarddata/). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [AbstractAwardData](/vext/ref/fb/abstractawarddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AbstractAwardData](/vext/ref/fb/abstractawarddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
