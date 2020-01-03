---
title: AwardStarData
---
### Base Classes

[AwardData](/vext/ref/fb/awarddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AwardStarData()                                                          | Create a new instance of this container type.                                                                     |
| AwardStarData(AwardStarData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AwardStarData([AwardData](/vext/ref/fb/awarddata/) other)                              | Upcast an instance of type [AwardData](/vext/ref/fb/awarddata/) to [AwardStarData](/vext/ref/fb/awardstardata/).                              |
| AwardStarData([AbstractAwardData](/vext/ref/fb/abstractawarddata/) other)              | Upcast an instance of type [AbstractAwardData](/vext/ref/fb/abstractawarddata/) to [AwardStarData](/vext/ref/fb/awardstardata/).              |
| AwardStarData([TreeNodeBase](/vext/ref/fb/treenodebase/) other)                        | Upcast an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase/) to [AwardStarData](/vext/ref/fb/awardstardata/).                        |
| AwardStarData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AwardStarData](/vext/ref/fb/awardstardata/). |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| starTemplate | [AwardStarNameData](/vext/ref/fb/awardstarnamedata/) |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AwardStarData](/vext/ref/fb/awardstardata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AwardStarData](/vext/ref/fb/awardstardata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
