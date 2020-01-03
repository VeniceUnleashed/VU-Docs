---
title: MaterialRelationTerrainDestructionData
---
### Base Classes

[PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                              | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MaterialRelationTerrainDestructionData()                                                                                 | Create a new instance of this container type.                                                                                                                                              |
| MaterialRelationTerrainDestructionData(MaterialRelationTerrainDestructionData other)                                     | Create a reference copy of an instance of the same type.                                                                                                                                   |
| MaterialRelationTerrainDestructionData([PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) other) | Upcast an instance of type [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) to [MaterialRelationTerrainDestructionData](/vext/ref/fb/materialrelationterraindestructiondata/). |
| MaterialRelationTerrainDestructionData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialRelationTerrainDestructionData](/vext/ref/fb/materialrelationterraindestructiondata/).               |
| MaterialRelationTerrainDestructionData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationTerrainDestructionData](/vext/ref/fb/materialrelationterraindestructiondata/).                        |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| width | number |             |
| depth | number |             |

## Methods

| Type                                                                             | Name            | Parameters                                     |
| -------------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialRelationTerrainDestructionData](/vext/ref/fb/materialrelationterraindestructiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialRelationTerrainDestructionData](/vext/ref/fb/materialrelationterraindestructiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
