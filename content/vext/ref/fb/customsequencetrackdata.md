---
title: CustomSequenceTrackData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| CustomSequenceTrackData()                                                          | Create a new instance of this container type.                                                                                         |
| CustomSequenceTrackData(CustomSequenceTrackData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| CustomSequenceTrackData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CustomSequenceTrackData](CustomSequenceTrackData).                            |
| CustomSequenceTrackData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CustomSequenceTrackData](CustomSequenceTrackData).                    |
| CustomSequenceTrackData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CustomSequenceTrackData](CustomSequenceTrackData).              |
| CustomSequenceTrackData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomSequenceTrackData](CustomSequenceTrackData). |

## Properties

| Name                       | Type                                                                         | Description |
| -------------------------- | ---------------------------------------------------------------------------- | ----------- |
| trackName                  | string                                                                       |             |
| inputLinkMap               | [CustomSequenceTrackLinkMapping](CustomSequenceTrackLinkMapping)\[\]         |             |
| outputLinkMap              | [CustomSequenceTrackLinkMapping](CustomSequenceTrackLinkMapping)\[\]         |             |
| eventMap                   | [CustomSequenceTrackEventMapping](CustomSequenceTrackEventMapping)\[\]       |             |
| sourcePropertyMap          | [CustomSequenceTrackPropertyMapping](CustomSequenceTrackPropertyMapping)\[\] |             |
| targetPropertyMap          | [CustomSequenceTrackPropertyMapping](CustomSequenceTrackPropertyMapping)\[\] |             |
| sourceAndTargetPropertyMap | [CustomSequenceTrackPropertyMapping](CustomSequenceTrackPropertyMapping)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CustomSequenceTrackData](CustomSequenceTrackData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomSequenceTrackData](CustomSequenceTrackData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
