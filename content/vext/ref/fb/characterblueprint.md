---
title: CharacterBlueprint
---
### Base Classes

[ObjectBlueprint](/vext/ref/fb/objectblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| CharacterBlueprint()                                                          | Create a new instance of this container type.                                                                               |
| CharacterBlueprint(CharacterBlueprint other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| CharacterBlueprint([ObjectBlueprint](/vext/ref/fb/objectblueprint/) other)                  | Upcast an instance of type [ObjectBlueprint](/vext/ref/fb/objectblueprint/) to [CharacterBlueprint](/vext/ref/fb/characterblueprint/).                  |
| CharacterBlueprint([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [CharacterBlueprint](/vext/ref/fb/characterblueprint/).                              |
| CharacterBlueprint([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [CharacterBlueprint](/vext/ref/fb/characterblueprint/).                      |
| CharacterBlueprint([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [CharacterBlueprint](/vext/ref/fb/characterblueprint/).                          |
| CharacterBlueprint([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [CharacterBlueprint](/vext/ref/fb/characterblueprint/).                                      |
| CharacterBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterBlueprint](/vext/ref/fb/characterblueprint/). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterBlueprint](/vext/ref/fb/characterblueprint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterBlueprint](/vext/ref/fb/characterblueprint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
