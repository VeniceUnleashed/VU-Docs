---
title: AbstractAwardData (Frostbite Container)
---
### Base Classes

[TreeNodeBase](TreeNodeBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AbstractAwardData()                                                          | Create a new instance of this container type.                                                                             |
| AbstractAwardData(AbstractAwardData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| AbstractAwardData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [AbstractAwardData](AbstractAwardData).                        |
| AbstractAwardData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AbstractAwardData](AbstractAwardData). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [AbstractAwardData](AbstractAwardData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AbstractAwardData](AbstractAwardData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
