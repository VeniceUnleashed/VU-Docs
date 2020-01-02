---
title: MaterialRelationTerrainDestructionData
---
### Base Classes

[PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                              | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MaterialRelationTerrainDestructionData()                                                                                 | Create a new instance of this container type.                                                                                                                                              |
| MaterialRelationTerrainDestructionData(MaterialRelationTerrainDestructionData other)                                     | Create a reference copy of an instance of the same type.                                                                                                                                   |
| MaterialRelationTerrainDestructionData([PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData) other) | Upcast an instance of type [PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData) to [MaterialRelationTerrainDestructionData](MaterialRelationTerrainDestructionData). |
| MaterialRelationTerrainDestructionData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialRelationTerrainDestructionData](MaterialRelationTerrainDestructionData).               |
| MaterialRelationTerrainDestructionData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationTerrainDestructionData](MaterialRelationTerrainDestructionData).                        |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| width | number |             |
| depth | number |             |

## Methods

| Type                                                                             | Name            | Parameters                                     |
| -------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialRelationTerrainDestructionData](MaterialRelationTerrainDestructionData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialRelationTerrainDestructionData](MaterialRelationTerrainDestructionData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
