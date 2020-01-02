---
title: MaterialPropertyImpulseData
---
### Base Classes

[PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                   | Description                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialPropertyImpulseData()                                                                                 | Create a new instance of this container type.                                                                                                                        |
| MaterialPropertyImpulseData(MaterialPropertyImpulseData other)                                                | Create a reference copy of an instance of the same type.                                                                                                             |
| MaterialPropertyImpulseData([PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData) other) | Upcast an instance of type [PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData) to [MaterialPropertyImpulseData](MaterialPropertyImpulseData). |
| MaterialPropertyImpulseData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialPropertyImpulseData](MaterialPropertyImpulseData).               |
| MaterialPropertyImpulseData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialPropertyImpulseData](MaterialPropertyImpulseData).                        |

## Properties

| Name                        | Type   | Description |
| --------------------------- | ------ | ----------- |
| impulseAbsorptionMultiplier | number |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialPropertyImpulseData](MaterialPropertyImpulseData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialPropertyImpulseData](MaterialPropertyImpulseData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
