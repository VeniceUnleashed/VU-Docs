---
title: UIGameModeDescription
---
### Base Classes

[UIItemDescription](/vext/ref/fb/uiitemdescription/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIGameModeDescription()                                                          | Create a new instance of this container type.                                                                                     |
| UIGameModeDescription(UIGameModeDescription other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIGameModeDescription([UIItemDescription](/vext/ref/fb/uiitemdescription/) other)              | Upcast an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription/) to [UIGameModeDescription](/vext/ref/fb/uigamemodedescription/).              |
| UIGameModeDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGameModeDescription](/vext/ref/fb/uigamemodedescription/). |

## Properties

| Name         | Type                                       | Description |
| ------------ | ------------------------------------------ | ----------- |
| identifier   | string                                     |             |
| name         | string                                     |             |
| abbreviation | string                                     |             |
| desc         | string                                     |             |
| battlelogId  | number                                     |             |
| texturePath  | string                                     |             |
| variations   | [GameModeVariation](/vext/ref/fb/gamemodevariation/)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIGameModeDescription](/vext/ref/fb/uigamemodedescription/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIGameModeDescription](/vext/ref/fb/uigamemodedescription/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
