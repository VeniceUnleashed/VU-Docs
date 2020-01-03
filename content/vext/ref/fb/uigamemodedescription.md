---
title: UIGameModeDescription
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIGameModeDescription()                                                          | Create a new instance of this container type.                                                                                     |
| UIGameModeDescription(UIGameModeDescription other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIGameModeDescription([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [UIGameModeDescription](UIGameModeDescription).              |
| UIGameModeDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGameModeDescription](UIGameModeDescription). |

## Properties

| Name         | Type                                       | Description |
| ------------ | ------------------------------------------ | ----------- |
| identifier   | string                                     |             |
| name         | string                                     |             |
| abbreviation | string                                     |             |
| desc         | string                                     |             |
| battlelogId  | number                                     |             |
| texturePath  | string                                     |             |
| variations   | [GameModeVariation](GameModeVariation)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIGameModeDescription](UIGameModeDescription) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIGameModeDescription](UIGameModeDescription) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
