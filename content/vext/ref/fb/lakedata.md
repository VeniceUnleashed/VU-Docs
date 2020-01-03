---
title: LakeData
---
### Base Classes

[VisualVectorShapeData](VisualVectorShapeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                         | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| LakeData()                                                          | Create a new instance of this container type.                                                           |
| LakeData(LakeData other)                                            | Create a reference copy of an instance of the same type.                                                |
| LakeData([VisualVectorShapeData](VisualVectorShapeData) other)      | Upcast an instance of type [VisualVectorShapeData](VisualVectorShapeData) to [LakeData](LakeData).      |
| LakeData([VectorShapeData](VectorShapeData) other)                  | Upcast an instance of type [VectorShapeData](VectorShapeData) to [LakeData](LakeData).                  |
| LakeData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [LakeData](LakeData).                      |
| LakeData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LakeData](LakeData).                    |
| LakeData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LakeData](LakeData).              |
| LakeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LakeData](LakeData). |

## Methods

| Type                 | Name            | Parameters                                     |
| -------------------- | --------------- | ---------------------------------------------- |
| [LakeData](LakeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LakeData](LakeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
