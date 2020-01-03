---
title: CharacterAsset
---
### Base Classes

[CharacterBlueprint](/vext/ref/fb/characterblueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| CharacterAsset()                                                          | Create a new instance of this container type.                                                                       |
| CharacterAsset(CharacterAsset other)                                      | Create a reference copy of an instance of the same type.                                                            |
| CharacterAsset([CharacterBlueprint](/vext/ref/fb/characterblueprint/) other)            | Upcast an instance of type [CharacterBlueprint](/vext/ref/fb/characterblueprint/) to [CharacterAsset](/vext/ref/fb/characterasset/).            |
| CharacterAsset([ObjectBlueprint](/vext/ref/fb/objectblueprint/) other)                  | Upcast an instance of type [ObjectBlueprint](/vext/ref/fb/objectblueprint/) to [CharacterAsset](/vext/ref/fb/characterasset/).                  |
| CharacterAsset([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [CharacterAsset](/vext/ref/fb/characterasset/).                              |
| CharacterAsset([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [CharacterAsset](/vext/ref/fb/characterasset/).                      |
| CharacterAsset([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [CharacterAsset](/vext/ref/fb/characterasset/).                          |
| CharacterAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [CharacterAsset](/vext/ref/fb/characterasset/).                                      |
| CharacterAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterAsset](/vext/ref/fb/characterasset/). |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [CharacterAsset](/vext/ref/fb/characterasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterAsset](/vext/ref/fb/characterasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
