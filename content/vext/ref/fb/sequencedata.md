---
title: SequenceData
---
### Base Classes

[SequenceEntityData](/vext/ref/fb/sequenceentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| SequenceData()                                                          | Create a new instance of this container type.                                                                   |
| SequenceData(SequenceData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| SequenceData([SequenceEntityData](/vext/ref/fb/sequenceentitydata/) other)            | Upcast an instance of type [SequenceEntityData](/vext/ref/fb/sequenceentitydata/) to [SequenceData](/vext/ref/fb/sequencedata/).            |
| SequenceData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SequenceData](/vext/ref/fb/sequencedata/).                            |
| SequenceData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SequenceData](/vext/ref/fb/sequencedata/).                    |
| SequenceData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SequenceData](/vext/ref/fb/sequencedata/).              |
| SequenceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SequenceData](/vext/ref/fb/sequencedata/). |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [SequenceData](/vext/ref/fb/sequencedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SequenceData](/vext/ref/fb/sequencedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
