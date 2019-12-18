---
title: PlayerInteractionViewData (Frostbite Container)
---
### Base Classes

[SubViewData](SubViewData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PlayerInteractionViewData()                                                          | Create a new instance of this container type.                                                                                             |
| PlayerInteractionViewData(PlayerInteractionViewData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PlayerInteractionViewData([SubViewData](SubViewData) other)                          | Upcast an instance of type [SubViewData](SubViewData) to [PlayerInteractionViewData](PlayerInteractionViewData).                          |
| PlayerInteractionViewData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PlayerInteractionViewData](PlayerInteractionViewData). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerInteractionViewData](PlayerInteractionViewData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PlayerInteractionViewData](PlayerInteractionViewData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
