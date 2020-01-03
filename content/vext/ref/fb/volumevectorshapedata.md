---
title: VolumeVectorShapeData
---
### Base Classes

[VectorShapeData](/vext/ref/fb/vectorshapedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VolumeVectorShapeData()                                                          | Create a new instance of this container type.                                                                                     |
| VolumeVectorShapeData(VolumeVectorShapeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VolumeVectorShapeData([VectorShapeData](/vext/ref/fb/vectorshapedata/) other)                  | Upcast an instance of type [VectorShapeData](/vext/ref/fb/vectorshapedata/) to [VolumeVectorShapeData](/vext/ref/fb/volumevectorshapedata/).                  |
| VolumeVectorShapeData([BaseShapeData](/vext/ref/fb/baseshapedata/) other)                      | Upcast an instance of type [BaseShapeData](/vext/ref/fb/baseshapedata/) to [VolumeVectorShapeData](/vext/ref/fb/volumevectorshapedata/).                      |
| VolumeVectorShapeData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VolumeVectorShapeData](/vext/ref/fb/volumevectorshapedata/).                    |
| VolumeVectorShapeData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VolumeVectorShapeData](/vext/ref/fb/volumevectorshapedata/).              |
| VolumeVectorShapeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VolumeVectorShapeData](/vext/ref/fb/volumevectorshapedata/). |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| height | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VolumeVectorShapeData](/vext/ref/fb/volumevectorshapedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VolumeVectorShapeData](/vext/ref/fb/volumevectorshapedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
