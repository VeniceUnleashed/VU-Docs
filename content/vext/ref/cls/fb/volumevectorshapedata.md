---
title: VolumeVectorShapeData (Frostbite Container)
---
### Base Classes

[VectorShapeData](VectorShapeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VolumeVectorShapeData()                                                          | Create a new instance of this container type.                                                                                     |
| VolumeVectorShapeData(VolumeVectorShapeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VolumeVectorShapeData([VectorShapeData](VectorShapeData) other)                  | Upcast an instance of type [VectorShapeData](VectorShapeData) to [VolumeVectorShapeData](VolumeVectorShapeData).                  |
| VolumeVectorShapeData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [VolumeVectorShapeData](VolumeVectorShapeData).                      |
| VolumeVectorShapeData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VolumeVectorShapeData](VolumeVectorShapeData).                    |
| VolumeVectorShapeData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VolumeVectorShapeData](VolumeVectorShapeData).              |
| VolumeVectorShapeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VolumeVectorShapeData](VolumeVectorShapeData). |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| height | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VolumeVectorShapeData](VolumeVectorShapeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VolumeVectorShapeData](VolumeVectorShapeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
