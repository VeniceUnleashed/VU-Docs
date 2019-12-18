---
title: OBBData (Frostbite Container)
---
### Base Classes

[BaseShapeData](BaseShapeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                        | Description                                                                                           |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| OBBData()                                                          | Create a new instance of this container type.                                                         |
| OBBData(OBBData other)                                             | Create a reference copy of an instance of the same type.                                              |
| OBBData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [OBBData](OBBData).                      |
| OBBData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [OBBData](OBBData).                    |
| OBBData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [OBBData](OBBData).              |
| OBBData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [OBBData](OBBData). |

## Properties

| Name        | Type                                                    | Description |
| ----------- | ------------------------------------------------------- | ----------- |
| transform   | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |
| halfExtents | [Vec3](/vext/ref/cls/shr/Vec3)                       |             |

## Methods

| Type               | Name            | Parameters                                     |
| ------------------ | --------------- | ---------------------------------------------- |
| [OBBData](OBBData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [OBBData](OBBData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
