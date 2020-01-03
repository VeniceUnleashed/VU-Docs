---
title: MaterialRelationVehicleData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                   | Description                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialRelationVehicleData()                                                                                 | Create a new instance of this container type.                                                                                                                        |
| MaterialRelationVehicleData(MaterialRelationVehicleData other)                                                | Create a reference copy of an instance of the same type.                                                                                                             |
| MaterialRelationVehicleData([PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) to [MaterialRelationVehicleData](/vext/ref/fb/materialrelationvehicledata/). |
| MaterialRelationVehicleData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialRelationVehicleData](/vext/ref/fb/materialrelationvehicledata/).               |
| MaterialRelationVehicleData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationVehicleData](/vext/ref/fb/materialrelationvehicledata/).                        |

## Properties

| Name         | Type                               | Description |
| ------------ | ---------------------------------- | ----------- |
| chassiEffect | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| trackEffect  | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| wheelEffect  | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| groundEffect | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialRelationVehicleData](/vext/ref/fb/materialrelationvehicledata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialRelationVehicleData](/vext/ref/fb/materialrelationvehicledata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
