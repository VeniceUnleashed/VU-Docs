---
title: SequenceEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SequenceEntityData()                                                          | Create a new instance of this container type.                                                                               |
| SequenceEntityData(SequenceEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SequenceEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SequenceEntityData](/vext/ref/fb/sequenceentitydata/).                            |
| SequenceEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SequenceEntityData](/vext/ref/fb/sequenceentitydata/).                    |
| SequenceEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SequenceEntityData](/vext/ref/fb/sequenceentitydata/).              |
| SequenceEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SequenceEntityData](/vext/ref/fb/sequenceentitydata/). |

## Properties

| Name                 | Type                                                   | Description |
| -------------------- | ------------------------------------------------------ | ----------- |
| events               | [SequenceEventData](/vext/ref/fb/sequenceeventdata/)\[\]             |             |
| sequenceStartTime    | number                                                 |             |
| sequenceLength       | number                                                 |             |
| externalTime         | number                                                 |             |
| propertyTracks       | [PropertyTrackData](/vext/ref/fb/propertytrackdata/)\[\]             |             |
| realm                | [Realm](/vext/ref/fb/realm/)                                         |             |
| serverUpdatePass     | [UpdatePass](/vext/ref/fb/updatepass/)                               |             |
| clientUpdatePass     | [UpdatePass](/vext/ref/fb/updatepass/)                               |             |
| customSequenceTracks | [CustomSequenceTrackData](/vext/ref/fb/customsequencetrackdata/)\[\] |             |
| autoPlayFirstFrame   | bool                                                   |             |
| looping              | bool                                                   |             |
| autoStart            | bool                                                   |             |
| playInReverse        | bool                                                   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SequenceEntityData](/vext/ref/fb/sequenceentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SequenceEntityData](/vext/ref/fb/sequenceentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
