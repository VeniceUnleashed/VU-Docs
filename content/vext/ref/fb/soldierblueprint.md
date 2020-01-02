---
title: SoldierBlueprint
---
### Base Classes

[CharacterBlueprint](CharacterBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SoldierBlueprint()                                                          | Create a new instance of this container type.                                                                           |
| SoldierBlueprint(SoldierBlueprint other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SoldierBlueprint([CharacterBlueprint](CharacterBlueprint) other)            | Upcast an instance of type [CharacterBlueprint](CharacterBlueprint) to [SoldierBlueprint](SoldierBlueprint).            |
| SoldierBlueprint([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [SoldierBlueprint](SoldierBlueprint).                  |
| SoldierBlueprint([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [SoldierBlueprint](SoldierBlueprint).                              |
| SoldierBlueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [SoldierBlueprint](SoldierBlueprint).                      |
| SoldierBlueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [SoldierBlueprint](SoldierBlueprint).                          |
| SoldierBlueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoldierBlueprint](SoldierBlueprint).                                      |
| SoldierBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierBlueprint](SoldierBlueprint). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierBlueprint](SoldierBlueprint) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierBlueprint](SoldierBlueprint) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
