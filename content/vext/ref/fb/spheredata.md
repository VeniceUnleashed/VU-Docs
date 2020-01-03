---
title: SphereData
---
### Base Classes

[BaseShapeData](BaseShapeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| SphereData()                                                          | Create a new instance of this container type.                                                               |
| SphereData(SphereData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| SphereData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [SphereData](SphereData).                      |
| SphereData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SphereData](SphereData).                    |
| SphereData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SphereData](SphereData).              |
| SphereData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SphereData](SphereData). |

## Properties

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| position | [Vec3](/vext/ref/shared/class/Vec3) |             |
| radius   | number                            |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [SphereData](SphereData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SphereData](SphereData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
