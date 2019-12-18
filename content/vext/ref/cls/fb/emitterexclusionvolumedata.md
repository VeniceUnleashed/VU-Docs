---
title: EmitterExclusionVolumeData (Frostbite Container)
---
### Base Classes

[OBBData](OBBData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| EmitterExclusionVolumeData()                                                          | Create a new instance of this container type.                                                                                               |
| EmitterExclusionVolumeData(EmitterExclusionVolumeData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| EmitterExclusionVolumeData([OBBData](OBBData) other)                                  | Upcast an instance of type [OBBData](OBBData) to [EmitterExclusionVolumeData](EmitterExclusionVolumeData).                                  |
| EmitterExclusionVolumeData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [EmitterExclusionVolumeData](EmitterExclusionVolumeData).                      |
| EmitterExclusionVolumeData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EmitterExclusionVolumeData](EmitterExclusionVolumeData).                    |
| EmitterExclusionVolumeData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EmitterExclusionVolumeData](EmitterExclusionVolumeData).              |
| EmitterExclusionVolumeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EmitterExclusionVolumeData](EmitterExclusionVolumeData). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EmitterExclusionVolumeData](EmitterExclusionVolumeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EmitterExclusionVolumeData](EmitterExclusionVolumeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
