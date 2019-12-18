---
title: CharacterAsset (Frostbite Container)
---
### Base Classes

[CharacterBlueprint](CharacterBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| CharacterAsset()                                                          | Create a new instance of this container type.                                                                       |
| CharacterAsset(CharacterAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| CharacterAsset([CharacterBlueprint](CharacterBlueprint) other)            | Upcast an instance of type [CharacterBlueprint](CharacterBlueprint) to [CharacterAsset](CharacterAsset).            |
| CharacterAsset([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [CharacterAsset](CharacterAsset).                  |
| CharacterAsset([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [CharacterAsset](CharacterAsset).                              |
| CharacterAsset([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [CharacterAsset](CharacterAsset).                      |
| CharacterAsset([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [CharacterAsset](CharacterAsset).                          |
| CharacterAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CharacterAsset](CharacterAsset).                                      |
| CharacterAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CharacterAsset](CharacterAsset). |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterAsset](CharacterAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CharacterAsset](CharacterAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
