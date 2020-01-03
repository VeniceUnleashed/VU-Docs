---
title: RotorComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| RotorComponentData()                                                          | Create a new instance of this container type.                                                                               |
| RotorComponentData(RotorComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| RotorComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [RotorComponentData](/vext/ref/fb/rotorcomponentdata/).                      |
| RotorComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RotorComponentData](/vext/ref/fb/rotorcomponentdata/).                    |
| RotorComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RotorComponentData](/vext/ref/fb/rotorcomponentdata/).              |
| RotorComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RotorComponentData](/vext/ref/fb/rotorcomponentdata/). |

## Properties

| Name                           | Type                               | Description |
| ------------------------------ | ---------------------------------- | ----------- |
| lowRpmModel                    | [RotorModelData](/vext/ref/fb/rotormodeldata/)   |             |
| highRpmModel                   | [RotorModelData](/vext/ref/fb/rotormodeldata/)   |             |
| rotationAxis                   | [RotationAxis](/vext/ref/fb/rotationaxis/)       |             |
| rotationMultiplier             | number                             |             |
| changeModelRpm                 | number                             |             |
| blowEffect                     | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| triggerGroundEffectHeight      | number                             |             |
| criticallyDamagedRotationForce | number                             |             |
| onlyTriggerBlowEffectInWater   | bool                               |             |
| groundEffectOnTerrainOnly      | bool                               |             |
| criticalDamage                 | bool                               |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [RotorComponentData](/vext/ref/fb/rotorcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RotorComponentData](/vext/ref/fb/rotorcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
