---
title: MaterialRelationSoundData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                 | Description                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialRelationSoundData()                                                                                 | Create a new instance of this container type.                                                                                                                    |
| MaterialRelationSoundData(MaterialRelationSoundData other)                                                  | Create a reference copy of an instance of the same type.                                                                                                         |
| MaterialRelationSoundData([PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) to [MaterialRelationSoundData](MaterialRelationSoundData). |
| MaterialRelationSoundData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialRelationSoundData](MaterialRelationSoundData).               |
| MaterialRelationSoundData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationSoundData](MaterialRelationSoundData).                        |

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| impactSound  | [SoundAsset](SoundAsset) |             |
| scrapeSound  | [SoundAsset](SoundAsset) |             |
| scrapeLength | number                   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialRelationSoundData](MaterialRelationSoundData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialRelationSoundData](MaterialRelationSoundData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
