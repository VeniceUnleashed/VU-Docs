---
title: VectorShapeData
---
### Base Classes

[BaseShapeData](BaseShapeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| VectorShapeData()                                                          | Create a new instance of this container type.                                                                         |
| VectorShapeData(VectorShapeData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| VectorShapeData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [VectorShapeData](VectorShapeData).                      |
| VectorShapeData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VectorShapeData](VectorShapeData).                    |
| VectorShapeData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VectorShapeData](VectorShapeData).              |
| VectorShapeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VectorShapeData](VectorShapeData). |

## Properties

| Name      | Type                                  | Description |
| --------- | ------------------------------------- | ----------- |
| points    | [Vec3](/vext/ref/shared/class/Vec3)\[\] |             |
| normals   | [Vec3](/vext/ref/shared/class/Vec3)\[\] |             |
| tension   | number                                |             |
| isClosed  | bool                                  |             |
| allowRoll | bool                                  |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [VectorShapeData](VectorShapeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VectorShapeData](VectorShapeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
