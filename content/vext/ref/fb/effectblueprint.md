---
title: EffectBlueprint
---
### Base Classes

[ObjectBlueprint](/vext/ref/fb/objectblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| EffectBlueprint()                                                          | Create a new instance of this container type.                                                                         |
| EffectBlueprint(EffectBlueprint other)                                     | Create a reference copy of an instance of the same type.                                                              |
| EffectBlueprint([ObjectBlueprint](/vext/ref/fb/objectblueprint/) other)                  | Upcast an instance of type [ObjectBlueprint](/vext/ref/fb/objectblueprint/) to [EffectBlueprint](/vext/ref/fb/effectblueprint/).                  |
| EffectBlueprint([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [EffectBlueprint](/vext/ref/fb/effectblueprint/).                              |
| EffectBlueprint([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [EffectBlueprint](/vext/ref/fb/effectblueprint/).                      |
| EffectBlueprint([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [EffectBlueprint](/vext/ref/fb/effectblueprint/).                          |
| EffectBlueprint([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [EffectBlueprint](/vext/ref/fb/effectblueprint/).                                      |
| EffectBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EffectBlueprint](/vext/ref/fb/effectblueprint/). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [EffectBlueprint](/vext/ref/fb/effectblueprint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EffectBlueprint](/vext/ref/fb/effectblueprint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
