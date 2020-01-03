---
title: PlayerViewData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| PlayerViewData()                                                          | Create a new instance of this container type.                                                                       |
| PlayerViewData(PlayerViewData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| PlayerViewData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerViewData](/vext/ref/fb/playerviewdata/). |

## Properties

| Name     | Type                           | Description |
| -------- | ------------------------------ | ----------- |
| subViews | [SubViewData](/vext/ref/fb/subviewdata/)\[\] |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [PlayerViewData](/vext/ref/fb/playerviewdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerViewData](/vext/ref/fb/playerviewdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
