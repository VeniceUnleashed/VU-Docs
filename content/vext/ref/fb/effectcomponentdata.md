---
title: EffectComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EffectComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| EffectComponentData(EffectComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EffectComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [EffectComponentData](/vext/ref/fb/effectcomponentdata/).                      |
| EffectComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EffectComponentData](/vext/ref/fb/effectcomponentdata/).                    |
| EffectComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EffectComponentData](/vext/ref/fb/effectcomponentdata/).              |
| EffectComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EffectComponentData](/vext/ref/fb/effectcomponentdata/). |

## Properties

| Name               | Type                               | Description |
| ------------------ | ---------------------------------- | ----------- |
| effect             | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| emitterParameter1  | number                             |             |
| emitterParameter3  | number                             |             |
| emitterParameter2  | number                             |             |
| autoStart          | bool                               |             |
| snapToWaterSurface | bool                               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EffectComponentData](/vext/ref/fb/effectcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EffectComponentData](/vext/ref/fb/effectcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
