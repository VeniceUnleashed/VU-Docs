---
title: SoldierBlueprint
---
### Base Classes

[CharacterBlueprint](/vext/ref/fb/characterblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SoldierBlueprint()                                                          | Create a new instance of this container type.                                                                           |
| SoldierBlueprint(SoldierBlueprint other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SoldierBlueprint([CharacterBlueprint](/vext/ref/fb/characterblueprint/) other)            | Upcast an instance of type [CharacterBlueprint](/vext/ref/fb/characterblueprint/) to [SoldierBlueprint](/vext/ref/fb/soldierblueprint/).            |
| SoldierBlueprint([ObjectBlueprint](/vext/ref/fb/objectblueprint/) other)                  | Upcast an instance of type [ObjectBlueprint](/vext/ref/fb/objectblueprint/) to [SoldierBlueprint](/vext/ref/fb/soldierblueprint/).                  |
| SoldierBlueprint([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [SoldierBlueprint](/vext/ref/fb/soldierblueprint/).                              |
| SoldierBlueprint([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [SoldierBlueprint](/vext/ref/fb/soldierblueprint/).                      |
| SoldierBlueprint([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [SoldierBlueprint](/vext/ref/fb/soldierblueprint/).                          |
| SoldierBlueprint([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoldierBlueprint](/vext/ref/fb/soldierblueprint/).                                      |
| SoldierBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierBlueprint](/vext/ref/fb/soldierblueprint/). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierBlueprint](/vext/ref/fb/soldierblueprint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierBlueprint](/vext/ref/fb/soldierblueprint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
