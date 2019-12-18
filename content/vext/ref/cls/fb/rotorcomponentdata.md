---
title: RotorComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| RotorComponentData()                                                          | Create a new instance of this container type.                                                                               |
| RotorComponentData(RotorComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| RotorComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [RotorComponentData](RotorComponentData).                      |
| RotorComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RotorComponentData](RotorComponentData).                    |
| RotorComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RotorComponentData](RotorComponentData).              |
| RotorComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RotorComponentData](RotorComponentData). |

## Properties

| Name                           | Type                               | Description |
| ------------------------------ | ---------------------------------- | ----------- |
| lowRpmModel                    | [RotorModelData](RotorModelData)   |             |
| highRpmModel                   | [RotorModelData](RotorModelData)   |             |
| rotationAxis                   | [RotationAxis](RotationAxis)       |             |
| rotationMultiplier             | number                             |             |
| changeModelRpm                 | number                             |             |
| blowEffect                     | [EffectBlueprint](EffectBlueprint) |             |
| triggerGroundEffectHeight      | number                             |             |
| criticallyDamagedRotationForce | number                             |             |
| onlyTriggerBlowEffectInWater   | bool                               |             |
| groundEffectOnTerrainOnly      | bool                               |             |
| criticalDamage                 | bool                               |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [RotorComponentData](RotorComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RotorComponentData](RotorComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
