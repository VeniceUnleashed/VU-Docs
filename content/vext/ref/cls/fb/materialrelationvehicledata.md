---
title: MaterialRelationVehicleData (Frostbite Container)
---
### Base Classes

[PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                   | Description                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialRelationVehicleData()                                                                                 | Create a new instance of this container type.                                                                                                                        |
| MaterialRelationVehicleData(MaterialRelationVehicleData other)                                                | Create a reference copy of an instance of the same type.                                                                                                             |
| MaterialRelationVehicleData([PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) to [MaterialRelationVehicleData](MaterialRelationVehicleData). |
| MaterialRelationVehicleData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialRelationVehicleData](MaterialRelationVehicleData).               |
| MaterialRelationVehicleData([DataContainer](/vext/ref/cls/shr/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MaterialRelationVehicleData](MaterialRelationVehicleData).                        |

## Properties

| Name         | Type                               | Description |
| ------------ | ---------------------------------- | ----------- |
| chassiEffect | [EffectBlueprint](EffectBlueprint) |             |
| trackEffect  | [EffectBlueprint](EffectBlueprint) |             |
| wheelEffect  | [EffectBlueprint](EffectBlueprint) |             |
| groundEffect | [EffectBlueprint](EffectBlueprint) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialRelationVehicleData](MaterialRelationVehicleData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MaterialRelationVehicleData](MaterialRelationVehicleData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
