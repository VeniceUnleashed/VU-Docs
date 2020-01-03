---
title: ChassisComponentData
---
### Base Classes

[PartComponentData](/vext/ref/fb/partcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ChassisComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| ChassisComponentData(ChassisComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ChassisComponentData([PartComponentData](/vext/ref/fb/partcomponentdata/) other)              | Upcast an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata/) to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata/).              |
| ChassisComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata/).                      |
| ChassisComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata/).                    |
| ChassisComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata/).              |
| ChassisComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata/). |

## Properties

| Name                       | Type                                                 | Description |
| -------------------------- | ---------------------------------------------------- | ----------- |
| vehicleConfig              | [VehicleConfigData](/vext/ref/fb/vehicleconfigdata/)               |             |
| gearboxConfig              | [GearboxConfigData](/vext/ref/fb/gearboxconfigdata/)               |             |
| waterStreakEffects         | [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata/)\[\] |             |
| waterEffects               | [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata/)\[\] |             |
| triggerGroundEffectImpulse | number                                               |             |
| landingGearLogic           | [LandingGearLogicData](/vext/ref/fb/landinggearlogicdata/)         |             |
| alwaysFullThrottle         | bool                                                 |             |
| forceLandingGearsRetract   | bool                                                 |             |
| allowNegativeThrottle      | bool                                                 |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ChassisComponentData](/vext/ref/fb/chassiscomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChassisComponentData](/vext/ref/fb/chassiscomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
