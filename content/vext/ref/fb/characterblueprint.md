---
title: CharacterBlueprint
---
### Base Classes

[ObjectBlueprint](ObjectBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CharacterBlueprint()                                                          | Create a new instance of this container type.                                                                               |
| CharacterBlueprint(CharacterBlueprint other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| CharacterBlueprint([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [CharacterBlueprint](CharacterBlueprint).                  |
| CharacterBlueprint([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [CharacterBlueprint](CharacterBlueprint).                              |
| CharacterBlueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [CharacterBlueprint](CharacterBlueprint).                      |
| CharacterBlueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [CharacterBlueprint](CharacterBlueprint).                          |
| CharacterBlueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [CharacterBlueprint](CharacterBlueprint).                                      |
| CharacterBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterBlueprint](CharacterBlueprint). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterBlueprint](CharacterBlueprint) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterBlueprint](CharacterBlueprint) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
