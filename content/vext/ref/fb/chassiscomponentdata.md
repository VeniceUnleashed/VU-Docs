---
title: ChassisComponentData
---
### Base Classes

[PartComponentData](PartComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ChassisComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| ChassisComponentData(ChassisComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ChassisComponentData([PartComponentData](PartComponentData) other)              | Upcast an instance of type [PartComponentData](PartComponentData) to [ChassisComponentData](ChassisComponentData).              |
| ChassisComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [ChassisComponentData](ChassisComponentData).                      |
| ChassisComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ChassisComponentData](ChassisComponentData).                    |
| ChassisComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ChassisComponentData](ChassisComponentData).              |
| ChassisComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChassisComponentData](ChassisComponentData). |

## Properties

| Name                       | Type                                                 | Description |
| -------------------------- | ---------------------------------------------------- | ----------- |
| vehicleConfig              | [VehicleConfigData](VehicleConfigData)               |             |
| gearboxConfig              | [GearboxConfigData](GearboxConfigData)               |             |
| waterStreakEffects         | [VehicleWaterEffectData](VehicleWaterEffectData)\[\] |             |
| waterEffects               | [VehicleWaterEffectData](VehicleWaterEffectData)\[\] |             |
| triggerGroundEffectImpulse | number                                               |             |
| landingGearLogic           | [LandingGearLogicData](LandingGearLogicData)         |             |
| alwaysFullThrottle         | bool                                                 |             |
| forceLandingGearsRetract   | bool                                                 |             |
| allowNegativeThrottle      | bool                                                 |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ChassisComponentData](ChassisComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChassisComponentData](ChassisComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
