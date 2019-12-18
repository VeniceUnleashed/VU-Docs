---
title: MaterialPropertySoundData (Frostbite Container)
---
### Base Classes

[PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                 | Description                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialPropertySoundData()                                                                                 | Create a new instance of this container type.                                                                                                                    |
| MaterialPropertySoundData(MaterialPropertySoundData other)                                                  | Create a reference copy of an instance of the same type.                                                                                                         |
| MaterialPropertySoundData([PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) to [MaterialPropertySoundData](MaterialPropertySoundData). |
| MaterialPropertySoundData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialPropertySoundData](MaterialPropertySoundData).               |
| MaterialPropertySoundData([DataContainer](/vext/ref/cls/shr/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MaterialPropertySoundData](MaterialPropertySoundData).                        |

## Properties

| Name            | Type                                                         | Description |
| --------------- | ------------------------------------------------------------ | ----------- |
| impactSound     | [SoundAsset](SoundAsset)                                     |             |
| scrapeSound     | [SoundAsset](SoundAsset)                                     |             |
| scrapeLength    | number                                                       |             |
| soldierSettings | [MaterialSoldierSoundSettings](MaterialSoldierSoundSettings) |             |
| softness        | number                                                       |             |
| materialSoundId | number                                                       |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialPropertySoundData](MaterialPropertySoundData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MaterialPropertySoundData](MaterialPropertySoundData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
