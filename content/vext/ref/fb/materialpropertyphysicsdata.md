---
title: MaterialPropertyPhysicsData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                   | Description                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialPropertyPhysicsData()                                                                                 | Create a new instance of this container type.                                                                                                                        |
| MaterialPropertyPhysicsData(MaterialPropertyPhysicsData other)                                                | Create a reference copy of an instance of the same type.                                                                                                             |
| MaterialPropertyPhysicsData([PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) to [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata/). |
| MaterialPropertyPhysicsData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata/).               |
| MaterialPropertyPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata/).                        |

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
| [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialPropertyPhysicsData](/vext/ref/fb/materialpropertyphysicsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
