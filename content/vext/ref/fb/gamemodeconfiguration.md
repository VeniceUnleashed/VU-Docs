---
title: GameModeConfiguration
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| GameModeConfiguration()                                                          | Create a new instance of this container type.                                                                                     |
| GameModeConfiguration(GameModeConfiguration other)                               | Create a reference copy of an instance of the same type.                                                                          |
| GameModeConfiguration([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [GameModeConfiguration](GameModeConfiguration).                                      |
| GameModeConfiguration([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameModeConfiguration](GameModeConfiguration). |

## Properties

| Name        | Type                                           | Description |
| ----------- | ---------------------------------------------- | ----------- |
| information | [GameModeInformation](GameModeInformation)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [GameModeConfiguration](GameModeConfiguration) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameModeConfiguration](GameModeConfiguration) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
