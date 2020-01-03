---
title: ProjectileBlueprint
---
### Base Classes

[ObjectBlueprint](ObjectBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ProjectileBlueprint()                                                          | Create a new instance of this container type.                                                                                 |
| ProjectileBlueprint(ProjectileBlueprint other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ProjectileBlueprint([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [ProjectileBlueprint](ProjectileBlueprint).                  |
| ProjectileBlueprint([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [ProjectileBlueprint](ProjectileBlueprint).                              |
| ProjectileBlueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [ProjectileBlueprint](ProjectileBlueprint).                      |
| ProjectileBlueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [ProjectileBlueprint](ProjectileBlueprint).                          |
| ProjectileBlueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ProjectileBlueprint](ProjectileBlueprint).                                      |
| ProjectileBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProjectileBlueprint](ProjectileBlueprint). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ProjectileBlueprint](ProjectileBlueprint) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProjectileBlueprint](ProjectileBlueprint) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
