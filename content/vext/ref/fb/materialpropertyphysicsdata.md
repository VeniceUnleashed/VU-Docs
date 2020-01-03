---
title: MaterialPropertyPhysicsData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                   | Description                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialPropertyPhysicsData()                                                                                 | Create a new instance of this container type.                                                                                                                        |
| MaterialPropertyPhysicsData(MaterialPropertyPhysicsData other)                                                | Create a reference copy of an instance of the same type.                                                                                                             |
| MaterialPropertyPhysicsData([PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) to [MaterialPropertyPhysicsData](MaterialPropertyPhysicsData). |
| MaterialPropertyPhysicsData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialPropertyPhysicsData](MaterialPropertyPhysicsData).               |
| MaterialPropertyPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialPropertyPhysicsData](MaterialPropertyPhysicsData).                        |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| dynamicFrictionModifier | number |             |
| staticFrictionModifier  | number |             |
| restitutionModifier     | number |             |
| resistance              | number |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialPropertyPhysicsData](MaterialPropertyPhysicsData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialPropertyPhysicsData](MaterialPropertyPhysicsData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
