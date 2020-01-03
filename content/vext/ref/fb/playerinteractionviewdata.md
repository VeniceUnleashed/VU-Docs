---
title: PlayerInteractionViewData
---
### Base Classes

[SubViewData](/vext/ref/fb/subviewdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PlayerInteractionViewData()                                                          | Create a new instance of this container type.                                                                                             |
| PlayerInteractionViewData(PlayerInteractionViewData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PlayerInteractionViewData([SubViewData](/vext/ref/fb/subviewdata/) other)                          | Upcast an instance of type [SubViewData](/vext/ref/fb/subviewdata/) to [PlayerInteractionViewData](/vext/ref/fb/playerinteractionviewdata/).                          |
| PlayerInteractionViewData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerInteractionViewData](/vext/ref/fb/playerinteractionviewdata/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerInteractionViewData](/vext/ref/fb/playerinteractionviewdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerInteractionViewData](/vext/ref/fb/playerinteractionviewdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
