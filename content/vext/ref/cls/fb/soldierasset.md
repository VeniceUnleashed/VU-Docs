---
title: SoldierAsset (Frostbite Container)
---
### Base Classes

[SoldierBlueprint](SoldierBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| SoldierAsset()                                                          | Create a new instance of this container type.                                                                   |
| SoldierAsset(SoldierAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| SoldierAsset([SoldierBlueprint](SoldierBlueprint) other)                | Upcast an instance of type [SoldierBlueprint](SoldierBlueprint) to [SoldierAsset](SoldierAsset).                |
| SoldierAsset([CharacterBlueprint](CharacterBlueprint) other)            | Upcast an instance of type [CharacterBlueprint](CharacterBlueprint) to [SoldierAsset](SoldierAsset).            |
| SoldierAsset([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [SoldierAsset](SoldierAsset).                  |
| SoldierAsset([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [SoldierAsset](SoldierAsset).                              |
| SoldierAsset([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [SoldierAsset](SoldierAsset).                      |
| SoldierAsset([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [SoldierAsset](SoldierAsset).                          |
| SoldierAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoldierAsset](SoldierAsset).                                      |
| SoldierAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierAsset](SoldierAsset). |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [SoldierAsset](SoldierAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierAsset](SoldierAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
