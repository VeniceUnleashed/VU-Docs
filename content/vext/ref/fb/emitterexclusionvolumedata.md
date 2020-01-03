---
title: EmitterExclusionVolumeData
---
### Base Classes

[OBBData](/vext/ref/fb/obbdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| EmitterExclusionVolumeData()                                                          | Create a new instance of this container type.                                                                                               |
| EmitterExclusionVolumeData(EmitterExclusionVolumeData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| EmitterExclusionVolumeData([OBBData](/vext/ref/fb/obbdata/) other)                                  | Upcast an instance of type [OBBData](/vext/ref/fb/obbdata/) to [EmitterExclusionVolumeData](/vext/ref/fb/emitterexclusionvolumedata/).                                  |
| EmitterExclusionVolumeData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [EmitterExclusionVolumeData](/vext/ref/fb/emitterexclusionvolumedata/).                      |
| EmitterExclusionVolumeData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EmitterExclusionVolumeData](/vext/ref/fb/emitterexclusionvolumedata/).                    |
| EmitterExclusionVolumeData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EmitterExclusionVolumeData](/vext/ref/fb/emitterexclusionvolumedata/).              |
| EmitterExclusionVolumeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EmitterExclusionVolumeData](/vext/ref/fb/emitterexclusionvolumedata/). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EmitterExclusionVolumeData](/vext/ref/fb/emitterexclusionvolumedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EmitterExclusionVolumeData](/vext/ref/fb/emitterexclusionvolumedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
