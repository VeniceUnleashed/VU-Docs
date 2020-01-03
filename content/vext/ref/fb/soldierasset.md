---
title: SoldierAsset
---
### Base Classes

[SoldierBlueprint](/vext/ref/fb/soldierblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| SoldierAsset()                                                          | Create a new instance of this container type.                                                                   |
| SoldierAsset(SoldierAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| SoldierAsset([SoldierBlueprint](/vext/ref/fb/soldierblueprint/) other)                | Upcast an instance of type [SoldierBlueprint](/vext/ref/fb/soldierblueprint/) to [SoldierAsset](/vext/ref/fb/soldierasset/).                |
| SoldierAsset([CharacterBlueprint](/vext/ref/fb/characterblueprint/) other)            | Upcast an instance of type [CharacterBlueprint](/vext/ref/fb/characterblueprint/) to [SoldierAsset](/vext/ref/fb/soldierasset/).            |
| SoldierAsset([ObjectBlueprint](/vext/ref/fb/objectblueprint/) other)                  | Upcast an instance of type [ObjectBlueprint](/vext/ref/fb/objectblueprint/) to [SoldierAsset](/vext/ref/fb/soldierasset/).                  |
| SoldierAsset([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [SoldierAsset](/vext/ref/fb/soldierasset/).                              |
| SoldierAsset([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [SoldierAsset](/vext/ref/fb/soldierasset/).                      |
| SoldierAsset([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [SoldierAsset](/vext/ref/fb/soldierasset/).                          |
| SoldierAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoldierAsset](/vext/ref/fb/soldierasset/).                                      |
| SoldierAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierAsset](/vext/ref/fb/soldierasset/). |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [SoldierAsset](/vext/ref/fb/soldierasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierAsset](/vext/ref/fb/soldierasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
