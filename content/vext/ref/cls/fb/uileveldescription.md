---
title: UILevelDescription (Frostbite Container)
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UILevelDescription()                                                          | Create a new instance of this container type.                                                                               |
| UILevelDescription(UILevelDescription other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UILevelDescription([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [UILevelDescription](UILevelDescription).              |
| UILevelDescription([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UILevelDescription](UILevelDescription). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| levelName            | string |             |
| texturePath          | string |             |
| thumbnailTexturePath | string |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UILevelDescription](UILevelDescription) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UILevelDescription](UILevelDescription) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
