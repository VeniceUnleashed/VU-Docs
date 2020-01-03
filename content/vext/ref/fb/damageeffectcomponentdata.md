---
title: DamageEffectComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DamageEffectComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| DamageEffectComponentData(DamageEffectComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| DamageEffectComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata/).                      |
| DamageEffectComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata/).                    |
| DamageEffectComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata/).              |
| DamageEffectComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata/). |

## Properties

| Name                               | Type                                             | Description |
| ---------------------------------- | ------------------------------------------------ | ----------- |
| rightDamage                        | [Vec4](/vext/ref/shared/class/vec4)                |             |
| topDamage                          | [Vec4](/vext/ref/shared/class/vec4)                |             |
| leftDamage                         | [Vec4](/vext/ref/shared/class/vec4)                |             |
| bottomDamage                       | [Vec4](/vext/ref/shared/class/vec4)                |             |
| outerFrameOpacity                  | number                                           |             |
| innerFrameOpacity                  | number                                           |             |
| frameWidth                         | number                                           |             |
| shader                             | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| startCriticalEffectHealthThreshold | number                                           |             |
| endCriticalEffectHealthThreshold   | number                                           |             |
| minDamagePercentageThreshold       | number                                           |             |
| fallofTime                         | number                                           |             |
| maxOpacityDamagePercentage         | number                                           |             |
| realm                              | [Realm](/vext/ref/fb/realm/)                                   |             |
| debugDamage                        | bool                                             |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DamageEffectComponentData](/vext/ref/fb/damageeffectcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
