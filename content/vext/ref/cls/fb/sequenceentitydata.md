---
title: SequenceEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SequenceEntityData()                                                          | Create a new instance of this container type.                                                                               |
| SequenceEntityData(SequenceEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SequenceEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SequenceEntityData](SequenceEntityData).                            |
| SequenceEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SequenceEntityData](SequenceEntityData).                    |
| SequenceEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SequenceEntityData](SequenceEntityData).              |
| SequenceEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SequenceEntityData](SequenceEntityData). |

## Properties

| Name                 | Type                                                   | Description |
| -------------------- | ------------------------------------------------------ | ----------- |
| events               | [SequenceEventData](SequenceEventData)\[\]             |             |
| sequenceStartTime    | number                                                 |             |
| sequenceLength       | number                                                 |             |
| externalTime         | number                                                 |             |
| propertyTracks       | [PropertyTrackData](PropertyTrackData)\[\]             |             |
| realm                | [Realm](Realm)                                         |             |
| serverUpdatePass     | [UpdatePass](UpdatePass)                               |             |
| clientUpdatePass     | [UpdatePass](UpdatePass)                               |             |
| customSequenceTracks | [CustomSequenceTrackData](CustomSequenceTrackData)\[\] |             |
| autoPlayFirstFrame   | bool                                                   |             |
| looping              | bool                                                   |             |
| autoStart            | bool                                                   |             |
| playInReverse        | bool                                                   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SequenceEntityData](SequenceEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SequenceEntityData](SequenceEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
