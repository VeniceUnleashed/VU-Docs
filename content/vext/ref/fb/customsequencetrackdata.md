---
title: CustomSequenceTrackData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| CustomSequenceTrackData()                                                          | Create a new instance of this container type.                                                                                         |
| CustomSequenceTrackData(CustomSequenceTrackData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| CustomSequenceTrackData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata/).                            |
| CustomSequenceTrackData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata/).                    |
| CustomSequenceTrackData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata/).              |
| CustomSequenceTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata/). |

## Properties

| Name                       | Type                                                                         | Description |
| -------------------------- | ---------------------------------------------------------------------------- | ----------- |
| trackName                  | string                                                                       |             |
| inputLinkMap               | [CustomSequenceTrackLinkMapping](/vext/ref/fb/customsequencetracklinkmapping/)\[\]         |             |
| outputLinkMap              | [CustomSequenceTrackLinkMapping](/vext/ref/fb/customsequencetracklinkmapping/)\[\]         |             |
| eventMap                   | [CustomSequenceTrackEventMapping](/vext/ref/fb/customsequencetrackeventmapping/)\[\]       |             |
| sourcePropertyMap          | [CustomSequenceTrackPropertyMapping](/vext/ref/fb/customsequencetrackpropertymapping/)\[\] |             |
| targetPropertyMap          | [CustomSequenceTrackPropertyMapping](/vext/ref/fb/customsequencetrackpropertymapping/)\[\] |             |
| sourceAndTargetPropertyMap | [CustomSequenceTrackPropertyMapping](/vext/ref/fb/customsequencetrackpropertymapping/)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
