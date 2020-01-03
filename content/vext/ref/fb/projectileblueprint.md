---
title: ProjectileBlueprint
---
### Base Classes

[ObjectBlueprint](/vext/ref/fb/objectblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ProjectileBlueprint()                                                          | Create a new instance of this container type.                                                                                 |
| ProjectileBlueprint(ProjectileBlueprint other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ProjectileBlueprint([ObjectBlueprint](/vext/ref/fb/objectblueprint/) other)                  | Upcast an instance of type [ObjectBlueprint](/vext/ref/fb/objectblueprint/) to [ProjectileBlueprint](/vext/ref/fb/projectileblueprint/).                  |
| ProjectileBlueprint([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [ProjectileBlueprint](/vext/ref/fb/projectileblueprint/).                              |
| ProjectileBlueprint([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [ProjectileBlueprint](/vext/ref/fb/projectileblueprint/).                      |
| ProjectileBlueprint([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [ProjectileBlueprint](/vext/ref/fb/projectileblueprint/).                          |
| ProjectileBlueprint([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ProjectileBlueprint](/vext/ref/fb/projectileblueprint/).                                      |
| ProjectileBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ProjectileBlueprint](/vext/ref/fb/projectileblueprint/). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ProjectileBlueprint](/vext/ref/fb/projectileblueprint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ProjectileBlueprint](/vext/ref/fb/projectileblueprint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
