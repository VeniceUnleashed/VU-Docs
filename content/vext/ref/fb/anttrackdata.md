---
title: AntTrackData
---
### Base Classes

[CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| AntTrackData()                                                          | Create a new instance of this container type.                                                                   |
| AntTrackData(AntTrackData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| AntTrackData([CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata/) other)  | Upcast an instance of type [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata/) to [AntTrackData](/vext/ref/fb/anttrackdata/).  |
| AntTrackData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AntTrackData](/vext/ref/fb/anttrackdata/).                            |
| AntTrackData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AntTrackData](/vext/ref/fb/anttrackdata/).                    |
| AntTrackData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AntTrackData](/vext/ref/fb/anttrackdata/).              |
| AntTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntTrackData](/vext/ref/fb/anttrackdata/). |

## Properties

| Name              | Type                                     | Description |
| ----------------- | ---------------------------------------- | ----------- |
| antTrackItemDatas | [AntTrackItemData](/vext/ref/fb/anttrackitemdata/)\[\] |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [AntTrackData](/vext/ref/fb/anttrackdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntTrackData](/vext/ref/fb/anttrackdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
