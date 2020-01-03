---
title: SpectatorSubViewData
---
### Base Classes

[SubViewData](/vext/ref/fb/subviewdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SpectatorSubViewData()                                                          | Create a new instance of this container type.                                                                                   |
| SpectatorSubViewData(SpectatorSubViewData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SpectatorSubViewData([SubViewData](/vext/ref/fb/subviewdata/) other)                          | Upcast an instance of type [SubViewData](/vext/ref/fb/subviewdata/) to [SpectatorSubViewData](/vext/ref/fb/spectatorsubviewdata/).                          |
| SpectatorSubViewData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpectatorSubViewData](/vext/ref/fb/spectatorsubviewdata/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpectatorSubViewData](/vext/ref/fb/spectatorsubviewdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpectatorSubViewData](/vext/ref/fb/spectatorsubviewdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
