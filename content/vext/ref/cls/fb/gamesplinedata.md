---
title: GameSplineData (Frostbite Container)
---
### Base Classes

[CustomSplineData](CustomSplineData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| GameSplineData()                                                          | Create a new instance of this container type.                                                                       |
| GameSplineData(GameSplineData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| GameSplineData([CustomSplineData](CustomSplineData) other)                | Upcast an instance of type [CustomSplineData](CustomSplineData) to [GameSplineData](GameSplineData).                |
| GameSplineData([VectorShapeData](VectorShapeData) other)                  | Upcast an instance of type [VectorShapeData](VectorShapeData) to [GameSplineData](GameSplineData).                  |
| GameSplineData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [GameSplineData](GameSplineData).                      |
| GameSplineData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [GameSplineData](GameSplineData).                    |
| GameSplineData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [GameSplineData](GameSplineData).              |
| GameSplineData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GameSplineData](GameSplineData). |

## Properties

| Name       | Type                             | Description |
| ---------- | -------------------------------- | ----------- |
| splineType | [GameSplineType](GameSplineType) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [GameSplineData](GameSplineData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GameSplineData](GameSplineData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
