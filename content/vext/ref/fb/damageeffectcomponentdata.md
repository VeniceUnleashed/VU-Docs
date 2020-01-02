---
title: DamageEffectComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DamageEffectComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| DamageEffectComponentData(DamageEffectComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| DamageEffectComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [DamageEffectComponentData](DamageEffectComponentData).                      |
| DamageEffectComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DamageEffectComponentData](DamageEffectComponentData).                    |
| DamageEffectComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DamageEffectComponentData](DamageEffectComponentData).              |
| DamageEffectComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DamageEffectComponentData](DamageEffectComponentData). |

## Properties

| Name                               | Type                                             | Description |
| ---------------------------------- | ------------------------------------------------ | ----------- |
| rightDamage                        | [Vec4](/vext/ref/shared/class/Vec4)                |             |
| topDamage                          | [Vec4](/vext/ref/shared/class/Vec4)                |             |
| leftDamage                         | [Vec4](/vext/ref/shared/class/Vec4)                |             |
| bottomDamage                       | [Vec4](/vext/ref/shared/class/Vec4)                |             |
| outerFrameOpacity                  | number                                           |             |
| innerFrameOpacity                  | number                                           |             |
| frameWidth                         | number                                           |             |
| shader                             | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| startCriticalEffectHealthThreshold | number                                           |             |
| endCriticalEffectHealthThreshold   | number                                           |             |
| minDamagePercentageThreshold       | number                                           |             |
| fallofTime                         | number                                           |             |
| maxOpacityDamagePercentage         | number                                           |             |
| realm                              | [Realm](Realm)                                   |             |
| debugDamage                        | bool                                             |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DamageEffectComponentData](DamageEffectComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DamageEffectComponentData](DamageEffectComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
