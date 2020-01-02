---
title: SenseTerrainSphereData
---
### Base Classes

[SphereData](SphereData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SenseTerrainSphereData()                                                          | Create a new instance of this container type.                                                                                       |
| SenseTerrainSphereData(SenseTerrainSphereData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SenseTerrainSphereData([SphereData](SphereData) other)                            | Upcast an instance of type [SphereData](SphereData) to [SenseTerrainSphereData](SenseTerrainSphereData).                            |
| SenseTerrainSphereData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [SenseTerrainSphereData](SenseTerrainSphereData).                      |
| SenseTerrainSphereData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SenseTerrainSphereData](SenseTerrainSphereData).                    |
| SenseTerrainSphereData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SenseTerrainSphereData](SenseTerrainSphereData).              |
| SenseTerrainSphereData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SenseTerrainSphereData](SenseTerrainSphereData). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SenseTerrainSphereData](SenseTerrainSphereData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SenseTerrainSphereData](SenseTerrainSphereData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
