---
title: EffectAsset
---
### Base Classes

[EffectBlueprint](/vext/ref/fb/effectblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| EffectAsset()                                                          | Create a new instance of this container type.                                                                 |
| EffectAsset(EffectAsset other)                                         | Create a reference copy of an instance of the same type.                                                      |
| EffectAsset([EffectBlueprint](/vext/ref/fb/effectblueprint/) other)                  | Upcast an instance of type [EffectBlueprint](/vext/ref/fb/effectblueprint/) to [EffectAsset](/vext/ref/fb/effectasset/).                  |
| EffectAsset([ObjectBlueprint](/vext/ref/fb/objectblueprint/) other)                  | Upcast an instance of type [ObjectBlueprint](/vext/ref/fb/objectblueprint/) to [EffectAsset](/vext/ref/fb/effectasset/).                  |
| EffectAsset([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [EffectAsset](/vext/ref/fb/effectasset/).                              |
| EffectAsset([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [EffectAsset](/vext/ref/fb/effectasset/).                      |
| EffectAsset([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [EffectAsset](/vext/ref/fb/effectasset/).                          |
| EffectAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [EffectAsset](/vext/ref/fb/effectasset/).                                      |
| EffectAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EffectAsset](/vext/ref/fb/effectasset/). |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [EffectAsset](/vext/ref/fb/effectasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EffectAsset](/vext/ref/fb/effectasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
