---
title: EffectBlueprint
---
### Base Classes

[ObjectBlueprint](ObjectBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| EffectBlueprint()                                                          | Create a new instance of this container type.                                                                         |
| EffectBlueprint(EffectBlueprint other)                                     | Create a reference copy of an instance of the same type.                                                              |
| EffectBlueprint([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [EffectBlueprint](EffectBlueprint).                  |
| EffectBlueprint([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [EffectBlueprint](EffectBlueprint).                              |
| EffectBlueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [EffectBlueprint](EffectBlueprint).                      |
| EffectBlueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [EffectBlueprint](EffectBlueprint).                          |
| EffectBlueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EffectBlueprint](EffectBlueprint).                                      |
| EffectBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EffectBlueprint](EffectBlueprint). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [EffectBlueprint](EffectBlueprint) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EffectBlueprint](EffectBlueprint) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
